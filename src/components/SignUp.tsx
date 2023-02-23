
import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Password';
const SignUp = () =>{
    const [name, setName]=useState(' ');
    const [mail,setMail]=useState('');
    const[number,setNumber]=useState('');
    const [password,setPassword]=useState('')



const handleData=()=>{
console.log("handledata is called")
console.log(name)
}
    return(

        <div>
       
<Card>
   
<center>
    <h5>
      SIGNUP FORM  
    </h5>
    <form>
<span>
<AccountCircleIcon/>
<TextField onChange={(e)=>{setName(e.target.value)}}value={name} placeholder="enter your name" variant="filled" />
</span>
<br/>
<span>
    <MailIcon/>
<TextField  placeholder="enter your email" variant="filled" />
</span>
<br/>
<span>
<TextField  placeholder="enter your phone number" variant="filled" />
</span>
<br/>
<span>
    <PasswordIcon/>
<TextField  type="password" placeholder="enter your password" variant="filled" />
<br/>
<TextField  type="password" placeholder="conform password" variant="filled" />
</span>
<br/>
<button onClick={handleData}>
    submit
</button>
</form>
</center>
</Card>

        </div>
    )
}
export default SignUp;