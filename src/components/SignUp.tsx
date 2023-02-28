
import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
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

if(password1==password2){
    console.log(password1)
}
else{
    alert("error message");
}
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
   <div className='form_validation'>
<center>
    <h5>
      Signup form 
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
    < PhoneAndroidIcon/>
<TextField  onChange={(e)=>{setNumber(e.target.value)}}value={number} placeholder="enter your phone number" variant="filled" />
</span>
<br/>
<span>
    <LockIcon />
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
</div>
</Card>

        </div>
    )
}


export default SignUp;