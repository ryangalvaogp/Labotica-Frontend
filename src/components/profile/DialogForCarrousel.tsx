import { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { DialogContentText, DialogTitle } from '@material-ui/core';
import { WarningRounded } from '@material-ui/icons';
import { DialogForCarrouselProps } from '../../config/Types/TypesProjetos';
import { ProjetosContext } from '../../contexts/projetosContext';

export function DialogForCarrousel(
    {
        name,
        id,
        isCarrousel,
        openDialogCarrousel,
        projeto,
        setOpenDialogCarrousel
    }: DialogForCarrouselProps) {
        
    const { HandleProjetoToCarrousel } = useContext(ProjetosContext);

    function handleCloseDialogCarrousel() {
        setOpenDialogCarrousel(false);
    };

    function HandleOnProjetoToCarrousel(
        idProjeto: string,
        isCarrouselCurrent: boolean
    ) {
        handleCloseDialogCarrousel()

        switch (isCarrouselCurrent) {
            case true:
                HandleProjetoToCarrousel(idProjeto, false);
                break;

            case false:
                HandleProjetoToCarrousel(idProjeto, true)
                break;
        };
    };

    return (
        <Dialog
            open={openDialogCarrousel}
            onClose={handleCloseDialogCarrousel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <WarningRounded />
                {" ATENÇÃO "}
                <WarningRounded />
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="alert-dialog-description"
                >
                    Esta ação irá {projeto.carrousel ? ' remover ' : ' adicionar '}
                as imagens do projeto <strong>{name} </strong>
                no carrousel da página principal do site.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleCloseDialogCarrousel}
                    color="primary"
                >
                    Fechar
                </Button>
                <Button
                    onClick={() => HandleOnProjetoToCarrousel(
                        id,
                        isCarrousel
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