import Layout from '../components/layout'
import Splash from '../components/splash'
import BlogPageList from '../components/blogPageList'

export default() => (
    <Layout
        title='Bill Hefty | Blog'
        splashHeader={(<Splash
            page='blog'
            header='blog'
            subHeader='Read aboout some of my latest journeys and findings.'
        />)}
    >
        <BlogPageList />
    </Layout>
)