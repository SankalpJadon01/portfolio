
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Education = () => {
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
    <section className="skill" id="education">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Education</h2>
                    <p>Following degrees are completed by me.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={`https://www.sharda.ac.in/blog/wp-content/uploads/2020/07/BTech-in-Computer-Science.jpg`} alt="m1" />
                                <h5>8.15 CGPA </h5>
                            </div>
                            <div className="item">
                                <img src={`https://pbs.twimg.com/profile_images/615614376947527680/NZJ6as4r_400x400.jpg`} alt="m2" />
                                <h5>68.8%</h5>
                            </div>
                            <div className="item">
                                <img src={`https://static8.depositphotos.com/1074452/1044/i/600/depositphotos_10441035-stock-photo-gold-10th-or-10-3d.jpg`} alt="m3" />
                                <h5>10 CGPA</h5>
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
