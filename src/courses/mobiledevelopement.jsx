import React, { useState } from "react";
import { Button, Card, Rate } from "antd";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/course.css';
import flutter from '../asset/course/flutter.jpg';
import ios from '../asset/course/ios.webp';
import andriod from '../asset/course/andriod.jpg';
import reactnative from '../asset/course/reactnative.png';
import swift from '../asset/course/swift.jpg';

const flutterdata = [
    {
        title: 'Flutter UI Bootcamp',
        name: 'Hussain Mustafa',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹499'
    },
    {
        title: 'Complete Flutter Guide 2024',
        name: 'Paulina Knop',
        starrating: '4.1',
        textrating: '4.1',
        price: '₹599'
    },
    {
        title: 'Flutter Bloc Essential Course',
        name: 'Sangwook Cho',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹549'
    },
    {
        title: 'Flutter, Nodejs,Express,MongoDB: Bulid Multi-Store App',
        name: 'Macaulay Famous',
        starrating: '4.3',
        textrating: '4.3',
        price: '₹499'
    }
];


const iosdata = [
    {
        title: 'The Complete iOS 17 Developer Course',
        name: 'Codestars',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹549'

    },
    {
        title: 'The 10 Day iPhone App Bootcamp',
        name: 'Nick Walter',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹599'
    },
    {
        title: 'iOS 12 & Swift 5 - App Design, UI/UX plus Development',
        name: 'Stephen Grider',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹499'
    },
    {
        title: 'Complete iOS Machine Learning Masterclass',
        name: 'Yohann Taieb',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹399'
    }
];

const andrioddata = [
    {
        title: 'Beginners guide to Android App Development ',
        name: 'Qaifi Khan',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹399'

    },
    {
        title: "The 7 Day Android App Bootcamp - Android Pie",
        name: 'Nick Walter',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹599'
    },
    {
        title: 'Android Multithreading Masterclass',
        name: 'Vasiliy Zukanov',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹549'
    },
    {
        title: 'Learn Android Programming From Scratch ',
        name: 'Eduonix- Tech',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹499'
    }
];

const reactnativedata = [
    {
        title: 'React Native - The Practical Guide',
        name: 'Maximilian Schwarzmuller',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹549'

    },
    {
        title: 'React Native Unveiled:From Basics to Mobile Mastery',
        name: 'Meta Brains',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹599'
    },
    {
        title: 'Complete React Native Bootcamp',
        name: 'Andrei Neagoie',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹599'
    },
    {
        title: 'Create Your First React Native App',
        name: 'Spencer Carli',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹699'
    }
];

const swiftdata = [
    {
        title: 'Design Patterns in Swift',
        name: 'Dmitri Nesteruk',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹599'

    },
    {
        title: 'Swift 5 Programming For Beginners',
        name: 'Nick Walter',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹549'
    },
    {
        title: 'Complete Swift development masterclass',
        name: 'Catalin Stefan',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹699'
    },
    {
        title: 'Swift 3 - Learn to Code',
        name: 'EdYoda',
        starrating: '4.5',
        textrating: '4.5',
        price: '₹399'
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

function Mobiletabcontent() {

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

    const [activetab, SetActivetab] = useState('Google Flutter')

    const handletabchange = (tab) => {
        SetActivetab(tab)
    }
    return (

        <div style={{ margin: '10px' }}>

            <div style={{ margin: '10px', marginBottom: '20px', padding: '10px' }}>

                <Slider {...settings}>

                    <Button type="primary"  {...activetab === 'Google Flutter' ? activetab : ''} onClick={() => handletabchange('Google Flutter')}>Google Flutter</Button>
                    <Button type="primary"  {...activetab === 'iOS' ? activetab : ''} onClick={() => handletabchange('iOS')}>iOS</Button>
                    <Button type="primary"  {...activetab === 'Andriod' ? activetab : ''} onClick={() => handletabchange('Andriod')}>Andriod</Button>
                    <Button type="primary"  {...activetab === 'React Native' ? activetab : ''} onClick={() => handletabchange('React Native')}>React Native</Button>
                    <Button type="primary"  {...activetab === 'Swift' ? activetab : ''} onClick={() => handletabchange('Swift')}>Swift</Button>

                </Slider>

            </div>


            <div>

                {activetab === 'Google Flutter' && (

                    <Slider {...cardsettings}>
                        {flutterdata.map((d) => (
                            <Card
                                cover={<img src={flutter} alt='' width={40} height={200}></img>}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Link href="https://ant.design" target="blank"><div style={{ fontSize: '20px', color: 'black' }}>{d.title}</div></Link>
                                    <div style={{ fontSize: '18px' }}>{d.name}</div>
                                    <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>{d.textrating}<Rate disabled defaultValue={d.starrating} /></div>
                                    <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{d.price}</div>
                                </div>
                            </Card>
                        ))}

                    </Slider>)}

                {activetab === 'iOS' && (
                    <Slider {...cardsettings}>
                        {iosdata.map((d) => (
                            <Card
                                cover={<img src={ios} alt='' width={50} height={200}></img>}>
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
                {activetab === 'Andriod' && (
                    <Slider {...cardsettings}>
                        {andrioddata.map((d) => (
                            <Card
                                cover={<img src={andriod} alt='' width={50} height={200}></img>}>
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


                {activetab === 'React Native' && (

                    <Slider {...cardsettings}>
                        {reactnativedata.map((d) => (
                            <Card
                                cover={<img src={reactnative} alt='' width={50} height={200}></img>}>
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

                {activetab === 'Swift' && (
                    <Slider {...cardsettings}>
                        {swiftdata.map((d) => (
                            <Card
                                cover={<img src={swift} alt='' width={50} height={200}></img>}>
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
export default Mobiletabcontent;



