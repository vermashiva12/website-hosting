import React from "react";
import {
  AboutSection,

  ContactSection,
  HeroSection,
  InterestsSection,
  Page,

  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Shivanshu Verma" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Skills" />
         <ProjectsSection sectionId="certifications" heading="Certifications" /> 
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
