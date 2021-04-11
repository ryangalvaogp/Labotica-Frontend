import React, { useContext, useState } from 'react';
import api from '../../../config/api';
import { ProfileContext } from '../../../contexts/profileContext';
import Title from '../Title';
import Typography from '@material-ui/core/Typography';
import { Color } from '@material-ui/lab/Alert';
import { Button, TextField } from '@material-ui/core';
import CustomizedSnackbars from '../config/SnackBar';
import { Usuario } from '../../../config/Types/TypesSystemProfile';
import { ValidateForUpdateData } from '../config/ValidateForUpdateData';
import { useStylesPerfil } from '../config/moduleStyles';

export default function Perfil() {
  const {
    name,
    funcao,
    email,
    matricula,
    usuario_Id,
    setName,
    setEmail
  } = useContext(ProfileContext)
  const classes = useStylesPerfil();

  const [nameInput, setNameInput] = useState<Usuario['name']>(`${name}`);
  const [emailInput, setEmailInput] = useState<Usuario['email']>(`${email}`);

  const [isChangeData, setIsChangeData] = useState<boolean>(false);

  //Estados para o callback snackbar
  const [open, setOpen] = useState<boolean>(false);
  const [messagem, setMessagem] = useState<string>('');
  const [severity, setSeverity] = useState<Color>('info');

  function SnackOpen(text: string, color: Color) {
    setMessagem(text);
    setSeverity(color);
    setOpen(true);
  }
  

  async function HandleOnSubmit(e: Event) {
    e.preventDefault();

    try {
      let data = ValidateForUpdateData(nameInput, name, emailInput, email);
      const response = await api.put(`usuarios/${usuario_Id}`, data);

      setName(nameInput);
      setEmail(emailInput);
      setIsChangeData(false);
      SnackOpen("Usuário foi alterado com sucesso!", 'success');
    } catch (error) {
      SnackOpen(`Não foi possível alterar os dados!`, 'error');
    }
  }

  return (
    <React.Fragment>
      <div >
        <Title>Perfil</Title>
        <Typography component="p" variant="h4">
          <form
            onSubmit={(e: any) => HandleOnSubmit(e)}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={nameInput}
              onChange={e => {
                setNameInput(e.target.value);
                setIsChangeData(true);
              }}
              id="outlined-basic"
              label="Nome"
              variant="outlined"
            />
            <TextField
              value={emailInput}
              onChange={e => {
                setEmailInput(e.target.value);
                setIsChangeData(true);
              }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              disabled
              value={String(matricula)}
              id="outlined-basic"
              label="Matrícula"
              variant="outlined"
            />
            <TextField
              disabled
              value={funcao}
              id="outlined-basic"
              label="Função"
              variant="outlined"
            />
            <Button
              disabled={!isChangeData && true}
              variant="contained"
              color="primary"
              type='submit'
            >
              Alterar Dados
          </Button>
            <CustomizedSnackbars
              messagem={messagem}
              severity={severity}
              open={open}
              setOpen={setOpen}
            />
          </form>
        </Typography>
      </div>
      <div>
      </div>
    </React.Fragment>
  );
};