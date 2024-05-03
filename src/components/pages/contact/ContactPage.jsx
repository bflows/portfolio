import './contact.css'

export default function ContactPage() {
  return (
    <div className="container" id='contact'>
      <section className="section is-large">
        <h1 className="title">Contact</h1>
        <div className="block">
          <h2 className='title is-4'>Connect with me</h2>
          <p>If you're looking for a web developer who combines technical expertise with a keen eye for design and a commitment to excellence, look no further. Let's collaborate and create something truly remarkable.</p>
        </div>

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Enter your message"></textarea>
          </div>
        </div>
        <div className="block">
          <button className="button is-primary">Send</button>
        </div>

        <p className="buttons" id='socials'>
          <button className="button">
            <span className="icon is-small">
              <i className="fa-brands fa-github"></i>
            </span>
          </button>
          <button className="button">
            <span className="icon is-small">
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </button>
          <button className="button">
            <span className="icon is-small">
              <i className="fa-brands fa-instagram"></i>
            </span>
          </button>
          <button className="button">
            <span className="icon is-small">
              <i className="fa-brands fa-x-twitter"></i>
            </span>
          </button>
        </p>

        <div className="block" id='email'>
          <h4 className='title is-4'>Email</h4>
          <p>BillyLFlowers@gmail.com</p>
        </div>

      </section>
    </div>
  )
}