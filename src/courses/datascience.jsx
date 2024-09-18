import React, { useState } from "react";
import { Button, Card, Rate } from "antd";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import machine from '../asset/course/machine.jpeg';
import python from '../asset/course/python.jpg';
import ai from '../asset/course/ai.jpeg';
import deeplearning from '../asset/course/deeplearning.jpg';
import genai from '../asset/course/genai.jpeg'
import '../css/course.css'

const machinelearningdata = [
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


const pythondata = [
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

const aidata = [
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

const deeplearningdata = [
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

const genaidata = [
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
     style={{ ...style, display: "block", background: "black",fontSize:'30px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
       style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function Datasciencetabcontent() {

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

  const [activetab, SetActivetab] = useState('Machine Learning')

  const handletabchange = (tab) => {
    SetActivetab(tab)
  }
  return (

    <div style={{ margin: '10px' }}>

      <div style={{ margin: '10px', marginBottom: '20px', padding: '10px' }}>

        <Slider {...settings}>

          <Button type="primary"  {...activetab === 'Machine Learning' ? activetab : ''} onClick={() => handletabchange('Machine Learning')}>Machine Learning</Button>
          <Button type="primary"  {...activetab === 'Python' ? activetab : ''} onClick={() => handletabchange('Python')}>Python</Button>
          <Button type="primary"  {...activetab === 'Artificial Intelligence (AI)' ? activetab : ''} onClick={() => handletabchange('Artificial Intelligence (AI)')}>Artificial Intelligence (AI)</Button>
          <Button type="primary"  {...activetab === 'Deep Learning' ? activetab : ''} onClick={() => handletabchange('Deep Learning')}>Deep Learning </Button>
          <Button type="primary"  {...activetab === 'Generative AI (Gen AI)' ? activetab : ''} onClick={() => handletabchange('Generative AI (Gen AI)')}>Generative AI (Gen AI)</Button>

        </Slider>

      </div>


      <div>

        {activetab === 'Machine Learning' && (
           
          <Slider {...cardsettings}>
              {machinelearningdata.map((d) => (
              <Card
                cover={<img src={machine} alt='' width={50} height={200}></img>}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Link href="https://ant.design" target="_blank"><div style={{ fontSize: '20px', color: 'black' }}>{d.title}</div></Link>
                  <div style={{ fontSize: '18px' }}>{d.name}</div>
                  <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
                </div>
              </Card>
            ))}
           
          </Slider>)}

        {activetab === 'Python' && (
          <Slider {...cardsettings}>
          {pythondata.map((d) => (
            <Card
              cover={<img src={python} alt='' width={50} height={200}></img>}>
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
        {activetab === 'Artificial Intelligence (AI)' && (
          <Slider {...cardsettings}>
          {aidata.map((d) => (
            <Card
              cover={<img src={ai} alt='' width={50} height={200}></img>}>
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


        {activetab === 'Deep Learning' && (
          
          <Slider {...cardsettings}>
          {deeplearningdata.map((d) => (
            <Card
              cover={<img src={deeplearning} alt='' width={50} height={200}></img>}>
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

        {activetab === 'Generative AI (Gen AI)' && (
         <Slider {...cardsettings}>
         {genaidata.map((d) => (
           <Card
             cover={<img src={genai} alt='' width={50} height={200}></img>}>
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
export default Datasciencetabcontent;