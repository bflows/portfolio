import Tech from './tech/Tech'

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
            <Tech img={'react.png'} title={'React'} />
          </div>
          <div className="cell">
            <Tech img={'express.png'} title={'Express'} />
          </div>
          <div className="cell">
            <Tech img={'node.svg'} title={'Node'} />
          </div>
          <div className="cell">
            <Tech img={'insomnia.svg'} title={'Insomnia'} />
          </div>
          <div className="cell">
            <Tech img={'mysql.png'} title={'MySQL'} />
          </div>
          <div className="cell">
            <Tech img={'js.png'} title={'JavaScript'} />
          </div>
          <div className="cell">
            <Tech img={'html5.png'} title={'HTML'} />
          </div>
          <div className="cell">
            <Tech img={'css3.png'} title={'CSS'} />
          </div>
          <div className="cell">
            <Tech img={'bootstrap.svg'} title={'Bootstrap'} />
          </div>
          <div className="cell">
            <Tech img={'bulma.svg'} title={'Bulma'} />
          </div>
          <div className="cell">
            <Tech img={'sass.png'} title={'Sass'} />
          </div>
          <div className="cell">
            <Tech img={'tailwindcss.svg'} title={'Tailwind'} />
          </div>
          <div className="cell">
            <Tech img={'git.svg'} title={'Git'} />
          </div>
          <div className="cell">
            <Tech img={'github.svg'} title={'GitHub'} />
          </div>
          <div className="cell">
            <Tech img={'firebase.svg'} title={'Firebase'} />
          </div>
        </div>

      </section>
    </div>
  )
}
