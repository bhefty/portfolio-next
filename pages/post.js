import Layout from '../components/layout'
import Splash from '../components/splash'
import BlogPost from '../components/blogPost'

export default(props) => (
    <Layout
        title='Bill Hefty | Blog'
        splashHeader={(<Splash
            page='blog'
            header='blog'
            subHeader='Read about some of my latest journeys and findings.'
        />)}
    >
        {!props.url.query.id ? 
            <h1>No query</h1>
        :
            <BlogPost id={props.url.query.id} />
        }
    </Layout>
)