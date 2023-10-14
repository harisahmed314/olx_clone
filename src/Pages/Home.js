import React,{useEffect,useContext} from 'react';

import Header from '../Componets/Header/Header';
import Banner from '../Componets/Banner/Banner';

import Posts from '../Componets/Posts/Posts';
import Footer from '../Componets/Footer/Footer';
import { Firebase } from '../firebase/config';
import { AuthContext } from '../contextStore/AuthContext';

function Home(props) {
 const {setUser}=useContext(AuthContext)
  useEffect(()=>{
    
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      
    })
    
 
  },[setUser])
  
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 