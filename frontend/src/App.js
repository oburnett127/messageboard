import './App.css';
import Header from './components/Header/Header';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';
import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Posts from './components/Posts/Posts';

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props);
        checkAutoLogin(dispatch, props.history);
    }, []);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/createpost' element={<CreatePost />} />
            </>
        )
    );
    

    return (
        <div>
            {/* <Header /> */}
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

