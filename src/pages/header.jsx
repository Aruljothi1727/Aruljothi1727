import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo-web.png'
import {  UserOutlined } from '@ant-design/icons';
import {  Layout, Menu, theme, Image, Avatar, Button} from 'antd';
import { useContext } from 'react';
import  {AuthContext} from '../context/logincontext.jsx'

const { Header, Content, Footer, Sider } = Layout;

const Mainheader = ()=> {

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const  navigate = useNavigate();
const home = () => {
 navigate('./dashboard')
};
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    return(
        <Header
          style={{
            padding: 0,
            backgroundColor:colorBgContainer
          }}
      >
        <Image src={logo} alt='no image' float='right' style={{cursor:'pointer'}} preview ={false} height='58px' weight= '96px' onClick={home}/>
         <Avatar
      size={48}
      style={{ float: "right", margin: "8px"}}
      icon={<UserOutlined />}
    ></Avatar>
   <Button type='primary'  style={{float:'right', height:'35px', backgroundColor:'#1677ff', textAlign:'center', margin:'15px', width:'80px'}} onClick={handleLogout}>
    Log Out
    </Button>
      </Header>
           );
};
export default Mainheader