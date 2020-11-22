import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

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
      font-size: var(--fz-xs);

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
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading"> About Me </h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              {' '}
              Hello! I'm Daniel, a computer engineer and cyber-security analyst based in Edo State,
              NG.
            </p>
            <p>
              I'm an open-source enthusiast with a slight interest in front-end web development and
              currently a student from Nigeria. I'm an ethical hacker, pentester, red-teamer and a
              self-taught cyber-security analyst who loves being offensive. I have a profound
              passion for programming, security researching, robotics and hardware. I enjoy creating
              things that live both on the internet and in reality, whether that be websites,
              applications, scripts, embedded systems or anything in between.{' '}
            </p>
            <p>
              Shortly after I graduated Highschool, I became overly engrossed in the cyber- security
              space and the vast amount of knowledge it holds.I decided to enroll for computer
              engineering at <a href="https://www.uniben.edu"> University of Benin(UNIBEN) </a>, I
              joined the developer team at <a href="https://www.muzzlab.com"> Muzzlab </a> where I
              worked on a wide variety of interesting and meaningful projects as an Internet
              Security Analyst.{' '}
            </p>
            <p>
              I'm an ethical hacker, pentester, red-teamer and a self-taught cyber-security analyst
              who loves being offensive. I have a profound passion for programming, security
              researching, robotics and hardware.I enjoy creating things that live both on the
              internet and in reality, whether that be websites, applications, scripts, embedded
              systems or anything in between.{' '}
            </p>
            <p>
              Somethings you'll likely find me doing are working and creating things with
              microcontrollers and implementing IoT in components, playing video games, customising
              gadgets and finding vulnerabilities in systems.A goal of mine is to build products
              that provide pixel-perfect, user-friendly, security efficient, performant experiences.
              I go by the alter ego 'CrazyChickenDev or 0x00CCSec' and I love breaking into stuff!
            </p>
            <p> Here are a few technologies I've been working with recently:</p>{' '}
          </div>
          <ul className="skills-list">
            {' '}
            {skills && skills.map((skill, i) => <li key={i}> {skill} </li>)}{' '}
          </ul>{' '}
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>{' '}
        </StyledPic>{' '}
      </div>{' '}
    </StyledAboutSection>
  );
};

export default About;
