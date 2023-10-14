import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Signup from '../Pages/Signuppage';
import Login from '../Pages/Login';
import ViewPost from '../Pages/ViewPost';
import ViewMore from '../Pages/ViewMore';
import Createpost from '../Pages/CreatePost';

function MainRoutes() {
    return (
       <Router>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/login" element={<Login />} />
               <Route path="/create" element={<Createpost />} />
               <Route path="/view" element={<ViewPost />} />
               <Route path="/viewmore" element={<ViewMore />} />
           </Routes>
       </Router>
    );
}

export default MainRoutes;
