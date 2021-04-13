import { useContext, useEffect, useState } from "react";
import api from "../../config/api";
import { FeedContext } from "../../contexts/feedContext";
import { ProfileContext } from "../../contexts/profileContext";
import ListPostUser from "./ListPostUser";
import NewPostDialog from "./NewPostDialog";
import { Copyright } from "../Copyrigth";
import { Box, Fab, Grid, Paper, Tab, } from "@material-ui/core";
import { Container, Tabs, Typography } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import Styles from '../../styles/Feed.module.css'
import { useStyles, useStylesAdd } from './config/moduleStyles'
import clsx from "clsx";
import { Posts } from "../../config/Types/TypesFeed";
import { AdmPostsProps, PostAll } from '../../config/Types/TypesSystemProfile'

export default function ManagerPosts() {
    const { usuario_Id } = useContext(ProfileContext);
    const { refresh } = useContext(FeedContext);

    const {
        listAllPostsAlunos,
        listAllPostsProfessores
    } = useContext(FeedContext);

    const classes = useStyles();
    const T = clsx(classes.paper, classes.fixedHeightT);

    const [value, setValue] = useState(0);
    const [postUser, setPostUser] = useState<Posts[]>([]);

    useEffect(() => {
        api.post(`views/user/posts/${usuario_Id}`).then(res => {
            setPostUser(res.data);
        });
    }, [refresh]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Grid container>
                <Grid xs={12}>
                    <Paper className={classes.rootT}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary">
                            <Tab label="Seus Posts" />
                            <Tab label="Todos os Posts" />
                        </Tabs>
                    </Paper>
                </Grid>
                <Grid xs={12}>
                    <SelectedGroupPosts />
                </Grid>
            </Grid>
        </>
    );

    function SelectedGroupPosts() {
        switch (value) {
            case 0:
                return <AdmPosts
                    postUser={postUser}
                    usuario_Id={usuario_Id}
                />
            default:
                return <PostsAllSystem
                    T={T}
                    classes={classes}
                    listAllPostsProfessores={listAllPostsProfessores}
                    usuario_Id={usuario_Id}
                    listAllPostsAlunos={listAllPostsAlunos}
                />
        };
    };
};

function AdmPosts(
    {
        usuario_Id,
        postUser,
    }: AdmPostsProps): JSX.Element {

    const [openDialogNewPOst, setOpenDialogNewPOst] = useState(false);

    const classesAdd = useStylesAdd();
    const handleClickOpen = () => {
        setOpenDialogNewPOst(true);
    };
    return (
        <>
            <div style={{ padding: 28 }}>
                <Grid container spacing={3}>
                    {postUser.map((post: Posts) => (
                        <Grid
                            className={Styles.PostsAlunoGrid}
                            key={post.post_Id}
                            item
                            xs={12}
                            md={8}
                            lg={4}>
                            <ListPostUser
                                titulo={post.titulo}
                                data={post.data}
                                Usuario={post.usuario}
                                description={post.description}
                                image={post.image}
                                place={post.place}
                                post_Id={post.post_Id}
                                url={post.url}
                                authorization={usuario_Id}
                            />
                        </Grid>
                    )
                    )}
                    <NewPostDialog
                        Authorization={usuario_Id}
                        open={openDialogNewPOst}
                        setOpen={setOpenDialogNewPOst}
                    />
                    <Fab
                        onClick={handleClickOpen}
                        color="primary"
                        className={classesAdd.absolute}>
                        <Add />
                    </Fab>
                </Grid>
            </div>
        </>
    );
};

function PostsAllSystem(
    {
        T,
        classes,
        listAllPostsAlunos,
        listAllPostsProfessores,
        usuario_Id
    }: PostAll) {
    return (
        <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={6}>
                        <Paper className={T}>
                            <Typography
                                component="h4"
                                variant="h6"
                                color="inherit"
                                noWrap
                                style={{
                                    textAlign: 'center',
                                    borderBottom: ' 1px solid olivedrab'
                                }}
                                className={Styles.titleAlunos}
                            >Professores</Typography>
                            {listAllPostsProfessores.map(post => (
                                <Grid
                                    className={Styles.PostsAlunoGridD}
                                    key={post.post_Id}
                                    item
                                    xs={12}
                                    md={8}
                                    lg={4}>
                                    <div style={{ paddingBottom: '2rem' }}>
                                        <ListPostUser
                                            description={post.description}
                                            place={post.place}
                                            titulo={post.titulo}
                                            authorization={usuario_Id}
                                            data={post.data}
                                            image={post.image}
                                            key={post.post_Id}
                                            post_Id={post.post_Id}
                                            Usuario={post.usuario}
                                            url={post.url}
                                            />
                                    </div>
                                </Grid>
                            ))}
                        </Paper>
                    </Grid>
                    <Grid item xs={5} md={8} lg={6}>
                        <Paper className={T}>
                            <Typography
                                component="h4"
                                variant="h6"
                                color="inherit"
                                noWrap
                                style={{
                                    textAlign: 'center',
                                    borderBottom: ' 1px solid olivedrab'
                                }}
                                className={Styles.titleAlunos}
                            >Alunos</Typography>
                            {listAllPostsAlunos.map(post => (
                                <Grid
                                    className={Styles.PostsAlunoGridD}
                                    key={post.post_Id}
                                    item
                                    xs={12}
                                    md={8}
                                    lg={4}>
                                    <div style={{ paddingBottom: '2rem' }}>
                                        <ListPostUser
                                            description={post.description}
                                            place={post.place}
                                            titulo={post.titulo}
                                            authorization={usuario_Id}
                                            data={post.data}
                                            image={post.image}
                                            key={post.post_Id}
                                            post_Id={post.post_Id}
                                            Usuario={post.usuario} 
                                            url={post.url}
                                            />
                                    </div>
                                </Grid>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
};