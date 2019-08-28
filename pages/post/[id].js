import {useRouter} from 'next/router';
import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';

const Post = props => {
    const router = useRouter();
    console.log(props)
    return(
        <Layout>
            <h2>{router.query.id}</h2>
            {/* {props.show.map((show, key) => (<p key={key}>{show.summary}</p>))} */}
        </Layout>
    )
}

Post.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
  };

export default Post