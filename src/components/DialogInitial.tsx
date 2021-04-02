import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { DialogContentText, DialogTitle, useMediaQuery } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import { DialogInitialProps } from '../config/Types/TypesSystemProfile';

export default function DialogInitial(
  {
    name,
  }: DialogInitialProps) {

  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{
          `Seja bem Vindo, ${name}`
        }</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para segurança dos dados não atualize a página pelo navegador.<br />
            Caso atualize, será deslogado.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Fechar
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
};