import { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormDialogProps } from '../../config/Types/TypesSystemProfile';
import { ProfileContext } from '../../contexts/profileContext';

export default function FormDialog(
    {
        children,
        open,
        nameEntity,
        setOpen
    }: FormDialogProps) {

    const { handleCadastrarUsuario } = useContext(ProfileContext)

    //Antes de entrar na produção tirar os dados inicais
    const [name, setName] = useState('aaaa');
    const [email, setEmail] = useState('aaaa.s@gmail.com');
    const [password, setPassword] = useState('aaaa');
    const [matricula, setMatricula] = useState(0);


    async function handleSubmit() {
        setOpen(false)
        handleCadastrarUsuario({ email, name, password, matricula })
    };

    function handleClose() {
        setOpen(false)
    };
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{children}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Preencha todas as informações a seguir
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nome"
                        type="text"
                        fullWidth
                        required
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                        }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="name"
                        style={{
                            WebkitAppearance: 'none',
                            MozAppearance: 'textfield',
                            appearance: 'textfield'

                        }}
                        label="Matrícula"
                        type="number"
                        fullWidth
                        value={matricula}
                        onChange={e => {
                            setMatricula(Number(e.target.value))
                        }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="name"
                        label="Endereço Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="name"
                        label="Senha"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                    >Cancelar</Button>
                    <Button
                        onClick={() => handleSubmit()}
                        color="primary"
                    >Cadastrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};