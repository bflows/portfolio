import "./contact.css";

export default function ContactPage() {
  return (
    <div className="container" id="contact">
      <section className="section">
        <h1 className="title">Contact</h1>
        <div className="block">
          <h2 className="title is-4">Connect with me</h2>
          <p>
            If you're looking for a web developer who combines technical
            expertise with a keen eye for design and a commitment to excellence,
            look no further. Let's collaborate and create something truly
            remarkable.
          </p>
        </div>

        <form action="">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Enter name" name="user_name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Enter your email"
                name="user_email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter the subject"
                name="subject"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Enter your message"
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="block" id="contactBtn">
            <button className="button is-primary">Send</button>
          </div>
        </form>

        <div className="block" id="email">
          <h4 className="title is-4">Email</h4>
          <p>BillyLFlowers@gmail.com</p>
        </div>

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

        <p style={{ textAlign: "center", paddingTop: "1rem" }}>
          <a href="#landing">Go to top</a>
        </p>
      </section>
    </div>
  );
}