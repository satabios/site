import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  recent {
    margin-top: 490px;

    color: var(--green);
    font-size: 19px;
    margin: 90px 0px 75px 0px;
  }

  h1 {
    margin: 20px 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }


  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 70px;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, There. I Am</h1>;
  const two = <h2 className="big-heading">Sathyaprakash Narayanan.</h2>;
 // const three = <h3 className="big-heading">I build </h3>;
  const four = (
    <p>
      I am a Computer Vision Researcher interested in Deep Learning, Reinforcement Learning, Neuromorphic Engineering.
      If you are curious feel free to dive into my publications and patents at <a href="https://scholar.google.com/citations?user=rI5VHWoAAAAJ&hl=en&oi=ao">Google Scholar</a>. 
      You can catch up on my kaggle achievements on <a href="https://kaggle.com/satabios">Kaggle</a>. Browse my visual depection on <a href="https://www.instagram.com/brat_rat.sathya/">Instagram</a>.<br></br>
    </p>
 
  );
 
  const recent = <recent> Recent Updates:</recent>;

  const five = (
    <a href="https://satabios.github.io/#publications" target="_blank" className="email-link">
     Paper Selected for ICIP 2021
  </a>
  );
  const six = (
    <a href="https://www.kaggle.com/c/plant-pathology-2021-fgvc8/leaderboard" target="_blank" className="email-link">
      CVPR 2021- Kaggle Plant Pathology 2021-FGCV
    </a>
  );

  const seven = (
    <a href="https://www.kaggle.com/c/plant-pathology-2021-fgvc8/leaderboard" target="_blank" className="email-link">
      US Patent Filed: METHOD AND SYSTEM FOR RECOGNIZING ACTIVITIES IN SURROUNDING ENVIRONMENT FOR CONTROLLING NAVIGATION OF AUTONOMOUS VEHICLE
    </a>
  );
  const items = [one, two, four,recent, five,six,seven];

  return (
    
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
