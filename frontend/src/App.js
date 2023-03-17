import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';

const Home = lazy(() => import('./pages/Home/Home'));
const CreatePost = lazy(() => import('./pages/CreatePost/CreatePost'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const Posts = lazy(() => import('./pages/Posts/PostsPage'));
const EditPost = lazy(() => import('./pages/EditPost/EditPost'));
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
                <Route path='/' errorElement={<ErrorPage />} element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/createpost' element={<CreatePost />} />
                <Route path='/editpost' element={<EditPost />} />
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
