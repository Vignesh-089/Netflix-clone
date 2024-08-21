import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from '../Pages/Public/Landingpage/Landingpage'
import Signin from '../Pages/Auth/Signin/Signin.jsx'
import Signup from "../Pages/Auth/Signup/Signuppage1/Signuppage1.jsx"
import Signuppage2 from '../Pages/Auth/Signup/Signuppage2/Signuppage2.jsx'
import Signincode from '../Pages/Auth/Signin/Signincode.jsx'
import Signuppage1 from "../Pages/Auth/Signup/Signuppage1/Signuppage1.jsx"
import Signout from '../Pages/Auth/Signout/Signout.jsx'
import Signuppage3 from '../Pages/Auth/Signup/Signuppage3/Signuppage3.jsx'
import Home from '../Pages/Portal/Home/Home.jsx'
import Tvshows from '../Pages/Portal/Tvshows/Tvshows.jsx'
import Mylist from '../Pages/Portal/Mylist/Mylist.jsx'
import Movies from '../Pages/Portal/Movies/Movies.jsx'
import Popular from "../Pages/Portal/Popular/Popular.jsx"

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landingpage />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Signuppage2" element={<Signuppage2 />} />
        <Route path="Signincode" element={<Signincode />} />
        <Route path="Signuppage1" element={<Signuppage1 />} />
        <Route path="Signout" element={<Signout />} />
        <Route path="Landingpage" element={<Landingpage />} />
        <Route path="Signuppage3" element={<Signuppage3 />} />
        <Route path="Home" element={<Home />} />
        <Route path="Tvshows" element={<Tvshows />} />
        <Route path="Mylist" element={<Mylist />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="Popular" element={<Popular />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Approuter;
