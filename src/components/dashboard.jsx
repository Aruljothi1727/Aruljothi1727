import React, { useState } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { useNavigate } from "react-router-dom";
import { Flex, Progress, Space, Card } from 'antd';
import { BookTwoTone, CustomerServiceTwoTone, EditTwoTone, EllipsisOutlined, CalendarOutlined } from "@ant-design/icons";
import Calendar from 'react-calendar';
import '../css/dashboard.css'
import "react-calendar/dist/Calendar.css";
import fullstackpic from '../asset/fullstack.png';
import html from '../asset/html_css.png';
import datascience from '../asset/Picture2.png';
import python from '../asset/python.png';
import { autocompleteClasses } from "@mui/material";

function Dashboard() {
  const navigatecourse = useNavigate();

  const navigate = () => {
    navigatecourse('/courses')
  }
  const [show, SetShow] = useState(false);
  const [date, changeDate] = useState(new Date());

   function changeValue(val) {
      changeDate(val);
   }
  
  function Showcalender() {
    SetShow(!show);
  }

  return (
    <div class='container'>

      <div class='subcontainer1' >

        <div style={{ marginBottom: '1px', marginTop: '5px' }}>
          <h3 style={{ margin: '0px' }}>Welcome Back! Hello Admin</h3>
        </div>

        <Flex gap={'10px'} Horizontal flexGrow='2'>
          <h3 style={{ marginTop: '1px' }}>My Courses</h3>
          <h5 style={{ marginLeft: '10px', marginTop: '10px', color: '#1677ff', cursor: 'pointer' }} onClick={navigate}>View all</h5>
        </Flex>

        <Flex gap={'15px'} Horizontal wrap justify="space-evenly">

          <div class='div1'>
            <h3 class='h3'>Full Stack Development</h3>
            <h5 class='h5'>20 Lessons</h5>
            <div class='subdiv'>
              <Progress type="circle" percent={75} strokeColor={'white'} size={'small'} />
              <img class='image' src={fullstackpic} alt="Cloudline" width={'100px'} height={'80px'} />
            </div>
          </div>

          <div class='div2'>
            <h3 class='h3'>HTML- CSS</h3>
            <h5 class='h5'>15 Lessons</h5>
            <div class='subdiv'>
              <Progress type="circle" percent={60} strokeColor={'white'} size={'small'} />
              <img class='image' src={html} alt="Cloudline" width={'100px'} />
            </div>
          </div>

          <div class='div3'>
            <h3 class='h3'>Data Science</h3>
            <h5 class='h5'>25 Lessons</h5>
            <div class='subdiv'>
              <Progress type="circle" percent={65} strokeColor={'white'} size={'small'} />
              <img class='image' src={datascience} alt="Cloudline" width={'80px'} />
            </div>
          </div>


          <div class='div4'>
            <h3 class='h3'>Python</h3>
            <h5 class='h5'>20 Lessons</h5>
            <div class='subdiv'>
              <Progress type="circle" percent={75} strokeColor={'white'} size={'small'} />
              <img class='image' src={python} alt="Cloudline" width={'100px'} height={'80px'} />
            </div>
          </div>
        </Flex>


        <div>


          <div style={{ display: 'flex', flexDirection: 'column' }}></div>
                    
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,350px)', margin: '5px' }}>
          <h3 style={{ flexBasis: '200px' }}>Planning</h3>
                <Space gap='20px'>
              <div> <CalendarOutlined style={{ fontSize: '30px', color: '#1f73c5' }} onClick={Showcalender} />
                {show ? <Calendar onChange = {changeValue} value = {date} />:''}
              </div>
             <div><h4>{date.toLocaleDateString()}</h4></div>
            </Space>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,350px)', justifyContent: 'center', rowGap: '5px', columnGap: '10px', marginTop: '20px' }}>
            <Card >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Space><BookTwoTone style={{ fontSize: '25px', backgroundColor:'lightskyblue',width:'35px',height:'35px'}} /><h4>Reading Beginner Topic 1</h4><EllipsisOutlined style={{ transform: 'rotate(90deg)', fontSize: '20px' }} /></Space></div></Card>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Space>
                  <EditTwoTone twoToneColor="#ff9b40" style={{ fontSize: '25px', backgroundColor:'#fac798',width:'35px',height:'35px' }} /><h4>Reading Beginner Topic 2</h4><EllipsisOutlined style={{ transform: 'rotate(90deg)', fontSize: '20px' }} /></Space></div></Card>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Space>
                  <CustomerServiceTwoTone twoToneColor="#97dc4e" style={{ fontSize: '25px', backgroundColor:'rgb(185 242 125)',width:'35px',height:'35px'}} /><h4>Listening Intermediate Topic 1</h4><EllipsisOutlined style={{ transform: 'rotate(90deg)', fontSize: '20px' }} /></Space></div></Card>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Space>
                  <BookTwoTone twoToneColor="#2391e7" style={{ fontSize: '25px', backgroundColor:'lightskyblue',width:'35px',height:'35px'}} /><h4>Reading Advanced Topic 1</h4><EllipsisOutlined style={{ transform: 'rotate(90deg)', fontSize: '20px' }} /></Space></div></Card>
          </div>

        </div>


      </div>


      <div class='subcontainer2'>

        <div style={{ margin: '10px' }}>
          <h2>Statistics</h2>
          <section class="section">
            <div class='div' >
              <h4>Courses</h4>
              <h2 class='heading'>2</h2>
            </div>

            <div class='div'>
              <h4>Total Points Granted </h4>
              <h2 class='heading'>250</h2>
            </div>

            <div class='div' >
              <h4>Courses In Progress</h4>
              <h2 class='heading'>3</h2>
            </div>
            <div class='div' >
              <h3>Tasks Finished</h3>
              <h2 class='heading'>5</h2>
            </div>
          </section>
        </div>

        <div style={{ margin: '10px' }}>
          <h2>Activity</h2>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] }]}
            series={[{ data: [5, 2, 3, 8, 6, 7, 4] }]}
            width={500}
            height={300}
            borderRadius={10}

          />
        </div>

      </div>

    </div>
  )
};
export default Dashboard;