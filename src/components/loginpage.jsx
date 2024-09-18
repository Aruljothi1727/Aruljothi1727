import React from 'react';
import { Tabs } from 'antd';
import Loginform from './loginform.jsx'
import Registerform from './registerform.jsx';


const items = [
  {
    key: '1',
    label: 'Log In',
    children: (<Loginform/>

    ),
  },
  {
    key: '2',
    label: 'Sign Up',
    children: (<Registerform/>),
  },
 
];
const Login = () =>{
  return(
    <div className='login' style={{width:'100%', marginLeft:'auto',marginRight:'auto',height:'750px'}}>
      <Tabs defaultActiveKey="1" centered items={items}  style={{width:'50%',marginLeft:'auto',marginRight:'auto',border:'1px solid white', height:'700px', backgroundColor:'white',opacity:'0.9'}} /> 
      </div>
    );
}
export default Login;