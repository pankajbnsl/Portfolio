import React, { useRef } from 'react'
import { PROJECTS } from '../../utils/data'
import './Projects.css'
import Slider from 'react-slick'
import ProjectsCard from './ProjectsCard/ProjectsCard'

const Projects = () => {
    const slideRef = useRef();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive:[
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    const slideRight = () => {
        slideRef.current.slickNext();
    }

    const slideLeft = () => {
        slideRef.current.slickPrev();
    }
  return (
    <section className='experience-container' id="Projects">
        <h5>Projects</h5>

        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
                <span class="material-symbols-outlined">chevron_right</span>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
                <span class="material-symbols-outlined">chevron_left</span>
            </div>
            <Slider ref={slideRef} {...settings}>
                {PROJECTS.map((item) => (
                    <ProjectsCard key={item.title} details={item} />
                ))}
            </Slider>
        </div>
    </section>
  )
}

export default Projects