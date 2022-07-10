import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shopping App",
      description: "Made an Ecommerce App",
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5gxryLLrnWT19ptA0tMdoJkaxShuYgC3Jg&usqp=CAU',
      url:"https://github.com/SankalpJadon01/"
    },
    {
      title: "Netflix Clone",
      description: "Made Netflix clone using React",
      imgUrl: 'https://img.mensxp.com/media/content/2021/Apr/This-Fake-Netflix-App-On-Android-Spreads-Malware-1200x900_607027476c44a.jpeg',
      url:"https://github.com/SankalpJadon01/"
    },
    {
      title: "Chat App",
      description: "Made using React & Firebase",
      imgUrl: 'https://miro.medium.com/max/700/1*mLE5ZxhtATxrwh20SL2Tlg.png',
      url:"https://github.com/SankalpJadon01/"
    },
    {
      title: "Spotify Clone",
      description: "Made a music player using Spotify pi",
      imgUrl: "https://merehead.com/blog/wp-content/uploads/alexander-shatov-w-qqwn5O-4I-unsplash.jpg",
      url:"https://github.com/SankalpJadon01/"
    },
    {
      title: "Todo App",
      description: "To keep note of things",
      imgUrl: "https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/68646ae82f982ea77bdea3f24eca79bf/best-todo-list-apps-00-hero.jpg",
      url:"https://github.com/SankalpJadon01/"
    },
    {
      title: "Random Quote App",
      description: "Get Random Quote using Api",
      imgUrl: "https://www.quotemaster.org/images/d0/d002c6f794e69bcc132807a86125a5fa.png",
      url:"https://github.com/SankalpJadon01/"
    }
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
                <p>After learning the new technologies. I also made some projects based on them , so as to solidify my understanding of respective technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Nothing to show right now. Under Construction.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Nothing to show right now. Under Construction.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
