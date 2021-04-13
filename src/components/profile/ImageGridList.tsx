import { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { ImageGridListProps, SwitchClassOfImages } from '../../config/Types/TypesSystemProfile';
import { Backdrop, Typography } from '@material-ui/core';
import { useStylesImageGridList } from './config/moduleStyles'

export default function ImageGridList(
    {
        imagesProjetos,
        imagesPosts
    }: ImageGridListProps) {
    const classes = useStylesImageGridList();

    return (
        <SwitchClassOfImages origin={
            !imagesProjetos ? 'posts' : 'projetos'
        } />
    );
    function SwitchClassOfImages({ origin }: SwitchClassOfImages) {
        const [open, setOpen] = useState(false);
        const handleClose = () => {
            setOpen(false);
        };
        const handleToggle = () => {
            setOpen(!open);
        };
        switch (origin) {
            case 'posts':
                return (
                    <div className={classes.root}>
                        <Typography
                            variant="h5"
                            color="primary"
                        >Publicações</Typography>
                        <GridList
                            cellHeight={160}
                            className={classes.gridList}
                            cols={3}
                        >
                            {imagesPosts.map((image) => (
                                <GridListTile key={image.post_Id} cols={1}>
                                    <img
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleToggle()}
                                        src={`${image.url}`}
                                        alt={image.titulo} />
                                    <Backdrop
                                        className={classes.backdrop}
                                        open={open}
                                        onClick={handleClose}
                                    >
                                        <img
                                            style={{ cursor: 'pointer', width: 500 }}
                                            src={`${image.url}`}
                                            alt={image.titulo} />
                                    </Backdrop>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                );

            case 'projetos':
                return (
                    <div className={classes.root}>
                        <Typography
                            variant="h5"
                            color="primary"
                        >Projetos</Typography>
                        <GridList
                            cellHeight={160}
                            className={classes.gridList}
                            cols={3}
                        >
                            {imagesProjetos.map((image) => (
                                <GridListTile key={image.id} cols={1}>
                                    <img
                                        onClick={() => handleToggle()}
                                        style={{ cursor: 'pointer' }}
                                        src={`${image.url}`}
                                        alt={image.projeto.titulo}
                                    />
                                    <Backdrop
                                        className={classes.backdrop}
                                        open={open}
                                        onClick={handleClose}
                                    >
                                        <img
                                            style={{ cursor: 'pointer', width: 500 }}
                                            src={`${image.url}`}
                                            alt={image.projeto.titulo} />
                                    </Backdrop>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                );
        };
    };
};