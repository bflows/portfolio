import Tech from './tech/Tech'

// Logos
import reactLogo from './images/react.png'
import expressLogo from './images/express.png'
import nodeLogo from './images/node.svg'
import insomniaLogo from './images/insomnia.svg'
import mySqlLogo from './images/mysql.png'
import javascriptLogo from './images/js.png'
import htmlLogo from './images/html5.png'
import cssLogo from './images/css3.png'
import bootstrapLogo from './images/bootstrap.svg'
import bulmaLogo from './images/bulma.svg'
import sassLogo from './images/sass.png'
import tailwindLogo from './images/tailwindcss.svg'
import gitLogo from './images/git.svg'
import githubLogo from './images/github.svg'
import firebaseLogo from './images/firebase.svg'

import './about.css'

export default function AboutPage() {
  return (
    <div className="container" id='about'>
      <section className="section">
        <h2 className="title is-2">About me</h2>
        <div className="block">
          <h3 className='title is-4'>A bit about me</h3>
          <p>As a seasoned web developer with years of experience, I specialize in creating visually stunning, highly functional websites that captivate audiences and drive results. My passion lies in pushing the boundaries of web design, seamlessly blending cutting-edge technology with pixel-perfect precision.</p>
        </div>
        <div className="block">
          <h3 className='title is-4'>Technologies and Tools</h3>
          <p>With a deep understanding of the latest web development trends, I bring your digital vision to life with unparalleled skill and efficiency. From responsive layouts that adapt seamlessly across devices to lightning-fast load times that keep users engaged, every aspect of my work is meticulously crafted to deliver an exceptional user experience.</p>
        </div>

        <div className="grid is-col-min-10" id='wrapper'>
          <div className="cell">
            <Tech img={reactLogo} title={'React'} />
          </div>
          <div className="cell">
            <Tech img={expressLogo} title={'Express'} />
          </div>
          <div className="cell">
            <Tech img={nodeLogo} title={'Node'} />
          </div>
          <div className="cell">
            <Tech img={insomniaLogo} title={'Insomnia'} />
          </div>
          <div className="cell">
            <Tech img={mySqlLogo} title={'MySQL'} />
          </div>
          <div className="cell">
            <Tech img={javascriptLogo} title={'JavaScript'} />
          </div>
          <div className="cell">
            <Tech img={htmlLogo} title={'HTML'} />
          </div>
          <div className="cell">
            <Tech img={cssLogo} title={'CSS'} />
          </div>
          <div className="cell">
            <Tech img={bootstrapLogo} title={'Bootstrap'} />
          </div>
          <div className="cell">
            <Tech img={bulmaLogo} title={'Bulma'} />
          </div>
          <div className="cell">
            <Tech img={sassLogo} title={'Sass'} />
          </div>
          <div className="cell">
            <Tech img={tailwindLogo} title={'Tailwind'} />
          </div>
          <div className="cell">
            <Tech img={gitLogo} title={'Git'} />
          </div>
          <div className="cell">
            <Tech img={githubLogo} title={'GitHub'} />
          </div>
          <div className="cell">
            <Tech img={firebaseLogo} title={'Firebase'} />
          </div>
        </div>

      </section>
    </div>
  )
}
