import './App.css';
	import PrimarySearchAppBar from './components/header.tsx'
	import Footer from './components/footer.tsx';
	import SignUp from './components/SignUp.tsx';
	import SIGNIN from './components/signIn.tsx';
	import {BrowserRouter,Route,Routes } from "react-router-dom";
	

	function App() {
	  return (
		
	    <div className='App'>  
	  <PrimarySearchAppBar/>
	

	<Routes>
	<Route path="/signin" element={<SIGNIN/>}/>
	<Route path="/Signup" element={<SignUp/>}/>
</Routes>
<Footer/>
    </div>
	
  );
}
export default App;