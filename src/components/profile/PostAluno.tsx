
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../contexts/profileContext";
import { FeedContext } from "../../contexts/feedContext";
import NewPostDialog from "./NewPostDialog";
import Deposits from "./Deposits";
import { Copyright } from "../Copyrigth";
import ListPostUser from "./ListPostUser";
import { Box, Fab, Grid, Paper } from "@material-ui/core";
import api from "../../config/api";
import Container from '@material-ui/core/Container';
import { Add } from "@material-ui/icons";
import { useStyles, useStylesAdd } from './config/moduleStyles'
import Styles from '../../styles/Feed.module.css'
import clsx from "clsx";

export default function PostsAluno() {
  const { usuario_Id } = useContext(ProfileContext);
  const { posts, refresh } = useContext(FeedContext);

  const [postUser, setPostUser] = useState([]);
  const [openDialogNewPOst, setOpenDialogNewPOst] = useState(false);

  const classes = useStyles();
  const classesAdd = useStylesAdd();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleClickOpen = () => {
    setOpenDialogNewPOst(true);
  };

  useEffect(() => {
    api.post(`views/user/posts/${usuario_Id}`).then(res => {
      setPostUser(res.data);
    });
  }, [refresh]);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Posts */}

          {/* Recent Deposits */}
          <Grid item xs={8} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits Titulo={'Total de Posts'} content={postUser.length} />
            </Paper>
          </Grid>
          <Grid item xs={8} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits Titulo={'Total de Posts do Sistema'} content={posts.length} />
            </Paper>
          </Grid>
          {/* Recent Orders */}
        </Grid>
        <Grid container spacing={3}>
          {postUser.map(post => (
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
                description={post.description}
                usuario={post.usuario}
                image={post.image}
                place={post.place}
                post_Id={post.post_Id}
                authorization={usuario_Id}
              />
            </Grid>
          ))}
          <NewPostDialog
            Authorization={usuario_Id}
            open={openDialogNewPOst}
            setOpen={setOpenDialogNewPOst}
          />
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
        <Fab
          onClick={handleClickOpen}
          color="primary"
          className={classesAdd.absolute}>
          <Add />
        </Fab>
      </Container>
    </main>
  );
};