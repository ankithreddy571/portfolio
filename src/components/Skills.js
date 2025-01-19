import meter1 from "../assets/img/meter1.svg";  // Web Development
import meter2 from "../assets/img/meter2.svg";  // Microservices / Backend
import meter3 from "../assets/img/meter3.svg";  // E-commerce
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
                        <h2>Skills</h2>
                        <p>As a passionate developer with a strong background in full-stack development, my skills span a variety of fields in computing, from building robust backend architectures to designing engaging user experiences.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Web Development" />
                                <h5>Microservices & Backend</h5>
                                <p>Proficient in designing and developing microservices architectures using Java, Spring Boot, and integrating tools like Kafka and Redis for scalable solutions.</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Microservices & Backend" />
                                <h5>Web Development</h5>
                                <p>Experienced in building responsive and dynamic websites using React.js, HTML, CSS, and JavaScript. Focus on performance optimization and scalable design.</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="E-Commerce Development" />
                                <h5>E-Commerce Development</h5>
                                <p>Skilled in building and maintaining e-commerce platforms using React.js and managing user interactions, product listings, and cart functionalities.</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Full-Stack Development" />
                                <h5>Full-Stack Development</h5>
                                <p>Experience with both frontend and backend development, ensuring seamless integration between UI and server-side components.</p>
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
