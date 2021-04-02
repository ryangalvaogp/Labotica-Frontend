import { useContext } from "react";
import { SettingsContext } from "../../../contexts/settingsContext";
import Perfil from "./Perfil";
import { Copyright } from "../../Copyrigth";
import { Box, Container, Grid, Paper } from "@material-ui/core";
import { useStyles } from "../config/moduleStyles";
import clsx from "clsx";

export default function Settings() {
  const Settings = useContext(SettingsContext);
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeightPerfil);
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container
        maxWidth="lg"
        className={classes.container}>
        <Grid container spacing={3}>
          {/* Perfil */}
          <Grid item xs={8} md={8} lg={6}>
            <Paper className={fixedHeightPaper}>
              <Perfil />
            </Paper>
          </Grid>
          {/* Total de Posts */}
          <Grid item xs={3} md={4} lg={1}>
            
          </Grid>
          {/* Total de Projetos */}
          <Grid item xs={3} md={4} lg={4}>
            <Paper className={fixedHeightPaper}>

            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={8} md={8} lg={11}>
            <Paper className={fixedHeightPaper}>
                
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
}
