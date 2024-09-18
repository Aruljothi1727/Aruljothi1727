import React from 'react';
import { Tabs, Button } from "antd";
import { Typography } from 'antd';
import '../css/course.css'
import Webtabcontent from './webdevelopment';
import Datasciencetabcontent from './datascience';
import Mobiletabcontent from './mobiledevelopement';
import Databasetabcontent from './database';
import Softwaretestingtabcontent from './softwaretesting';
import Softwaredevelopmenttabcontent from './softwaredevelopment';

const { Text } = Typography;

const items = [
  {
    key: '1',
    label: 'Web Development',
    children: (<Webtabcontent/>),
  },
  {
    key: '2',
    label: 'Data Science',
    children: (<Datasciencetabcontent/>),
  },
  {
    key: '3',
    label: 'Mobile Development',
    children: (<Mobiletabcontent/>),
  },
  {
    key: '4',
    label: 'Database Design & Development',
    children: (<Databasetabcontent/>),
  },
  {
    key: '5',
    label: 'Software Testing',
    children: (<Softwaretestingtabcontent/>),
  },
  {
    key: '6',
    label: 'Software Development Tools',
    children: (<Softwaredevelopmenttabcontent/>),
  },
];

const Courses = () => {

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px' }}>
        <h2 style={{ marginBottom: '1px' }}>Our Courses Featured</h2>
        <h5 style={{ marginTop: '1px' }}>20K Students are enrolled</h5>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius: '5px' }}>All categories</Button>
        <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius: '5px' }}>Design</Button>
        <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius: '5px' }}>Programming</Button>
        <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius: '5px' }}>Digital Marketing</Button>
        <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius: '5px' }}> IT</Button>
      </div>

      <div style={{marginTop:'20px'}}>
      <Tabs centered defaultActiveKey="1" items={items} />


      </div>


    </div >
  );
}
export default Courses;







{/* <div style={{marginTop:'3px', marginBottom:'5px'}}>
              <List 
              grid={{
                gutter: 16,
                // xs: 1,
                // sm: 2,
                // md: 4,
                // lg: 4,
                // xl: 6,
                // xxl: 3,
                column:3
              }}
             
    dataSource={data}
    renderItem={(item) => (
 
    <List.Item style={{margin:'5px',display:'grid', justifyContent:'center',gridTemplateColumns: 'repeat(autofit,minmax(300px,1fr))' ,alignItems:'center'}}>
   
    <Card style={{width:'340px'}}
     cover ={<img
        alt="example"
        src={course} color='blueviolet'  width={'50px'}
      />} >
        <Link href="https://ant.design" target="_blank">
      {item.title}
         </Link>
          <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
        <Rate  style={{marginLeft:'0px'}}disabled defaultValue={item.Rating} />
        <h5 style={{marginRight:'0px'}}>55 reviews</h5>
        </div>  
       
    <div style={{display:'flex',gap:'7px' }}>
    <UsergroupDeleteOutlined /><Text>{item.enroll}</Text>
    <CalendarTwoTone/><Text>{item.lessons}</Text>
    <FieldTimeOutlined /><Text>{item.duration}</Text>
    </div>
   <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}> 
        <Text>{item.name}</Text>
   <Text>{item.price}</Text>
   </div>
       <div style={{display:'flex',justifyContent:'space-around'}}>
    <Button type="primary" style={{color: 'white', backgroundColor: '#6659e7', borderRadius:'5px'}}>Enroll Now</Button>
  </div>
    </Card>
       
  </List.Item>
    )}
  />
             </div> */}
