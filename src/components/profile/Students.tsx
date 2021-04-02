import { useContext } from "react";
import { ProfileContext } from "../../contexts/profileContext";
import Deposits from "./Deposits";
import DenseTable from "./TableUsuarios";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { Copyright } from "../Copyrigth";
import { useStyles } from './config/moduleStyles';
import clsx from "clsx";

export default function Students() {
    const { 
            allProfessores, 
            allAlunos
        } = useContext(ProfileContext);

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container
                maxWidth="lg"
                className={classes.container}>
                <Typography
                    className={classes.title}
                    variant="h6" id="tableTitle"
                    component="div">
                    Gerenciamento de Usuários</Typography>
                <Grid container spacing={3}>
                    {/* Gerenciamento dos professores */}
                    <Grid
                        item
                        xs={12}
                        md={8}
                        lg={9}
                    >
                        <Paper className={fixedHeightPaper}>
                            <DenseTable
                                nameEntity='Professor'
                                Usuario={allProfessores}
                            />
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits
                                nameEntity='Professor'
                                Titulo={'Total de Professores'}
                                content={allProfessores.length}
                            />
                        </Paper>
                    </Grid>
                    {/* Gerenciamento dos Alunos */}
                    <Grid
                        item
                        xs={12}
                        md={8}
                        lg={9}>
                        <Paper className={fixedHeightPaper}>
                            <DenseTable
                                nameEntity='Aluno'
                                Usuario={allAlunos}
                            />
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits
                                nameEntity='Aluno'
                                Titulo={'Total de Alunos'}
                                content={allAlunos.length}
                            />
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