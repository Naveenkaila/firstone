import React,{useEffect}from 'react';
import axios from 'axios'

const Home=()=>{
    useEffect(() =>{
        axios.get('http://localhost:3000/users').then((response)=>{
           console.log(response.data[1].name);
        })
      });
    return(

<div className='container'>
    <h3>welcome to flipkart</h3>
</div>

    )
}
export default Home;