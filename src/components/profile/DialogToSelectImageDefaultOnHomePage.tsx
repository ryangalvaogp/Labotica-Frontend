import { useContext } from "react";
import { ProjetosContext } from "../../contexts/projetosContext";
import { Button, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import { DialogContentText, DialogTitle } from "@material-ui/core";
import { WarningRounded } from "@material-ui/icons";
import { DialogToSelectImageDefaultOnHomePageProps } from "../../config/Types/TypesProjetos";

export function DialogToSelectImageDefaultOnHomePage(
    {
        id,
        name,
        open,
        isDefaultCurrent,
        setOpen
    }: DialogToSelectImageDefaultOnHomePageProps) {
    const { HandleSetImageDefault } = useContext(ProjetosContext)
    const handleClose = () => {
        setOpen(false);
    };

    function handleOnSetImageDefault(
        idImage: string,
        isDefaultCurrent: boolean) {
        handleClose()
        switch (isDefaultCurrent) {
            case true:
                HandleSetImageDefault(idImage, false);
                break;

            case false:
                HandleSetImageDefault(idImage, true)
                break;
        };
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
                    Esta ação irá
                {isDefaultCurrent ? ' remover ' : ' definir '}
                 esta imagem como padrão e
                {isDefaultCurrent ? ' remover ' : ' tornar '}
                o projeto <strong>{` ${name}`} </strong> como um
                dos principais, exibindo-o na homepage.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="primary"
                >
                    Fechar
            </Button>
                <Button
                    onClick={() => handleOnSetImageDefault(
                        id,
                        isDefaultCurrent
                    )}
                    color="primary"
                    autoFocus
                >
                    Confirmar
            </Button>
            </DialogActions>
        </Dialog>
    );
};