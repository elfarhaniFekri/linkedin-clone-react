import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed.jsx";
import { auth } from "./firebase";
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import Sidebar from "./Sidebar.jsx";
import Widgets from "./Widgets";

function App() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       // user is logged in
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL,
  //         })
  //       );
  //     } else {
  //       // user is logged out
  //       dispatch(logout());
  //     }
  //   });
  // }, []);

  // return (
  //   <div className="app">
  //     <Header />

  //     {!user ? (
  //       <Login />
  //     ) : (
  //       <div className="app__body">
  //         <Sidebar />
  //         <Feed />
  //         <Widgets />
  //       </div>
  //     )}
  //   </div>
  // );
const user = useSelector(selectUser)
const dispatch = useDispatch()
useEffect(() =>{
  auth.onAuthStateChanged((userAuth) =>{
    if(userAuth){
     dispatch(login({
       email : userAuth.email,
       uid : userAuth.uid,
       displayName : userAuth.displayName,
       photoUrl : userAuth.photoUrl
     }))
    }else{
      dispatch(logout())
    }
  })
})
  return(

    <div className="app">
      <Header />

      {!user ? (<Login />) : (
    
      <div className="app__body">
           <Sidebar />
           <Feed />
      </div>

      ) }
    </div>
  )
}

export default App;
