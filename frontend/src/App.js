import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';
import HomePage from './pages/Home/HomePage';
import MessagesPage from './pages/Messages/MessagesPage';

//const HomePage = lazy(() => import('./pages/Home/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUp/SignUpPage'));
const LoginPage = lazy(() => import('./pages/Login/LoginPage'));
const CreateMessagePage = lazy(() => import('./pages/CreateMessage/CreateMessagePage'));
//const MessagesPage = lazy(() => import('./pages/Messages/MessagesPage'));
const SingleMessagePage = lazy(() => import('./pages/SingleMessage/SingleMessagePage'));
const EditMessagePage = lazy(() => import('./pages/EditMessage/EditMessagePage'));
const DeleteMessagePage = lazy(() => import('./pages/DeleteMessage/DeleteMessagePage'));
const ErrorPage = lazy(() => import('./pages/Error/ErrorPage'));
const RootLayout = lazy(() => import('./pages/RootLayout'));
const MessageRootLayout = lazy(() => import('./pages/MessageRootLayout'));

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props);
        checkAutoLogin(dispatch, props.history);
    }, []);

    const router = createBrowserRouter(
        createRoutesFromElements(
            
                <Route path='/' errorElement={<ErrorPage />} element={<RootLayout />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path='/signup' element={<SignUpPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/messages' element={<MessageRootLayout />}>
                        <Route index element={<MessagesPage />}></Route>
                        <Route path='/messages/:id' id='message-detail'> 
                            <Route index element={<SingleMessagePage />}></Route>
                            <Route path='/messages/:id/edit' element={<EditMessagePage />}></Route>
                            <Route path='/messages/:id/delete' element={<DeleteMessagePage />}></Route>
                        </Route>
                        <Route path='/messages/new' element={<CreateMessagePage />}></Route>
                    </Route>
                </Route>
                
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
