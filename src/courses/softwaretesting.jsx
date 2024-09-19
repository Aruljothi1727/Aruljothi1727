import React, { useState } from "react";
import { Button, Card, Rate } from "antd";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/course.css';
import selenium from '../asset/course/selenium.jpg';
import postman from '../asset/course/postman.jpg';
import api from '../asset/course/apitesting.jpeg';
import java from '../asset/course/java.jpg';
import automation from '../asset/course/automation.jpeg';

const seleniumdata = [
  {
    title: 'Selenium Automation Testing with Python',
    name: 'Phil Ebiner',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  },
  {
    title: 'Test Automation Using Selenium WebDriver',
    name: 'Ganesh Sahai',
    starrating: '4',
    textrating: '4',
    price: '₹499'
  },
  {
    title: 'New Selenium IDE',
    name: 'Arun Motoori',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Selenium with Python',
    name: 'Nilesh Wadkar',
    starrating: '4',
    textrating: '4',
    price: '₹399'
  }
];


const postmandata = [
  {
    title: 'Postman: The Complete Guide',
    name: 'Valentin Despa',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'

  },
  {
    title: 'Quick Introduction to Postman',
    name: 'Uplatz Training',
    starrating: '4',
    textrating: '4',
    price: '₹499'
  },
  {
    title: 'Postman Tutorial: Getting Started with API Testing',
    name: 'Praveenkumar',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Learn Postman from Beginner to Advanced',
    name: 'Ayush Kumar',
    starrating: '5',
    textrating: '5',
    price: '₹599'
  }
];

const apidata = [
  {
    title: 'API Developer',
    name: 'Bluelime Learning Solutions',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'API and Web Service Introduction',
    name: 'Nate Ross',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  },
  {
    title: "REST API for beginners",
    name: 'Denis Buchel',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
   {
    title: 'Build a RESTful API with Node.js',
    name: 'Bluelime Learning Solutions',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

const javadata = [
  {
    title: 'Java for Absolute Beginners',
    name: 'Nick H',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: 'Practice Java by Building Projects',
    name: 'Tim Short',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Java for Testers',
    name: 'Dmitry Shyshkin',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'Become a Junior Java Software Developer',
    name: 'Tim Short',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  }
];

const automationdata = [
  {
    title: 'Test Automation Foundations',
    name: 'Ozan llhan',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'

  },
  {
    title: 'Automated Web Testing with JavaScript',
    name: 'Rick Schubert',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Test Automation from scratch',
    name: 'IT Room',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'Roadmap to become a Test Automation Engineer',
    name: 'Ambreen Khan',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '25%', backgroundColor: 'black' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '25%', backgroundColor: 'black' }}
      onClick={onClick}
    />
  );
}

function Softwaretestingtabcontent() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
  var cardsettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  const [activetab, SetActivetab] = useState('Selenium WebDriver')

  const handletabchange = (tab) => {
    SetActivetab(tab)
  }
  return (

    <div style={{ margin: '10px' }}>

      <div style={{ margin: '10px', marginBottom: '20px', padding: '10px' }}>

        <Slider {...settings}>

          <Button type="primary"  {...activetab === 'Selenium WebDriver' ? activetab : ''} onClick={() => handletabchange('Selenium WebDriver')}>Selenium WebDriver</Button>
          <Button type="primary"  {...activetab === 'Postman' ? activetab : ''} onClick={() => handletabchange('Postman')}>Postman</Button>
          <Button type="primary"  {...activetab === 'API Testing' ? activetab : ''} onClick={() => handletabchange('API Testing')}>API Testing</Button>
          <Button type="primary"  {...activetab === 'Java' ? activetab : ''} onClick={() => handletabchange('Java')}>Java</Button>
          <Button type="primary"  {...activetab === 'Automation Testing' ? activetab : ''} onClick={() => handletabchange('Automation Testing')}>Automation Testing</Button>

        </Slider>

      </div>


      <div>

        {activetab === 'Selenium WebDriver' && (
           
          <Slider {...cardsettings}>
              {seleniumdata.map((d) => (
              <Card 
                cover={<img src={selenium} alt='' width={40} height={200}></img>}>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <Link href="https://ant.design" target="blank"><div style={{ fontSize: '20px', color: 'black'}}>{d.title}</div></Link>
                  <div style={{ fontSize: '18px' }}>{d.name}</div>
                  <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
                </div>
              </Card>
            ))}
           
          </Slider>)}

        {activetab === 'Postman' && (
          <Slider {...cardsettings}>
          {postmandata.map((d) => (
            <Card
              cover={<img src={postman} alt='' width={50} height={200}></img>}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Link href="https://ant.design" target="_blank"><div style={{ fontSize: '20px', color: 'black' }}>{d.title}</div></Link>
                <div style={{ fontSize: '18px' }}>{d.name}</div>
                <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
              </div>
            </Card>
          ))}
        </Slider>

        )}
        {activetab === 'API Testing' && (
          <Slider {...cardsettings}>
          {apidata.map((d) => (
            <Card
              cover={<img src={api} alt='' width={50} height={200}></img>}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Link href="https://ant.design" target="_blank"><div style={{ fontSize: '20px', color: 'black' }}>{d.title}</div></Link>
                <div style={{ fontSize: '18px' }}>{d.name}</div>
                <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
              </div>
            </Card>
          ))}
        </Slider>
          )}


        {activetab === 'Java' && (
          
          <Slider {...cardsettings}>
          {javadata.map((d) => (
            <Card
              cover={<img src={java} alt='' width={50} height={200}></img>}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Link href="https://ant.design" target="_blank"><div style={{ fontSize: '20px', color: 'black'}}>{d.title}</div></Link>
                <div style={{ fontSize: '18px' }}>{d.name}</div>
                <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
              </div>
            </Card>
          ))}
        </Slider>
      )}

        {activetab === 'Automation Testing' && (
         <Slider {...cardsettings}>
         {automationdata.map((d) => (
           <Card
             cover={<img src={automation} alt='' width={50} height={200}></img>}>
             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
               <Link href="https://ant.design" target="_blank"><div style={{ fontSize: '20px', color: 'black'}}>{d.title}</div></Link>
               <div style={{ fontSize: '18px' }}>{d.name}</div>
               <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
               <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
             </div>
           </Card>
         ))}
       </Slider>)}

      </div>
    </div>

  );

}
export default Softwaretestingtabcontent;



