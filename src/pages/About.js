import React from "react";
import { Helmet } from "react-helmet";

import "../css/Work.css";

export default function(props) {
  return (
    <>
      <Helmet>
        <title>About | Peter Apps</title>
      </Helmet>
      <h1>About Me</h1>
      <hr className="hr-blue" />
      <p>
        I am currently a junior at the University of Michigan, where I'm
        pursuing a BSE in Computer Engineering. I'm fascinated by both the
        software and hardware aspect of computers, and I hope to do work in
        systems software in the future. This past summer, I interned at Nokia
        Bell Labs in the robotics department, working on automating the tuning
        process for a localization algorithm with deep learning. I'm currently
        the AUVSI Chief Engineer for M-Fly, a student organization at the
        University of Michigan where I'm responsible for the development of an
        autonomous airplane to compete in the AUVSI-SUAS challenge. This
        semester, I'll be working with Seoul Robotics through the TechLab at
        Mcity program.
      </p>

      <p>
        My skills include proficiency in a variety of popular programming
        languages, most prominently C++, Python, Java, and JavaScript/Node.JS.
        I'm also experienced in popular libraries such as Keras, NumPy, OpenCV,
        along with command line tools such as Git.
      </p>

      <p>
        Beyond school and work, I enjoy filmmaking as a hobby; in particular, I
        find cinematography and film editing fascinating. I also have a passion
        for learning about areas beyond my major and enjoy taking online courses
        to learn new subjects.
      </p>
      <p>
        To learn more about me, check out{" "}
        <a
          href="https://www.linkedin.com/in/peter-linder-aa648b181/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my LinkedIn profile
        </a>
        .
      </p>
    </>
  );
}
