import {useRouter} from 'next/router'
import Header from '../../../components/Header'

const Article = ({title, body}) => (

    <>
        <Header />
        <h1>{title}</h1>
        <p>{body}</p>
    </>
    
)

Article.getInitialProps = async ({query}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const article  = res.json();
    console.log(article)
    return article
}

export default Article;