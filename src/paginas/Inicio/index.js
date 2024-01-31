import Styles from './Inicio.module.css';

import Post from 'componentes/PostCard';
import posts from 'json/posts.json';

export default function Inicio() {

    return (

        <main>
            
            <ul className={Styles.posts}>
                {posts.map((post) => (

                    <li key={post.id}>
                        <Post post={post} />

                    </li>
                )

                )}

            </ul>
        </main>



    )
}
