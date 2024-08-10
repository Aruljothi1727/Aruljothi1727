import React from 'react';
import { Tabs } from 'antd';
import Loginform from './loginform.jsx'
import Registerform from './registerform.jsx';

const onChange = (key) => {
  console.log(key);
};
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
  <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />);
}
export default Login;