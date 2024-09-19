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
    title: 'Learn Machine Learning in 21 Days',
    name: 'Code Warriors',
    starrating: '4.3',
    textrating: '4.3',
    price: '₹499'
  },
  {
    title: 'Introduction to Machine Learning',
    name: 'Backyard Data Scientist',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Machine Learning with Javascript',
    name: 'Stephen Grider',
    starrating: '4.4',
    textrating: '4.4',
    price: '₹549'
  },
  {
    title: 'Machine Learning with Python',
    name: 'Selfcode Academy',
    starrating: '4.1',
    textrating: '4.1',
    price: '₹499'
  }
];


const pythondata = [
  {
    title: 'The Complete Python Bootcamp',
    name: 'Jose Portilla',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: 'Python for beginners',
    name: 'Yassin Marco',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'The Complete Python Developer',
    name: 'Anderi Neagoie',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'Learn Python Programming Masterclass',
    name: 'Tim Buchalka',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹399'
  }
];

const aidata = [
  {
    title: 'Artificial Intelligence A-Z 2024',
    name: 'Luka Anicin',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: "Artificial Intelligence for Business",
    name: 'Kirill Eremenko',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  },
  {
    title: 'Master in Artificial Intelligence',
    name: 'Arun Singhal',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹399'
  },
  {
    title: 'Learn Advanced AI for Games',
    name: 'Penny de Byl',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  }
];

const deeplearningdata = [
  {
    title: 'Deep Learning A-Z 2024',
    name: 'Kirill Eremenko',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: 'Deep Learning Mastery',
    name: 'Raj Chhabria',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'Deep Learning with Keras',
    name: 'Data Weekends',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  },
  {
    title: 'Deep Learning with TensorFlow 2.0',
    name: '365 Careers Team',
    starrating: '5',
    textrating: '5',
    price: '₹549'
  }
];

const genaidata = [
  {
    title: 'Generative AI for Beginners',
    name: 'Metla sudha Sekhar',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'

  },
  {
    title: 'Generative AI For Managers and Leaders',
    name: 'Aakriti E-Learning Academy',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Generative AI For Beginners',
    name: 'Jonas',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'Learn Generative AI in Software Testing',
    name: 'Rahul Shetty',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  }
];

function SampleNextArrow(props) {
  const { className,style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display:"block",top:'25%',backgroundColor:'black' }} 
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
       style={{ ...style, display: "block",top:'25%',backgroundColor:'black'}}
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
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>
  };
  var cardsettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>
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