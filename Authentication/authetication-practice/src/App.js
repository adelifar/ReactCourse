import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

/**
 * import NewPost from "./pages/NewPost";
 */
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import {Suspense} from "react";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Welcome from "./pages/Welcome";


function App() {

    return <Layout>
        <Suspense fallback={<p>Loading....</p>}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/'} element={<Welcome/>}/>
                <Route path={'/auth'} element={<Auth/>}/>

                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Suspense>
    </Layout>
}

export default App;
