import React from 'react';
import { Carousel } from 'antd';
import { Card, List, Row, Col} from 'antd';
import { Button} from 'antd/es/radio';
import {Typography} from 'antd';
import { Rate } from 'antd';
import {UsergroupDeleteOutlined,CalendarTwoTone,FieldTimeOutlined} from "@ant-design/icons"
import { Link } from 'react-router-dom';
import '../css/course.css';
import course from '../asset/courseimage.jpg'
import { CardContent, CardHeader, Rating } from '@mui/material';


const { Text } = Typography;

const data = [
        {
          title: 'Advanced Digital Marketing Strategies',
          enroll:'85 enrolled',
          lessons:'20 lessons',
          duration:'3Hr 45Min',
          name:'Eleanor Pena',
          price:'$55',
          Rating:'3'

        },
        {
          title: 'UI/UX Design Fundamentals',
          enroll:'54 enrolled',
          lessons:'25 lessons',
          duration:'2Hr 45Min',
          name:'Jacob Jones',
          price:'$65',
          Rating:'4'
        },
        {
          title: 'The Complete Web Developer Bootcamp',
          enroll:'35 enrolled',
          lessons:'27 lessons',
          duration:'4Hr 45Min',
          name:'Floyd Miles',
          price:'$85',
          Rating:'3'
        }
      ];



const Courses = () => {

        return (
                <div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px' }}>
                                <h2 style={{ marginBottom: '1px' }}>Our Courses Featured</h2>
                                <h5 style={{ marginTop: '1px' }}>20K Students are enrolled</h5>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems:'center' , justifyContent:'center',flexWrap:
                          'wrap'
                        }}>
                                <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius:'5px'}}>All categories</Button>
                                <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius:'5px' }}>Design</Button>
                                <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius:'5px' }}>Programming</Button>
                                <Button style={{ color: 'white', backgroundColor: '#6659e7' , borderRadius:'5px'}}>Digital Marketing</Button>
                                <Button style={{ color: 'white', backgroundColor: '#6659e7', borderRadius:'5px' }}> IT</Button>
                        </div>

              <div style={{marginTop:'20px', marginBottom:'10px'}}>
              <List 
              style={{display:'flex',flexDirection:'row'}}
    dataSource={data}
    renderItem={(item) => (
  //     <List.Item style={{ display:'flex', flexDirection:'row', alignContent:'center',justifyItems:'space-between'}}
  //     >
  //       <Card style={{width:'340px'}} cover ={<img
  //       alt="example"
  //       src='./profile-icon-original.jpg' color='blueviolet'  width={'100px'}
  //     />} >
  //       <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
  //       <Rate  style={{marginLeft:'0px'}}disabled defaultValue={3} />
  //       <h5 style={{marginRight:'0px'}}>55 reviews</h5>
  //       </div>  1
  //       <Link href="https://ant.design" target="_blank">
  //     {item.title}
  //   </Link>
  //   <div style={{display:'flex',gap:'10px' }}>
  //   <UsergroupDeleteOutlined /><Text>{item.enroll}</Text>
  //   <CalendarTwoTone/><Text>{item.lessons}</Text>
  //   <FieldTimeOutlined /><Text>{item.duration}</Text>
  //   </div>
  //  <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}> 
  //       <Text>{item.name}</Text>
  //  <Text>{item.price}</Text>
  //  </div>
   
  //   <div style={{display:'flex',justifyContent:'space-around'}}>
  //   <Button type="primary" style={{color: 'white', backgroundColor: '#6659e7', borderRadius:'5px'}}>Enroll Now</Button>
  //   </div>
        
  //       </Card>
    //  </List.Item>
    <List.Item style={{margin:'5px',display:'flex', justifyContent:'space-evenly'}}>
    <Row gutter={16}>
    <Col span={9}>
    <Card style={{width:'340px'}}
     cover ={<img
        alt="example"
        src={course} color='blueviolet'  width={'75px'}
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
    </Col>
      </Row>
  </List.Item>
    )}
  />
             </div>


                </div >
        );
}
export default Courses;

