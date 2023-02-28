import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import SignUp from './SignUp';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
const SIGNIN = () =>{
    const [userName, setuserName]=useState(' ');
    const [password,setpassword]=useState('');

const handleData=(e)=>{

e.preventDefault()



console.log("handledata is called")
console.log(userName);
console.log(password);
}
return(
<div> 
<Card>
<div className='form_validation'>
<center>
<h5>
  Signin form 
</h5>
<form>
    <span>
        <AccountCircleIcon/>
<TextField onChange={(e)=>{setuserName(e.target.value)}}value={userName} placeholder="enter your username" variant="filled" />
</span>
<br/>
<span>
<PasswordIcon/>
<TextField onChange={(e)=>{setpassword(e.target.value)}}value={password} placeholder="enter password" variant="filled" />

</span>
<br/><br/>
<button onClick={handleData}>
    submit
</button>
    </form>
    </center>
    </div>
    </Card>
    </div>
)
}
export default SIGNIN;

