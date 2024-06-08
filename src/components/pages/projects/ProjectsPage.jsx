import Project from './projs/Project'

import './projects.css'

export default function ProjectsPage() {
  return (
    <div className="container" id='projects'>
      <section className="section">
        <h2 className="title is-2">Projects</h2>
        <div className="block">
          <h3 className='title is-4'>My project gallery</h3>
          <p>A home for all my projects that I created or contributed to in one place.</p>
        </div>
        
        <div id="my-projects">
          <Project
            img={"https://bulma.io/assets/images/placeholders/1280x960.png"}
            name={"eCommerce Site"}
            desc={"Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Elit adipiscing amet sit iaculis nec amet..."}
            date={"May 2, 2024"}
            datetime={"2024-5-2"}
          />
          <Project
            img={"https://bulma.io/assets/images/placeholders/1280x960.png"}
            name={"Business Website"}
            desc={"Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
            date={"May 2, 2024"}
            datetime={"2024-5-2"}
          />
          <Project
            img={"https://bulma.io/assets/images/placeholders/1280x960.png"}
            name={"Weather Web Application"}
            desc={"Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
            date={"May 2, 2024"}
            datetime={"2024-5-2"}
          />
          <Project
            img={"https://bulma.io/assets/images/placeholders/1280x960.png"}
            name={"DuckPond"}
            desc={"Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
            date={"May 2, 2024"}
            datetime={"2024-5-2"}
          />
          <Project
            img={"https://bulma.io/assets/images/placeholders/1280x960.png"}
            name={"Text-based Adventure Game"}
            desc={"Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
            date={"May 2, 2024"}
            datetime={"2024-5-2"}
          />
        </div>
      </section>
    </div>
  )
}