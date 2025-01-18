import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import creditImg from "../assets/img/credit.jpg"; // Credit Score Analysis Tool image
import claimImg from "../assets/img/claim.jpg"; // Claim Processing System image
import ecommerceImg from "../assets/img/ecommerce.jpg"; // GAR Mart image
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Credit Score Analysis Tool",
      description: "Design & Development",
      imgUrl: creditImg,
      details: "This prototype project demonstrates a microservice architecture with three microservices: CreditScoringService, UserManagement, and SpringCloudGateway. Key features include Redis Integration, Kafka Communication, Log4j2, OAuth2 Authentication, and more.",
      gitLink: "https://github.com/ankithreddy571/CreditScoreAnalysisTool.git"
    },
    {
      title: "Claim Processing System",
      description: "Design & Development",
      imgUrl: claimImg,
      details: "This project is a monolithic application built with Spring Boot to process and manage claims efficiently. It uses tools like Kafka, Redis, Log4j2, and includes features such as RESTful APIs and database integration.",
      gitLink: "https://github.com/ankithreddy571/Claim_processing_system.git"
    },
    {
      title: "GAR Mart (E-Commerce)",
      description: "Design & Development",
      imgUrl: ecommerceImg,
      details: "GAR Mart is an e-commerce web application built with React.js. It allows users to browse products, view details, and manage their cart. The app is responsive and built with scalability in mind.",
      gitLink: "https://github.com/ankithreddy571/GAR_Mart.git"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a developer with a passion for creating innovative solutions, my projects aim to bridge the gap between design and functionality, ensuring seamless user experiences and impactful results.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Credit Score Analysis Tool</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Claim Processing System</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GAR Mart</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.filter(project => project.title === "Credit Score Analysis Tool").map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              gitLink={project.gitLink}
                            />
                          ))
                        }
                        <p>{projects[0].details}</p>
                        <a href={projects[0].gitLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.filter(project => project.title === "Claim Processing System").map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              gitLink={project.gitLink}
                            />
                          ))
                        }
                        <p>{projects[1].details}</p>
                        <a href={projects[1].gitLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.filter(project => project.title === "GAR Mart (E-Commerce)").map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              gitLink={project.gitLink}
                            />
                          ))
                        }
                        <p>{projects[2].details}</p>
                        <a href={projects[2].gitLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
