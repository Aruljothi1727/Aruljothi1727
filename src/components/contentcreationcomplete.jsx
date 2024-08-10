import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';


const ContentCreationComplete = () => {
  const navigate = useNavigate();
  const Changepage =() =>{
    navigate('/dashboard')
      }
      const Submitagain =() =>{
        navigate('/addcontent')
          }
 return(<Result
  status="success"
  title="Successfully Uploaded your Data!"
  extra={[
    <Button type="primary" onClick={Changepage}>
      Go Dashboard
    </Button>,
    <Button type="primary" onClick={Submitagain}>Submit Again</Button>
  ]}
/>
) 

}
    
  
export default ContentCreationComplete;
