import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: 17px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Computer Vision','Deep Learning','Machine Learning','Computational Imaging',
                  'Signal Procesing','Compressive Sensing','Neuromorphic Engineering', 'Event Based Data',
                  'NVIDIA TX'];
  const Publication = [
                       <a href="https://www.kaggle.com/c/plant-pathology-2021-fgvc8/leaderboard">CVPR 2021 -Plant Pathology 2021-FGCV</a>,
                       <a href=""><b>ICIP 2021</b>, Real-Time Object Detection and Localization in Compressive Sensed Video on Embedded Hardware<i>(link yet to be obtaied)</i>.</a>,
                      //  <a href="https://ieeexplore.ieee.org/abstract/document/8702581/">N-HAR: A neuromorphic event-based human activity recognition system using memory surfaces, <b>ISCAS 2019</b>.</a>,
                      //  <a href="https://ieeexplore.ieee.org/abstract/document/8702200">Live Demonstration: Real-Time Implementation of Proto-Object Based Visual Saliency Model, <b>ISCAS 2019</b>.</a>,
                      //  <a href="https://arxiv.org/abs/1905.10054">A Compressive Sensing Video dataset using Pixel-wise coded exposure, <b>Arxiv</b>.</a>
                      
                      
                      ];
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! You can call me Sathya and I'm just another curious human trying to comprehend 
              cognition in general. I enjoy the perception of the world through our brain, thus 
              I try to unravel the mysteries through by building Neural Networks hinged around the vision spectrum.
              {/* My research interests broadly are and but is not restricted to computer vision and deep learning.
              My research focuses on developing computation tools and deep learning models to facilitate high 
              dimensional visual signals -- this encompasses ideas across multiple disciples: compressive sensing,
              neuromorphic engineering, and computational imaging. */}
              
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at,{' '}<a href="https://labs.dese.iisc.ac.in/neuronics/">NeuRonICS Lab, DESE, Indian Institute of Science, Bangalore.</a> and at{' '}
              <a href="https://www.greatlearning.in/">Great Learning, Bangalore.</a>
              
            </p>

            <p><a>My research interests broadly are and but is not restricted to:</a></p>
         
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>

    </StyledAboutSection>
  );

  (document).ready(function() {  
    var token = ""; //your access token here. Visit http://instagram.pixelunion.net/ to get your access token    
    num_photos = 20; //limit number of photos    
    $.ajax({  
         url: 'https://api.instagram.com/users/self/media/recent',  
         dataType: 'jsonp',  
         type: 'GET',  
         data: { access_token: token, count: num_photos },  
         success: function(data) {  
              console.log(data);  
              for (x in data.data) {  
                   $('ul').append('<li><a target="_blank" href="' + data.data[x].link + '"><img src="' + data.data[x].images.low_resolution.url + '"></a></li>');  
              }  
         },  
         error: function(data) {  
              console.log(data);  
         }  
    });  
});  
};

export default About;
