import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {
    loadingToggleAction,
    loginAction,
} from '../../store/actions/AuthActions';

function Login(props) {
    const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }

        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }

        setErrors(errorObj);

        if (error) return;
        dispatch(loadingToggleAction(true));

        dispatch(loginAction(email, password, props.history));
    }

    return (
        <div>
            {props.showLoading && <Loader />}
            <div>
                <h1 className='text-yellow-500'>Login</h1>

                {props.errorMessage && (
                    <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                        {props.errorMessage}
                    </div>
                )}
                {props.successMessage && (
                    <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                        {props.successMessage}
                    </div>
                )}

                <form onSubmit={onLogin}>
                    <div>
                        <label>Email</label>
                        <div>
                            <input
                                type='text'
                                className='border border-gray-600 p-1 w-full'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input
                                type='password'
                                className='border border-gray-600 p-1 w-full'
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />
                        </div>
                        {errors.password && <div>{errors.password}</div>}
                    </div>

                    <div className='my-3'>
                        <button
                            type='submit'
                            className='bg-green-700 text-white px-3 py-1'
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};

export default connect(mapStateToProps)(Login);
