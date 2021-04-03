import { useContext, useState } from 'react';
import { FeedContext } from '../../contexts/feedContext';
import { Backdrop, Card, CardActionArea, CardActions } from '@material-ui/core'
import { CardContent, CardMedia, Typography, Button } from '@material-ui/core'
import { Avatar, CardHeader, Dialog, DialogActions } from '@material-ui/core';
import { DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { useStylesListPostUser } from './config/moduleStyles'
import { Posts } from '../../config/Types/TypesFeed';

export default function ListPostUser(
  {
    titulo,
    place,
    description,
    data,
    image,
    post_Id,
    authorization,
    Usuario
  }: Posts) {
  const {
    DeletePost,
    setAuthorization
  } = useContext(FeedContext)
  const classes = useStylesListPostUser();

  const [openDialogToDelete, setOpenDialogToDelete] = useState(false);

  function handleDeletePost(id: Posts['post_Id']) {
    setOpenDialogToDelete(false);
    DeletePost(id);
  }

  function confirmationOnHandleClickDelete() {
    const handleClickOpen = (id: string, idUser: string) => {
      setAuthorization(authorization)
      setOpenDialogToDelete(true);
    };

    const handleClose = () => {
      setOpenDialogToDelete(false);
    };
    return { handleClickOpen, handleClose };
  }
  const { handleClickOpen, handleClose } = confirmationOnHandleClickDelete();

  const [openToggle, setOpenToggle] = useState(false);
  const handleCloseToggle = () => {
    setOpenToggle(false);
  };
  const handleToggle = () => {
    setOpenToggle(true);
  };

  return (
    <>
      <Card
        className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={
              Usuario.funcao === 'Professor' ?
                classes.avatarProfessor
                :
                classes.avatarAluno}
            >{Usuario.name.substring(0, 1)}</Avatar>
          }
          title={Usuario.name}
          subheader={`${place} | ${data}`}
        />
        <CardActionArea  >
          <CardMedia
            className={classes.Img}
            component="img"
            onClick={handleToggle}
            alt={`Imagem do Post ${titulo}`}
            height="140"
            image={`http://localhost:3333/files/posts/${image}`}
            title={titulo}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              onClick={() => handleClickOpen(post_Id, authorization)}
            >
              Deletar
        </Button>
          </CardActions>
        </CardActionArea>
        <Dialog
          open={openDialogToDelete}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <WarningRoundedIcon />
            {" ATENÇÃO "}
            <WarningRoundedIcon />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Você tem certeza que deseja deletar esta publicação?<br />
                    Ao deletar, não terá maneiras de recuperá-la
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
            >
              Voltar
          </Button>
            <Button
              onClick={() => handleDeletePost(post_Id)}
              color="primary"
            >
              Confirmar
          </Button>
          </DialogActions>
        </Dialog>

      </Card>
      <Backdrop
        className={classes.backdrop}
        open={openToggle}
        onClick={handleCloseToggle}
      >
        <img
          style={{ cursor: 'pointer' }}
          onClick={handleCloseToggle}
          src={`https://backendlabotica.herokuapp.com/files/posts/${image}`}
          alt={image} />
      </Backdrop>
    </>
  );
};