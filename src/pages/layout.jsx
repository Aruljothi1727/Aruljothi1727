import React, { useState,useContext } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SettingFilled
} from '@ant-design/icons';
import Sidemenu from './sider.jsx';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contents from './content.jsx';
import Mainheader from './header.jsx';
import Login from '../components/loginpage.jsx'
import {AuthContext}   from '../context/logincontext.jsx';

const { Header, Content, Footer,Sider } = Layout;


const Mainlayout = () => {

  const {isLoggedIn}  = useContext(AuthContext);

    const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    !isLoggedIn ? <Login/>:
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
                <Layout>
        <Mainheader/>
        <Layout>
           <Sidemenu></Sidemenu>
        <Contents></Contents>
        </Layout>

          <Footer
          style={{
            textAlign: 'center', padding: 0,
            margin:0
          }}
        >
          Cloud Technology ©{new Date().getFullYear()} Created by Aruljothi
        </Footer>
      </Layout>
      </Layout>
    
  );
};
export default Mainlayout;
