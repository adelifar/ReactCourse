import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

/**
 * import NewPost from "./pages/NewPost";
 */
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import React, { Suspense, useContext} from "react";

import AuthContext from './store/auth-context';

const Profile=React.lazy(()=>import("./pages/Profile"))
const Auth=React.lazy(()=>import("./pages/Auth"))
const Welcome=React.lazy(()=>import("./pages/Welcome"))

function App() {
    const authCtx=useContext(AuthContext);
    return <Layout>
        <Suspense fallback={<h2>Loading....</h2>}>
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
