import { Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import Sider from 'antd/es/layout/Sider';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SettingFilled
} from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';



function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/dashboard">Dashboard</Link>, '1', <PieChartOutlined />),
  getItem(<Link to="/courses">Courses</Link>, '2', <DesktopOutlined />),
  getItem(<Link to="/Assignments">Assignments</Link>, '3', <UserOutlined />),
  getItem(<Link to="/AddContent">Add Content</Link>, '4', <FileOutlined />),
  ];
const Sidemenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ minHeight: '83vh' }}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} disabled={false} />
    </Sider>
  );

}
export default Sidemenu;