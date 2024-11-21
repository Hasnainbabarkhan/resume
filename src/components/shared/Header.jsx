import React from "react";
import Marquee from "react-fast-marquee";
import img1 from '../lib/assets/angular.png';
import img2 from '../lib/assets/bootstrap.png';
import img3 from '../lib/assets/cassandra.png';
import img4 from '../lib/assets/css.png';
import img5 from '../lib/assets/html.png';
import img6 from '../lib/assets/jquery.png';
import img7 from '../lib/assets/mongodb.png';
import img8 from '../lib/assets/nodejs.png';
import img9 from '../lib/assets/php.png';
import img10 from '../lib/assets/postgre.png';
import img11 from '../lib/assets/react.png';
import img12 from '../lib/assets/vue.png';

const Header = () => {
  return (
    <div className="bg-neutral-800 h-20 border-b border-neutral-800 p-3">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        aria-label="Technologies Marquee"
      >
        <img src={img1} alt="Angular" className="h-12 mx-5 object-contain" />
        <img src={img2} alt="Bootstrap" className="h-12 mx-5 object-contain" />
        <img src={img3} alt="Cassandra" className="h-12 mx-5 object-contain" />
        <img src={img4} alt="CSS" className="h-12 mx-5 object-contain" />
        <img src={img5} alt="HTML" className="h-12 mx-5 object-contain" />
        <img src={img6} alt="jQuery" className="h-12 mx-5 object-contain" />
        <img src={img7} alt="MongoDB" className="h-12 mx-5 object-contain" />
        <img src={img8} alt="Node.js" className="h-12 mx-5 object-contain" />
        <img src={img9} alt="PHP" className="h-12 mx-5 object-contain" />
        <img src={img10} alt="PostgreSQL" className="h-12 mx-5 object-contain" />
        <img src={img11} alt="React" className="h-12 mx-5 object-contain" />
        <img src={img12} alt="Vue.js" className="h-12 mx-5 object-contain" />
      </Marquee>
    </div>
  );
};

export default Header;
