import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';

const Home = lazy(() => import('./pages/Home/Home'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const CreateMessagePage = lazy(() => import('./pages/CreateMessage/CreateMessagePage'));
const MessagesPage = lazy(() => import('./pages/Messages/MessagesPage'));
const SingleMessagePage = lazy(() => import('./pages/SingleMessage/SingleMessagePage'));
const EditMessagePage = lazy(() => import('./pages/EditMessage/EditMessagePage'));
const DeleteMessagePage = lazy(() => import('./pages/DeleteMessage/DeleteMessagePage'));
const ErrorPage = lazy(() => import('./pages/Error/ErrorPage'));

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props);
        checkAutoLogin(dispatch, props.history);
    }, []);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' ErrorBoundary={<ErrorPage />} element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/messages' element={<MessagesPage />} />
                <Route path='/message/:id' element={<SingleMessagePage />} />
                <Route path='/createmessage' element={<CreateMessagePage />} />
                <Route path='/editmessage/:id' element={<EditMessagePage />} />
                <Route path='/deletemessage/:id' element={<DeleteMessagePage />} />
            </>
        )
    );
    
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default App;
