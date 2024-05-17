import ContactForm from './ContactForm';
import './contact.css';

export default function ContactPage() {
  return (
    <div className="container" id="contact">
      <section className="section">
        <h2 className="title is-2">Contact</h2>
        <div className="block">
          <h3 className="title is-4">Connect with me</h3>
          <p>
            If you're looking for a web developer who combines technical
            expertise with a keen eye for design and a commitment to excellence,
            look no further. Let's collaborate and create something truly
            remarkable.
          </p>
        </div>

        <div className="grid is-col-min-10" id='contact-info'>
          <div className="cell">
            <ContactForm />
          </div>

          <div className="cell" id="email-social-wrap">
            <div className="block" id="email">
              <h4 className="title is-4">Email</h4>
              <p>BillyLFlowers@gmail.com</p>
            </div>

            <div className="block" id="socials-wrapper">
              <h4 className="title is-4">Socials</h4>
              <p className="buttons" id="socials">
                <a
                  href="https://github.com/bflows"
                  target="_blank"
                  className="button"
                >
                  <span className="icon is-small">
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/billyflowers"
                  target="_blank"
                  className="button"
                >
                  <span className="icon is-small">
                    <i className="fa-brands fa-linkedin"></i>
                  </span>
                </a>
                <a
                  href="https://instagram.com/bflowcode"
                  target="_blank"
                  className="button"
                >
                  <span className="icon is-small">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </a>
                <a href="https://x.com/" target="_blank" className="button">
                  <span className="icon is-small">
                    <i className="fa-brands fa-x-twitter"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <a href="#landing" id='top-page'>
          <p id="go-to-top">
            <i className="fa-solid fa-angles-up"></i>
            Go to top
          </p>
        </a>
      </section>
    </div>
  );
}
