import { useContext, useState } from 'react';
import { FeedContext } from '../contexts/feedContext';
import Styles from '../styles/Feed.module.css';
import Share from './Share';
import { Tooltip } from '@material-ui/core';
import { FiCheckCircle, FiUser } from 'react-icons/fi';

export function ListPosts() {
    const { posts } = useContext(FeedContext);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section className={Styles.postList}>
                {posts.map(post => (
                    <article
                        id={post.post_Id}
                        key={post.post_Id}>
                        <header>
                            <div className={Styles.userInfo}>
                                <span>{post.Usuario.name} {post.Usuario.funcao === 'Professor' ?
                                    <Tooltip
                                        className={Styles.tooltip}
                                        title={post.Usuario.funcao}>
                                        <FiCheckCircle color="#008ad3" />
                                    </Tooltip>
                                    :
                                    <Tooltip
                                        className={Styles.tooltip}
                                        title={post.Usuario.funcao}>
                                        <FiUser />
                                    </Tooltip>
                                }
                                </span>
                                <span
                                    className={Styles.place}
                                >
                                    {post.place} | {post.data}
                                </span>
                            </div>
                            <img
                                onClick={handleClickOpen}
                                src="/icons/send.svg"
                                alt="Send" />
                            <Share idPost={post.post_Id} open={open} onClose={handleClose} />
                        </header>
                        <img src={`https://backendlabotica.herokuapp.com/files/posts/${post.image}`} alt={post.titulo} />
                        <footer>
                            <div className={Styles.actions}>
                                {/* Aqui [e o espaço para implementar as ações curtir, comentar e etc... */}
                            </div>
                            <strong className={Styles.titulo}>{post.titulo}</strong>
                            <p>{post.description}</p>
                        </footer>
                    </article>
                ))}
            </section>
        </>
    );
};