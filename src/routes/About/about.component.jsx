import React from "react";
import { BackButton } from "../../components/styled-link/styled-link.component";
import { AboutContainer } from "./about.styles";

const About = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: "0.5" } },
  };

  return (
    <AboutContainer
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <h1>About The App</h1>

      <p className="mb-12">
        This Crypto Prices app was developed to demostrate my knowledge of
        React, React Router, and state management.
      </p>

      <BackButton to='back'>
        Back
      </BackButton>
    </AboutContainer>
  );
};

export default About;
