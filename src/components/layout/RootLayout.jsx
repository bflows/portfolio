import Navbar from '../navbar/Navbar'
import AboutPage from '../pages/about/AboutPage'
import ContactPage from '../pages/contact/ContactPage'
import LandingPage from '../pages/landing/LandingPage'
import ProjectsPage from '../pages/projects/ProjectsPage'

export default function RootLayout() {
  return (
    <>
      <div style={{position: "absolute", width: "100%"}}><Navbar /></div>

      <div style={{position: "relative"}}>
        <LandingPage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </div>
    </>
  )
}
