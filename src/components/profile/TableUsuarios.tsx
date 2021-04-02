import { useContext, useState } from 'react';
import { ProfileContext } from '../../contexts/profileContext';
import { DialogForDeleteUsuario } from './DialogForDeleteUsuario';
import { Table, TableBody, TableCell, TableContainer } from '@material-ui/core'
import { TableHead, TableRow, Paper, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { useStylesDenseTable } from './config/moduleStyles';
import { TableUsuarioProps } from '../../config/Types/TypesSystemProfile';

export default function DenseTable(
  {
    Usuario,
    nameEntity
  }: TableUsuarioProps) {

  const {
    usuario_Id,
    setUsuarioIdToDelete
  } = useContext(ProfileContext);

  const classes = useStylesDenseTable();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const handleClickOpen = (
    id: string,
    name: string
  ) => {
    setUsuarioIdToDelete(id);
    setName(name);
    setOpen(true);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {nameEntity === 'Professor' ? nameEntity + `es` : nameEntity + `s`}
          </Typography>
          <TableRow className={classes.tableCell}>
            <TableCell className={classes.tableCell}>Nome</TableCell>
            <TableCell className={classes.tableCell} align="center">Matricula</TableCell>
            <TableCell className={classes.tableCell} align="center">Email</TableCell>
            <TableCell className={classes.tableCell} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!Usuario[0] &&
            <TableCell align="inherit">
              Não há {nameEntity === 'Professor' ?
                'professores' : 'alunos'} cadastrados.
          </TableCell>}
          {Usuario.map((user) => (
            <TableRow key={user.usuario_Id}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="center">{Number(user.matricula)} </TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="right">

                {/* Função que verifica e proibi que todos professores sejam deletados */}
                {nameEntity === 'Professor' ? Usuario.length === 1 ? '' :
                  user.usuario_Id !== usuario_Id ?
                    <DeleteIcon
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleClickOpen(
                        user.usuario_Id,
                        user.name
                      )}
                      fontSize='small' />
                    : '' :
                  <DeleteIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClickOpen(
                      user.usuario_Id,
                      user.name
                    )}
                    fontSize='small' />
                }
              </TableCell>
              <DialogForDeleteUsuario
                name={name}
                nameEntity={nameEntity}
                open={open}
                setOpen={setOpen}
                user={user}
                key={user.usuario_Id}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};