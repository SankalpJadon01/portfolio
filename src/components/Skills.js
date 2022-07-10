
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

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
                        <h2>Skills</h2>
                        <p>To appease my hunger of curiosity. I always try to learn new technologies.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={`https://live.staticflickr.com/8065/8220185645_dd4c773717.jpg`} alt="m1" />
                                <h5>Html5</h5>
                            </div>
                            <div className="item">
                                <img src={`https://img.myloview.com/murals/white-css3-vector-icon-on-black-background-modern-flat-css3-from-technology-concept-vector-sign-symbol-can-be-use-for-web-mobile-and-logo-400-168415486.jpg`} alt="m2" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={`https://thumbs.dreamstime.com/b/js-monogram-letter-logo-ribbon-shield-style-isolated-black-background-173946228.jpg`} alt="m3" />
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <img src={`https://cdn.dribbble.com/users/14814/screenshots/16535574/reactlogo_4x.png`} alt="m4" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a02af52b-2b04-4534-ad4e-f98688ceb85e/db4e1ip-ce5b9423-400d-4442-8dd8-a9f42717c6c9.png/v1/fill/w_1131,h_707,q_70,strp/nodejs_dark_by_wfuller_db4e1ip-pre.jpg`} alt="m4" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={`https://cdn.hashnode.com/res/hashnode/image/upload/v1644656903825/ichADu3bJ.jpeg`} alt="m1" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvC2XObp1PtTxn2X-2G6q6pXOzuSDvCUUdw&usqp=CAU`} alt="m2" />
                                <h5>Git/Github</h5>
                            </div>
                            <div className="item">
                                <img src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///+IiIjn5+esrKxFRUX29vZTU1P7+/thYWG7u7vy8vKZmZnd3d2MjIzOzs6lpaV7e3vIyMiBgYGTk5NsbGzExMRycnLt7e3a2tozMzPU1NSxsbEhISFQUFBKSkpbW1s+Pj4mJiYwMDASEhIaGhrmee1wAAAELElEQVR4nO2di1IiQQxFpwURgQEEFRUf+Pr/X1xZXcstNZlak3uh954PSHFqhulMku5pGiGEEEIIIYQQQgghhBBCCCGEEEIIIYT43zm56P2c9nK9GPUny+Mrts4XHJRYxuv+8p4t9RfRhq+sJ4dssXdyDF8YXN+x3V5JM3yhd8C225Jp+MKE7ZduWIYntRuW0t7UblgK9zIiDEu/esOyqN6QqQgyLNfVG/IeNzDD8lC9YVu9YVlWbzis3rCcVm84qN6wrKo3nFVvWOo3PNs9w9HdkcXx6mA+uhx2NmRkp45htze7h+WimyEjrwkx3DLpdCUTTb4jzLBp+h0MCWX/QMPmyDckPGoiDZtH13CapGEQatjceobzHAuLWMNm7hgSlotgw2ZgxzvPcLCJNjy14xFqbtGGjR2PkHuHG7bVG16b8Wq4S6dmvAqeNM3KjFfBatEcm/EIPWGwIaG2DzYkzGeEG56Y8RIMPMINzaSml2DgEW44ssLtbZ3mIz0r3A7W2oLz0gQBl2hDM94ow+BHv+gfDM2blDKwGGxo5mycLnCwoVk0PUox8Ig1vLRiUTpPwYZrM9ZTkoJDoOHh2AzFGqgJM3wykxnSSrElyHBzbsehTdO4hh1q1Deb03O378RIud9wDIcDB0+NLojpcq+JghBD6ogwwvCYKphvSMpkYIZj8gXMNhwSWr6fyDQcMIoWn0i+Sxd8yfQnzYC9uQuxHhLGE8CGtBFvoGFpn2s3JM0HQw1p2Slwgpa0uws5I8xJUaFT0IQ5BfScN2NlxBoy3hXBhoT+mjerf3/ocbtZTfuzjiUpwgM1rCL8ODWbFu9s0lS+IbJv8dxllv0iy+Q7grtr9tzeb9D9i+ge8J37h0RfxPBJBWfAtMBXjHhDu5Vf4MlbgqEzCI1eEzMMzxxD7NFDGYbeXxF7m6YY2hOY4Ns0xdDbVwIdO8kxdJIbaAk1x9C5TaFvwjmGzoIBbXonGTp/xFAFhyRD500KOR6VZOiM1yDHMJMMnQEpZPKdZOgsF8gSP8cQ2YtKMnTe9ZG5N+d/WIGhPUtbw11qD9NCq1GUrK2C1cJ7y0du0ssxdB40FWRtjuD+Z97e6Rh7//Z0411CaAMqw9ArCe99FcN7zOx9JcoX3PNqYoc+6V5XhO1TMd7AzvGFGk67dfOTVL4hzPDqYNZJDz439LNzE9/PTnTboh8AnxyBnqcp5RIrSDC8rd0QPqAIN4R/zwNtiN+bADYkbJYFGxJG9rGGjJ1sUEPKVjakIWd3ENCQtOECZ8jaw6ZdQUGMeV99xBjSjv0AGY43REGEIXmbbLoh72NdGEPuFuB0w5a5/fedNMN2Qv525R9SDMejJelgry+INhzP5qvdsdsS8l3uXq9dL0bz6dlufa9aCCGEEEIIIYQQQgghhBBCCCGEEEIIIXaZXxoQRRZ8arDMAAAAAElFTkSuQmCC`} alt="m3" />
                                <h5>BootStrap</h5>
                            </div>
                            <div className="item">
                                <img src={`https://images7.alphacoders.com/486/thumb-1920-486291.jpg`} alt="m4" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={`https://thumbs.dreamstime.com/b/dsa-letter-logo-design-black-background-creative-initials-concept-241234637.jpg`} alt="m4" />
                                <h5>DSA</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="m5" />
    </section>
  )
}
