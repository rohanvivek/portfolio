import React from 'react';
import Typewriter from 'components/Typewriter';
import Scrollchor from 'react-scrollchor';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Rohan Vivek" />
        <div className="hero-description">
          I aspire to make good recognition in the field of computer science and
          technology by applying my gained knowledge and skills.<br />
        </div>
      </div>
    );
  }
}

export default Hero;
