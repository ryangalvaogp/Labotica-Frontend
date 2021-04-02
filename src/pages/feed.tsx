import { ListPosts } from '../components/ListPosts'
import Navbar from '../components/Navbar'
import Rodape from '../components/Rodape';

import Styles from '../styles/Feed.module.css';

export default function Feed() {

    return (
        <>
            <div className={Styles.mainHeader}>
                <Navbar />
            </div>
            <div className={Styles.content}>
            <ListPosts />
            </div>
           
            <div style={{paddingTop:40}}>
                {/* <Rodape/> */}
            </div>
        </>
    )

}

