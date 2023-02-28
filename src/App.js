
import './App.css';
import PrimarySearchAppBar from './components/header.tsx'
import Footer from './components/footer.tsx';
import SignUp from './components/SignUp.tsx';
import SIGNIN from './components/signIn.tsx';
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
     
     
   
      
  <PrimarySearchAppBar/>
{/* <SignUp/> */}
{/* <SIGNIN/> */}

 
<Footer/>
<Routes>
<Route path="/signin" element={SIGNIN}/>

</Routes>
    </div>
  );
}
export default App;
