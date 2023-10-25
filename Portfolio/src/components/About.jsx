import React from "react";
import about from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white" id="about">
      <div className="align-element py-12 sm:py-20 grid gap-20 md:grid-cols-2 items-center">
        <section className="hidden sm:block">
          <img src={about} className="h-80"/>
        </section>
        <section className="mb-14">
          <SectionTitle text='About Me'/>
          {/* <h1 className="py-10 font-bold text-5xl tracking-wider">{text}</h1> */}
          <p className="text-lg text-slate-500 leading-loose tracking-wide mt-4 text-justify">
            Utkarsh is 3x Google Cloud Platform (GCP) certified. He has experience in Full Stack
            Development with technologies like <span className="text-black">React, Angular, Vue, Node, Rest
            API, Express, TailWind CSS,  Mongodb, ElasticSearch.</span> Also, he have 1 year
            experience in application deployment on GCP with services like <span className="text-black">Cloud
            Run, Google Kubernetes Engine, App Engine and Virtual Machine.</span>
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;
