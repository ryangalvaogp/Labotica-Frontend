import { useContext } from "react";
import { ProfileContext } from "../../contexts/profileContext";
import { FeedContext } from "../../contexts/feedContext";
import { ProjetosContext } from "../../contexts/projetosContext";
import Deposits from "./Deposits";
import { Copyright } from "../Copyrigth";
import ImageGridList from "./ImageGridList";
import { Box, Grid, Paper } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { useStyles } from './config/moduleStyles'
import clsx from "clsx";

export default function HomeProfile() {

  const {
    allAlunos,
    allProfessores,
  } = useContext(ProfileContext);
  const { posts } = useContext(FeedContext);
  const {
    allProjects,
    imagesProjetos
  } = useContext(ProjetosContext);

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container
        maxWidth="lg"
        className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={3} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits
                Titulo={'Total de Professores'}
                action='usuarios'
                content={allProfessores.length}
              />
            </Paper>
          </Grid>
          {/* Total de Alunos */}
          <Grid item xs={3} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits
                Titulo={'Total de Alunos'}
                action='usuarios'
                content={allAlunos.length}
              />
            </Paper>
          </Grid>
          {/* Total de Posts */}
          <Grid item xs={3} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits
                Titulo={'Total de Posts'}
                action='posts'
                content={posts.length}
              />
            </Paper>
          </Grid>
          {/* Total de Projetos */}
          <Grid item xs={3} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits
                Titulo={'Total de Projetos'}
                action='projetos'
                content={allProjects.length}
              />
            </Paper>
          </Grid>
          {/* Listagem das Imagens dos projetos e Posts */}
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ImageGridList imagesProjetos={imagesProjetos} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ImageGridList imagesPosts={posts} />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  )
};