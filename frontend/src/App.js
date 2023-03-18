import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';

const Home = lazy(() => import('./pages/Home/Home'));
const CreateMessagePage = lazy(() => import('./pages/CreateMessage/CreateMessagePage'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const Messages = lazy(() => import('./pages/Messages/MessagesPage'));
const EditMessage = lazy(() => import('./pages/EditMessage/EditMessage'));
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
                <Route path='/messages' element={<Messages />} />
                <Route path='/createmessage' element={<CreateMessagePage />} />
                <Route path='/editmessage' element={<EditMessage />} />
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
