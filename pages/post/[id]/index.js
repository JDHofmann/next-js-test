import {useRouter} from 'next/router'
import Header from '../../../components/Header'

const Post = () => {
    const router = useRouter();
    const {id} = router.query; 

    return (
        <>
            <Header />
            <div>
                <h1>Post: {id}</h1>
            </div>
        </>
    )
}




export default Post