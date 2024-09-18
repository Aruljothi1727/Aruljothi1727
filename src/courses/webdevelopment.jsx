import React, { useState } from "react";
import { Button, Card, Rate } from "antd";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/course.css';
import react from '../asset/course/react.jpeg';
import angular from '../asset/course/angular.jpeg';
import nextjs from '../asset/course/nextjs.jpeg';
import nodejs from '../asset/course/nodejs.png';
import js from '../asset/course/js.png';

const reactdata = [
  {
    title: 'React JS-The Complete Guide 2024',
    name: 'Mathiarasan',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Modern React with Redux',
    name: 'Stephen Grider',
    starrating: '4.1',
    textrating: '4.1',
    price: '₹599'
  },
  {
    title: 'React JS- Complete Guide for Frontend Web Development',
    name: 'Yihua Zhang',
    starrating: '4.3',
    textrating: '4.3',
    price: '₹549'
  },
  {
    title: 'Node with React:Fullstack Web Development',
    name: 'Stephen Grider',
    starrating: '4.1',
    textrating: '4.1',
    price: '₹499'
  }
];


const angulardata = [
  {
    title: 'Angular-The Complete Guide 2024',
    name: 'Maximilian',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: 'Angular 8 Certification Training',
    name: 'Uplatz Training',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'The Moddern Angular Bootcamp',
    name: 'Stephen Grider',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Angular Front to Back',
    name: 'Brad Traversey',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

const nextjsdata = [
  {
    title: 'Next.js 14',
    name: 'Maximillian',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: "Next JS From ScraReact JStch",
    name: 'Stephen Grider',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Next.js by Example',
    name: 'Mirko Nasato',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'TypeScript & Next.js 14',
    name: 'Jacob Lower',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

const nodejsdata = [
  {
    title: 'Learn and Understand NodeJS',
    name: 'Anthony',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: 'Node with React:Fullstack Development',
    name: 'Stephen Grider',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Node JS:Advanced Concepts',
    name: 'Pierre-Henry Soria',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Understanding Node.js:Core Concepts',
    name: 'Mathiarasan',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

const jsdata = [
  {
    title: 'JavaScript-The Complete Guide 2024',
    name: 'Brad Traversy',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: 'JavaScript for Beginners',
    name: 'Yassin Marco',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Modern JavaScript',
    name: 'Jonas',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Master JavaScript from Basics to Advance',
    name: 'EdYoda',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

function Arrow(props) {
  const { className,style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "black" ,width:'30px',height:'30px'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className,style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function Webtabcontent() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow></SamplePrevArrow>,
    nextArrow: <Arrow></Arrow>
  };
  var cardsettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow></SamplePrevArrow>,
    nextArrow: <Arrow></Arrow>
  };

  const [activetab, SetActivetab] = useState('React JS')

  const handletabchange = (tab) => {
    SetActivetab(tab)
  }
  return (

    <div style={{ margin: '10px' }}>

      <div style={{ margin: '10px', marginBottom: '20px', padding: '10px' }}>

        <Slider {...settings}>

          <Button type="primary"  {...activetab === 'React JS' ? activetab : ''} onClick={() => handletabchange('React JS')}>React JS</Button>
          <Button type="primary"  {...activetab === 'Angular' ? activetab : ''} onClick={() => handletabchange('Angular')}>Angular</Button>
          <Button type="primary"  {...activetab === 'Next.Js' ? activetab : ''} onClick={() => handletabchange('Next Js')}>Next Js</Button>
          <Button type="primary"  {...activetab === 'Node.js' ? activetab : ''} onClick={() => handletabchange('Node.js')}>Node.js </Button>
          <Button type="primary"  {...activetab === 'Node.js' ? activetab : ''} onClick={() => handletabchange('Javascript')}>Javascript</Button>

        </Slider>

      </div>


      <div>

        {activetab === 'React JS' && (
           
          <Slider {...cardsettings}>
              {reactdata.map((d) => (
              <Card 
                cover={<img src={react} alt='' width={40} height={200}></img>}>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <Link href="https://ant.design" target="blank"><div style={{ fontSize: '20px', color: 'black'}}>{d.title}</div></Link>
                  <div style={{ fontSize: '18px' }}>{d.name}</div>
                  <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
                </div>
              </Card>
            ))}
           
          </Slider>)}

        {activetab === 'Angular' && (
          <Slider {...cardsettings}>
          {angulardata.map((d) => (
            <Card
              cover={<img src={angular} alt='' width={50} height={150}></img>}>
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
        {activetab === 'Next Js' && (
          <Slider {...cardsettings}>
          {nextjsdata.map((d) => (
            <Card
              cover={<img src={nextjs} alt='' width={50} height={150}></img>}>
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


        {activetab === 'Node.js' && (
          
          <Slider {...cardsettings}>
          {nodejsdata.map((d) => (
            <Card
              cover={<img src={nodejs} alt='' width={50} height={150}></img>}>
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

        {activetab === 'Javascript' && (
         <Slider {...cardsettings}>
         {jsdata.map((d) => (
           <Card
             cover={<img src={js} alt='' width={50} height={150}></img>}>
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
export default Webtabcontent;



