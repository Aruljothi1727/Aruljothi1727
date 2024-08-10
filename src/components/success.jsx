import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Success = () => {
 const navigate = useNavigate()

 
const Gohome=() =>{
navigate('/dashboard')
}

    return(
  <Result
    status="success"
    title="Successfully Submitted your Assignments!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console" onClick={Gohome}>
        Go DASHBOARD
      </Button>,
      <Button key="buy" type='primary' onClick={()=>{navigate('/uploadassignment')}}>Submit Again</Button>,
    ]}
  />
)
};

export default Success;