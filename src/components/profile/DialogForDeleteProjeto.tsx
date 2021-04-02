import { useContext } from 'react';
import { ProjetosContext } from '../../contexts/projetosContext';
import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { DialogContentText, DialogTitle } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { WarningRounded } from '@material-ui/icons';
import { DialogForDeleteProjetosProps } from '../../config/Types/TypesProjetos';

export function DialogForDeleteProjeto(
    {
        name,
        open,
        projeto,
        setOpen
    }: DialogForDeleteProjetosProps) {
    const { handleDeleteProjeto } = useContext(ProjetosContext);

    function HandleOnDeleteProjeto(id: string) {
        setOpen(false);
        handleDeleteProjeto(id);
    };

    function handleClose() {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <WarningRounded />
                {" ATENÇÃO "}
                <WarningRounded />
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Esta ação irá deletar o projeto
        <strong> {name}</strong> do sistema!<br />
                    Consequentemente todos seus dados, arquivos e publicações no feed serão
                    perdidos permanentemente.<br />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Voltar
                </Button>
                <Button onClick={() => HandleOnDeleteProjeto(
                    projeto.projeto_id
                )}
                    color="primary"
                >
                    Confirmar
        </Button>
            </DialogActions>
        </Dialog>
    );
};