import ParticlesComponent from "../../particles/particles";
import "./landing.css";

export default function LandingPage() {
  return (
    <div className="container" id="landing">
      <section className="hero is-fullheight">
        <ParticlesComponent id="particles" />
        <div className="hero-body">
          <div id="hero-container">
            <p className="title">Billy Flowers</p>
            <p className="subtitle">Software Developer</p>
            <a href="#about">
              <button className="button is-primary" id="portfolioBtn">View Portfolio</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
