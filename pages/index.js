import Layout from '../components/layout';
import LinkPost from '../components/linkPost';

const Index = () => {
    return(
            <Layout>
                <h1>My Blogs</h1>
                <div>
                    <LinkPost id="How to useHooks"/>
                    <LinkPost id="useReducer + useContext vs Redux"/>
                    <LinkPost id="React 16.9 90% cleaner code"/>
                </div>
            </Layout>
    )
}

export default Index;