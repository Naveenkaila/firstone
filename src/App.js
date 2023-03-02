import './App.css';
	import PrimarySearchAppBar from './components/header.tsx'
	import Footer from './components/footer.tsx';
	import SignUp from './components/SignUp.tsx';
	import SIGNIN from './components/signIn.tsx';
	import {BrowserRouter,Route,Routes } from "react-router-dom";
	import Home from './components/home.tsx';

	function App() {
	  return (
		
	    <div className='App'>  

	
	  <PrimarySearchAppBar/>
	

	<Routes>
	<Route path="/signin" element={<SIGNIN/>}/>
	<Route path="/Signup" element={<SignUp/>}/>
	<Route path="/" element={<Home/>}/>
</Routes>
<Footer/>
    </div>
	
  );
}
export default App;