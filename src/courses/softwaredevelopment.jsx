import React, { useState } from "react";
import { Button, Card, Rate } from "antd";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import docker from '../asset/course/docker.jpg';
import git from '../asset/course/git.png';
import kubernetes from '../asset/course/kubernetes.jpg';
import github from '../asset/course/github.jpg';
import prompt from '../asset/course/prompt.jpg';

const dockerdata = [
  {
    title: 'Docker for Developers and DevOps',
    name: 'Luke Angel',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Docker Course from Basics to Advanced',
    name: 'EdYoda for Business',
    starrating: '4.1',
    textrating: '4.1',
    price: '₹549'
  },
  {
    title: 'Introduction to Docker',
    name: 'Stone River eLearning',
    starrating: '4.3',
    textrating: '4.3',
    price: '₹399'
  },
  {
    title: 'Docker for .NET Apps',
    name: 'Elton Stoneman',
    starrating: '4.1',
    textrating: '4.1',
    price: '₹499'
  }
];


const gitdata = [
  {
    title: 'Git from Basics to Advanced',
    name: 'Andrii',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'

  },
  {
    title: 'The Git & Github Bootcamp',
    name: 'Colt Steele',
    starrating: '4',
    textrating: '4',
    price: '₹599'
  },
  {
    title: 'Git and GitHub for Writers',
    name: 'Peter',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'Git Masterclass',
    name: 'Codestars',
    starrating: '3.5',
    textrating: '3.5',
    price: '₹599'
  }
];

const kubernetesdata = [
  {
    title: 'Practical Kubernetes Guide',
    name: 'KodeKloud Training',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'

  },
  {
    title: "Kubernetes for developers",
    name: 'Houssem Dellai',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Kubernetes from A to Z',
    name: 'Stefan Thorpe',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'Ultimate Kubernetes Fast-Track',
    name: 'Wrap 9 Training',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

const githubdata = [
  {
    title: 'GitHub Ultimate: Master Git',
    name: 'John Myers',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'

  },
  {
    title: 'Master Git and Github - Beginner to Expert',
    name: 'Anisul Islam',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  },
  {
    title: 'GitHub Actions - The Complete Guide',
    name: 'Maximilian Schwarmuller',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹499'
  },
  {
    title: 'GitHub Beginners crash course',
    name: 'BlueLime Learning Solutions',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹599'
  }
];

const promptdata = [
  {
    title: 'Prompt Engineering 101',
    name: 'Kyle Nielson',
    starrating: '4',
    textrating: '4',
    price: '₹599'

  },
  {
    title: 'Prompt Engineering Mastery',
    name: 'Gregor Maric',
    starrating: '4.5',
    textrating: '4.5',
    price: '₹549'
  },
  {
    title: 'Fundamentals of Prompt Engineering',
    name: 'Lucas whitaker',
    starrating: '3.5',
    textrating: '3.5',
    price: '₹599'
  },
  {
    title: 'Prompt Engineering for Beginners',
    name: 'Evan Wheeler',
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


function Softwaredevelopmenttabcontent() {

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

  const [activetab, SetActivetab] = useState('Docker')

  const handletabchange = (tab) => {
    SetActivetab(tab)
  }
  return (

    <div style={{ margin: '10px' }}>

      <div style={{ margin: '10px', marginBottom: '20px', padding: '10px' }}>

        <Slider {...settings}>

          <Button type="primary"  {...activetab === 'Docker' ? activetab : ''} onClick={() => handletabchange('Docker')}>Docker</Button>
          <Button type="primary"  {...activetab === 'Git' ? activetab : ''} onClick={() => handletabchange('Git')}>Git</Button>
          <Button type="primary"  {...activetab === 'Kubernetes' ? activetab : ''} onClick={() => handletabchange('Kubernetes')}>Kubernetes</Button>
          <Button type="primary"  {...activetab === 'GitHub' ? activetab : ''} onClick={() => handletabchange('GitHub')}>GitHub </Button>
          <Button type="primary"  {...activetab === 'Prompt Engineering' ? activetab : ''} onClick={() => handletabchange('Prompt Engineering')}>Prompt Engineering</Button>

        </Slider>

      </div>


      <div>

        {activetab === 'Docker' && (

          <Slider {...cardsettings}>
            {dockerdata.map((d) => (
              <Card
                cover={<img src={docker} alt='' width={40} height={200}></img>}>
                <div style={{ display: 'flex', flexDirection: 'column',overflow:'hidden' }}>
                  <Link href="https://ant.design" target="blank"><div style={{ fontSize: '20px', color: 'black' }}>{d.title}</div></Link>
                  <div style={{ fontSize: '18px' }}>{d.name}</div>
                  <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
                </div>
              </Card>
            ))}

          </Slider>)}

        {activetab === 'Git' && (
          <Slider {...cardsettings}>
            {gitdata.map((d) => (
              <Card
                cover={<img src={git} alt='' width={50} height={200}></img>}>
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
        {activetab === 'Kubernetes' && (
          <Slider {...cardsettings}>
            {kubernetesdata.map((d) => (
              <Card
                cover={<img src={kubernetes} alt='' width={50} height={200}></img>}>
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


        {activetab === 'GitHub' && (

          <Slider {...cardsettings}>
            {githubdata.map((d) => (
              <Card
                cover={<img src={github} alt='' width={50} height={200}></img>}>
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

        {activetab === 'Prompt Engineering' && (
          <Slider {...cardsettings}>
            {promptdata.map((d) => (
              <Card
                cover={<img src={prompt} alt='' width={50} height={200}></img>}>
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
export default Softwaredevelopmenttabcontent;



