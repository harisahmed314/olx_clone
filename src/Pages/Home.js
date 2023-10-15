import React,{useEffect,useContext} from 'react';


import { Firebase } from '../firebase/config';
import { AuthContext } from '../contextStore/AuthContext';
import Header from '../Componets/Header/Header';
import Footer from '../Componets/Footer/Footer';
import Posts from '../Componets/Posts/Posts';
import Banner from '../Componets/Banner/Banner';

function Home(props) {
 const {setUser}=useContext(AuthContext)
  useEffect(()=>{
    
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      
    })
    
 
  },[setUser])
  
  return (
    <div className="homeParentDiv">
      <Header/>
      <Banner/>
      <Posts/>
      
      <Footer/>
    </div>
  );
}

export default Home;
 