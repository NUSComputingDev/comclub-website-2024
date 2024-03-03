import React from "react";
import Slider from "react-slick";
import AnnouncementsCard from './AnnouncementsCard';
import './Carousel.css';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import announcements from './announcements.json' with {type: 'json'};


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div
        className={className}
        onClick={onClick}>
          <GoChevronRight className="arrows" />
        </div>
    );
  }
 
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}>
    <GoChevronLeft className="arrows"/></div>
    );
  }


export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            nextArrow: false,
            prevArrow: false
          }
        }
      ]
  };


  return (
    <div className="slider-container">
    <Slider {...settings}>
      {announcements.map((announcement, index) => (
        <div className='item' key={index}>
          <AnnouncementsCard
            title={announcement.title}
            desc={announcement.desc}
            date={announcement.date}
            imgSrc={announcement.imgSrc}
            link='./'
          />
        </div>
      ))}
    </Slider>
    </div>
  );
}
