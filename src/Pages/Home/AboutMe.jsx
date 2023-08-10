const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/about-me.png"
          alt="About Me"
          style={{ width: "400px" }}
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            Hello, I'm Phil, a passionate and innovative software developer with
            a deep love for crafting elegant solutions to complex problems. With
            a solid foundation in both front-end and back-end technologies, I
            thrive on building seamless digital experiences that empower users
            and drive results. My journey in the world of software development
            started with an insatiable curiosity, which led me to explore
            various programming languages and frameworks. This journey has
            equipped me with the skills to create scalable and efficient
            applications, always keeping user-centric design and clean code at
            the forefront. From turning lines of code into functional
            applications to collaborating in agile teams, I'm dedicated to
            pushing the boundaries of what's possible in the digital realm.
          </p>
          {/* <p className="hero--section--description">
            Beyond the technical realm, I'm a perpetual learner who finds joy in
            staying up-to-date with the latest industry trends and best
            practices. I believe that the key to creating exceptional software
            lies not only in technical prowess but also in effective
            communication and collaboration. My experience in working closely
            with designers, product managers, and fellow developers has honed my
            ability to transform ideas into reality while maintaining a holistic
            view of the development process. Whether I'm diving into a
            challenging algorithm or brainstorming user interface improvements,
            my enthusiasm for problem-solving and dedication to continuous
            growth drive me to create software that not only meets but exceeds
            expectations. As a software developer, I'm committed to leaving a
            positive impact on the digital landscape by delivering solutions
            that are as functional as they are elegant.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
