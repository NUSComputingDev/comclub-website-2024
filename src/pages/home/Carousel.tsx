import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import AnnouncementsCard from './AnnouncementsCard';
import './Carousel.css';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

type Announcement = {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  imgsrc: string;
};

type AnnouncementList = Announcement[];

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
  const [eventList, setEventList] = useState<AnnouncementList>([]);

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

  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await fetch (
          "http://localhost:8000/events"
        );

        if (!events.ok) {
          throw new Error("Error retrieving event data");
        }

        const eventData = await events.json();
        setEventList(eventData);
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };
  
    fetchEvents();
  }, [])

  return (
    <div className="slider-container">
    <Slider {...settings}>
      {eventList.map((val, index) => (
        <div className='item' key={index}>
          <AnnouncementsCard
            title={val.title}
            desc={val.description}
            start_date={val.start_date}
            end_date={val.end_date}
            imgSrc={val.imgsrc}
            link='./'
          />
        </div>
      ))}
    </Slider>
    </div>
  );
}
