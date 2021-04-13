import { useContext, useState } from "react";
import { ProfileContext } from "../../contexts/profileContext";
import { ProjetosContext } from "../../contexts/projetosContext";
import Deposits from './Deposits';
import { DialogToSelectImageDefaultOnHomePage } from "./DialogToSelectImageDefaultOnHomePage";
import DenseTableProjetcts from "./TableProjects";
import { Box, Container, Grid, GridList } from "@material-ui/core";
import { GridListTile, GridListTileBar, Paper, Typography } from '@material-ui/core';
import { Copyright } from "../Copyrigth";
import { useStyles } from "./config/moduleStyles";
import clsx from "clsx";

export default function Projects() {
    const { usuario_Id } = useContext(ProfileContext);
    const { allProjects, imagesProjetos } = useContext(ProjetosContext);

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [open, setOpen] = useState(false);
    const [idImageToImageDefault, setIdImageToImageDefault] = useState('');
    const [isDefaultCurrent, setIsDefaultCurrent] = useState(false);

    const [name, setName] = useState('');

    const handleClickOpen = (
        id: string,
        name: string,
        isDefaultCurrent: boolean
    ) => {
        setIdImageToImageDefault(id);
        setName(name);
        setOpen(true);
        setIsDefaultCurrent(isDefaultCurrent);
    };

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container
                maxWidth="lg"
                className={classes.container}
            >
                <Typography
                    className={classes.title}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >Gerenciamento de Projetos</Typography>
                <Grid container spacing={3}>
                    {/* Imagens */}
                    <Grid
                        item
                        xs={12}
                        md={8}
                        lg={9}
                    >
                        <Paper className={fixedHeightPaper}>
                            <div className={classes.rootI}>
                                <GridList
                                    className={classes.gridListI}
                                    cols={2.5}>
                                    {
                                        imagesProjetos.map(image => (
                                            <GridListTile key={image.id}>
                                                <img
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => handleClickOpen(
                                                        image.id,
                                                        image.projeto.titulo,
                                                        image.imgDefault
                                                    )}
                                                    src={image.url}
                                                    alt={image.projeto.titulo} />
                                                <GridListTileBar
                                                    title={image.projeto.titulo}
                                                    classes={{
                                                        root: classes.titleBar,
                                                        title: classes.titleI,
                                                    }}
                                                />
                                                <DialogToSelectImageDefaultOnHomePage
                                                    id={idImageToImageDefault}
                                                    name={name}
                                                    open={open}
                                                    isDefaultCurrent={isDefaultCurrent}
                                                    setOpen={setOpen}
                                                />
                                            </GridListTile>
                                        ))
                                    }
                                </GridList>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits
                                Authorization={usuario_Id}
                                Titulo={'Total de Projetos'}
                                content={allProjects.length} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <DenseTableProjetcts
                            Authorization={usuario_Id}
                            Projetos={allProjects} />
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
};