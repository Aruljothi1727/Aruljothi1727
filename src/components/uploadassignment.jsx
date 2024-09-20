import React from 'react';
import '../css/uploadassignment.css'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Dragger } = Upload;

const props = {

  name: 'file',
  multiple: true,
  action: 'https://localhost:3000/api/upload',

  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Uploadfiles = () => {
  const navigate = useNavigate()

  const Successpage =() =>{
navigate('/success')
  }
  const Assignmentpage =() =>{
    navigate('/assignments')
      }
  return(
  <>
<div style={{margin:'10px',display:'flex', justifyContent:'center', flexDirection:"column",alignItems:"center" }}>

    <Button style={{width:'maxcontent'}} type='primary'>Assignment 1</Button>
        <div style={{backgroundColor:'white', margin:'10px',width:'663px',textAlign:'center' }}>
  <h3 style={{marginBottom:'2px'}} >Description</h3>
  <p style={{marginTop:'2px'}}>Create a Resume Using HTML and CSS</p>
     </div>
     
</div>

<div className='upload'>
  <Dragger {...props} style={{width:'500px', height:'300px', backgroundColor:'white', gap:'20px'}}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
    </div>
    
    <div style={{margin:'30px',display:'flex', flexDirection:'row', justifyContent:'center', gap:'10px'}}>
    <Space>
      <Button type='primary' onClick={Successpage}>Submit</Button>
      <Space>
      <Button type='primary' onClick={Assignmentpage}> Cancel</Button>
      </Space>
      </Space>
         </div>
         
</>
)}
export default Uploadfiles;
