
import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Password';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './signup.css'

const SignUp = () =>{
    const [name, setName]=useState('');
    const [mail,setMail]=useState('');
    const[number,setNumber]=useState('');
    const [password1,setPassword1]=useState('')
    const [password2,setPassword2]=useState('')


const handleData=(e)=>{

e.preventDefault()
console.log("handledata is called")
console.log(name)
console.log(mail)
console.log(number)
console.log(password1)
console.log(password2)
setName('');
setMail('');
setNumber('');
setPassword1('');
setPassword2('');
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
<TextField  onChange={(e)=>{setMail(e.target.value)}}value={mail}  placeholder="enter your email" variant="filled" />
</span>
<br/>
<span>
    < LocalPhoneIcon/>
<TextField  onChange={(e)=>{setNumber(e.target.value)}}value={number} placeholder="enter your phone number" variant="filled" />
</span>
<br/>
<span>
    <PasswordIcon/>
<TextField onChange={(e)=>{setPassword1(e.target.value)}}value={password1} type="password" placeholder="enter your password" variant="filled" />
<br/>
<LockOpenIcon/>
<TextField onChange={(e)=>{setPassword2(e.target.value)}}value={password2} type="password" placeholder="conform password" variant="filled" />
</span>
<br/><br/>
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