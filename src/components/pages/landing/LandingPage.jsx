import ParticlesComponent from '../../particles/particles';
import './landing.css';

export default function LandingPage() {
  return (
    <div className="container" id="landing">
      <section className="hero is-fullheight">
        <ParticlesComponent id="particles" />
        <div className="hero-body">
          <div id="hero-container">
            <h1 className="title is-2" id="name">
              Billy Flowers
            </h1>
            <p className="subtitle" id="title">
              Software Developer
            </p>
            <a href="#about" className="button is-primary" id="portfolioBtn">
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
