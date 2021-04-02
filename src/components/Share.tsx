import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, } from '@material-ui/core';
import { ListItemText, DialogTitle, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { ShareProps } from '../config/Types/TypesFeed';

const Redes = [
  {
    icon: FaFacebook,
    name: 'Facebook',
    URL: 'https://www.facebook.com/sharer/sharer.php?u='
  },
  {
    icon: FaWhatsapp,
    name: 'WhatsApp',
    URL: 'https://api.whatsapp.com/send?text='
  }
];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export default function Share(
  {
    open, 
    idPost,
    onClose 
  }:ShareProps) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="simple-dialog-title">
      <DialogTitle
        id="simple-dialog-title">
        Compartilhe esta página nas suas redes sociais
      </DialogTitle>
      <List>
        {Redes.map((Rede) => (
          <Link
            href={`${Rede.URL}http://localhost:3000/feed/#${idPost}`}
            key={Rede.URL}
          >
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <Rede.icon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={Rede.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Dialog>
  );
};