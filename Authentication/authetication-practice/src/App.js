import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

/**
 * import NewPost from "./pages/NewPost";
 */
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import {Suspense, useContext} from "react";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Welcome from "./pages/Welcome";
import AuthContext from './store/auth-context';


function App() {
    const authCtx=useContext(AuthContext);
    return <Layout>
        <Suspense fallback={<p>Loading....</p>}>
            <Routes>
               {/* {authCtx.isLoggedIn && <Route path={'/profile'} element={<Profile/>}/>} */}
               <Route path='/profile' element={authCtx.isLoggedIn && <Profile/> || !authCtx.isLoggedIn && <Navigate to={'/'} replace/>}/>
                <Route path={'/'} element={<Welcome/>}/>
               {!authCtx.isLoggedIn && <Route path={'/auth'} element={<Auth/>}/>}

                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Suspense>
    </Layout>
}

export default App;
