import './landing.css'

export default function LandingPage() {
  return (
    <div className="container" id='landing'>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div id='hero-container'>
            <p className="title">Billy Flowers</p>
            <p className="subtitle">Full-Stack Web Developer</p>
            <a href="#about">
              <button className="button is-primary">View Portfolio</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}