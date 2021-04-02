import { useContext, useState } from 'react';
import { ProfileContext } from '../../contexts/profileContext';
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { Button, DialogTitle } from '@material-ui/core/';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { DialogForDeleteUsuarioProps } from '../../config/Types/TypesSystemProfile';
import { Color } from '@material-ui/lab/Alert';
import CustomizedSnackbars from './config/SnackBar';

export function DialogForDeleteUsuario(
    {
        name,
        open,
        nameEntity,
        user,
        setOpen
    }: DialogForDeleteUsuarioProps) {
    const { handleDeleteUsuario } = useContext(ProfileContext)
    //Estados para o callback snackbar
    const [openSnack, setOpenSnack] = useState<boolean>(false);
    const [messagem, setMessagem] = useState<string>('');
    const [severity, setSeverity] = useState<Color>('info');

    function SnackOpen(text: string, color: Color) {
        setMessagem(text);
        setSeverity(color);
        setOpenSnack(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function HandleOnDeleteUsuario(e: Event) {
        e.preventDefault();
        try {
            setOpen(false);
            handleDeleteUsuario();
            SnackOpen(`${nameEntity} foi deletado com sucesso!`, 'success');
        } catch (error) {
            SnackOpen(`Erro ao cadastrar ${nameEntity.toLowerCase()} !`, 'error');
        }
    };

    return (
        <>
            <Dialog
                open={open}
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
                        Esta ação irá deletar o {
                            nameEntity === 'Aluno' ?
                                'aluno' : 'professor/administrador'
                        }
                        <strong> {name}</strong> do sistema!
                        Consequentemente todos seus dados, arquivos e publicações no feed serão
                        perdidos permanentemente.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Voltar
                    </Button>
                    <Button onClick={(e: any) => HandleOnDeleteUsuario(e)} color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
            <CustomizedSnackbars
                messagem={messagem}
                severity={severity}
                open={openSnack}
                setOpen={setOpenSnack}
            />
        </>);
};