
import Layout from '../components/layout'
import About from '../components/about'
import ProjectSpacer from '../components/projectSpacer'
import ProjectsSection from '../components/projectsSection'
import ContactSpacer from '../components/contactSpacer'
import Contact from '../components/contact'

export default () => (
    <div>
        <Layout>
            <About />
            <ProjectSpacer />
            <ProjectsSection />
            <ContactSpacer />
            <Contact />
        </Layout>
    </div>
)