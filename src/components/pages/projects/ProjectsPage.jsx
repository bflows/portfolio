import Project from './projs/Project'

import './projects.css'

export default function ProjectsPage() {
  return (
    <div className="container" id='projects'>
      <section className="section is-large">

        <h1 className="title">Projects</h1>
        <h2 className="subtitle">
          A home for all my projects in one place.
        </h2>

        <div className="projects">
          <Project 
            img={"https://bulma.io/assets/images/placeholders/1280x960.png"}
            name={"Project Name"}
            desc={"Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
            date={"May 2, 2024"}
            datetime={"2024-5-2"}
          />
          <Project 
            img={"https://bulma.io/assets/images/placeholders/1280x960.png"}
            name={"Project Name"}
            desc={"Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
            date={"May 2, 2024"}
            datetime={"2024-5-2"}
          />
          <Project 
            img={"https://bulma.io/assets/images/placeholders/1280x960.png"}
            name={"Project Name"}
            desc={"Project Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
            date={"May 2, 2024"}
            datetime={"2024-5-2"}
          />
        </div>

      </section>
    </div>
  )
}