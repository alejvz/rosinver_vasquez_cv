
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

import { Skills2 } from "./Skills2";
import { Skills3 } from "./Skills2";
import { Skills4 } from "./Skills2";
import { Skills5 } from "./Skills2";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 >Skills</h2>
              <p style={{ textAlign: 'justify' }}>
                I am a passionate person about the world of data science and machine learning,
                with a solid foundation in statistics and mathematics. I have experience in
                analyzing large datasets and implementing machine learning models to solve specific problems.
                In addition, I have programming skills and experience using various machine learning tools
                and libraries. I consider myself a curious person and am constantly seeking new ways to
                improve my knowledge and skills in these areas.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <Skills2 />
                  <h5>Backend</h5>
                </div>
                <div className="item">
                  <Skills3 />
                  <h5>Big data</h5>
                </div>
                <div className="item">
                  <Skills4 />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <Skills5 />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
