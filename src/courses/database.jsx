import React, { useState } from "react";
import { Button, Card, Rate } from "antd";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/course.css';
import sql from '../asset/course/sql.png';
import psql from '../asset/course/postgresql.webp';
import mongo from '../asset/course/mongoDB.png';
import oracle from '../asset/course/oracle.png';
import dbms from '../asset/course/dbms.jpg';

const sqldata = [
  {
    title: 'The Complete SQL Bootcamp',
    name: 'Jose Portilla',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹649'
  },
  {
    title: 'SQL Programming Basics',
    name: 'Global Academy',
    starrating: '4',
    textrating: '4',
    price: '₹599'
  },
  {
    title: 'Learn SQL for Data Analysis',
    name: 'Annabel Lyle',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  },
  {
    title: 'The Complete Introduction to SQL programming',
    name: 'Yassin Marco',
    starrating: '4',
    textrating: '4',
    price: '₹499'
  }
];


const psqldata = [
  {
    title: 'PostgreSQL Bootcamp',
    name: 'Adnan Waheed',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'

  },
  {
    title: 'Mastering PostgreSQL',
    name: 'Uplatz Training',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Intro To PostgreSQL Databases With PgAdmin',
    name: 'John Elder',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'PostgreSQL for Beginners',
    name: 'Start-Tech Academy',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

const mongodata = [
  {
    title: "MongoDB - The Complete Developer's Guide 2024",
    name: 'Maximillian Schwarzmuller',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: "Introduction to the MongoDB",
    name: 'Bogdan Stashchuk',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  },
  {
    title: 'The Complete MongoDB Course',
    name: 'Malvik Vaghadia',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Introduction to MongoDB for Data Analytics',
    name: 'Brian Dowe',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  }
];

const oracledata = [
  {
    title: 'Oracle SQL for beginners',
    name: 'A Data Guru platform',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'

  },
  {
    title: 'Oracle SQL Performance Tuning ',
    name: 'Stephen Grider',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'Practical SQL with Oracle',
    name: 'Bluelime Learning Solutions',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'The Complete Oracle SQL Bootcamp',
    name: 'Code Star Academy',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

const dbmsdata = [
  {
    title: 'Fundamentals of Database Engineering',
    name: 'Hussein Nasser',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'

  },
  {
    title: 'DBMS Complete Course Beginner to Advance',
    name: 'Mohammad',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Simplified Approach to DBMS',
    name: 'Parteek Bhatia',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹699'
  },
  {
    title: 'Introduction to Basic Database Concepts',
    name: 'EdYoda',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
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

function Databasetabcontent() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
  var cardsettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  const [activetab, SetActivetab] = useState('SQL')

  const handletabchange = (tab) => {
    SetActivetab(tab)
  }
  return (

    <div style={{ margin: '10px' }}>

      <div style={{ margin: '10px', marginBottom: '20px', padding: '10px' }}>

        <Slider {...settings}>

          <Button type="primary"  {...activetab === 'SQL' ? activetab : ''} onClick={() => handletabchange('SQL')}>SQL</Button>
          <Button type="primary"  {...activetab === 'Postgre SQL' ? activetab : ''} onClick={() => handletabchange('Postgre SQL')}>Postgre SQL</Button>
          <Button type="primary"  {...activetab === 'MongoDB' ? activetab : ''} onClick={() => handletabchange('MongoDB')}>MongoDB</Button>
          <Button type="primary"  {...activetab === 'Oracle SQL' ? activetab : ''} onClick={() => handletabchange('Oracle SQL')}>Oracle SQL</Button>
          <Button type="primary"  {...activetab === 'DBMS' ? activetab : ''} onClick={() => handletabchange('DBMS')}>DBMS</Button>

        </Slider>

      </div>


      <div>

        {activetab === 'SQL' && (

          <Slider {...cardsettings}>
            {sqldata.map((d) => (
              <Card
                cover={<img src={sql} alt='' width={40} height={200}></img>}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link href="https://ant.design" target="blank"><div style={{ fontSize: '20px', color: 'black' }}>{d.title}</div></Link>
                  <div style={{ fontSize: '18px' }}>{d.name}</div>
                  <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
                </div>
              </Card>
            ))}

          </Slider>)}

        {activetab === 'Postgre SQL' && (
          <Slider {...cardsettings}>
            {psqldata.map((d) => (
              <Card
                cover={<img src={psql} alt='' width={50} height={200}></img>}>
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
        {activetab === 'MongoDB' && (
          <Slider {...cardsettings}>
            {mongodata.map((d) => (
              <Card
                cover={<img src={mongo} alt='' width={50} height={200}></img>}>
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


        {activetab === 'Oracle SQL' && (

          <Slider {...cardsettings}>
            {oracledata.map((d) => (
              <Card
                cover={<img src={oracle} alt='' width={50} height={200}></img>}>
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

        {activetab === 'DBMS' && (
          <Slider {...cardsettings}>
            {dbmsdata.map((d) => (
              <Card
                cover={<img src={dbms} alt='' width={50} height={200}></img>}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Link href="https://ant.design" target="_blank"><div style={{ fontSize: '20px', color: 'black' }}>{d.title}</div></Link>
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
export default Databasetabcontent;



