import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber} from 'antd';
import { Divider } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../context/logincontext';
import loginpage from '../asset/logo-web.png'
import google from '../asset/google.png'


function Registerform  () {
  const {login} = useContext(AuthContext);
  const onFinish = (values) => {
   // console.log('Success:', values);
    login(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
  <div style={{display:'flex', flexDirection:'column',alignItems:'center', height:'700px', marginTop:'50px'}}>
  <div style={{margin:'3px', backgroundColor:'white',width:'500px',alignItems:'center', border:'1px solid lightgrey'}}>
   <div><img  style={{ display:'block', marginLeft:'auto', marginRight:'auto',width:'60%',marginTop:'20px',marginBottom:'20px'}} src={loginpage} /></div>
  <Form 
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: '460px', padding:'10px' ,marginBottom:'0px'
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
   <Form.Item
      label="Full Name"
      name="fullname"
          rules={[
        {
          required: true,
          message: 'Please input your username!',
          
        },
      ]}
    >
        <Input/>
    </Form.Item>

<Form.Item
      label="Mobile Number"
      name="mobileno"
          rules={[
        {
          required: true,
          message: 'Please input your username!',
          
        },
      ]}
    >
        <InputNumber/> 
    </Form.Item>


    <Form.Item
      label="Username"
      name="username"
      
      rules={[
        {
          required: true,
          message: 'Please input your username!',
          
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
      
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 10,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item>
     </Form>
     
  </div>

  <div style={{marginTop:'0px',backgroundColor:'white', width:'500px',textAlign:'center', border:'1px solid lightgrey'}}>
         <h3>Have an account?<span style={{padding:'7px', color:'#1677ff'}}>Click Log in</span></h3>
     </div>

  </div>
  )
};
export default Registerform ;