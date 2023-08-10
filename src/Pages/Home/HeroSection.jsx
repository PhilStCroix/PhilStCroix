import { Link } from "react-scroll";
const HeroSection = () => {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Lovely Day! I'm Phil</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            Developer
          </h1>
          <p className="hero--section--description">
            Crafting Code, Transforming Ideas: A Software Developer's Journey
            <br />
            Elevating User Experiences Through Innovative Software Solutions
          </p>
        </div>
        <Link to="Contact" smooth={true} duration={500}>
          <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img
          src="./img/nobg4.png"
          alt="Hero Section"
          style={{ width: "360px" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
