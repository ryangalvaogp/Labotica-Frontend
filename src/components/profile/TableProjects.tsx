import { useContext, useState } from 'react';
import { ProjetosContext } from '../../contexts/projetosContext';
import { Table, TableBody, TableCell, TableContainer } from '@material-ui/core'
import { TableHead, TableRow, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { FaSlideshare } from 'react-icons/fa'
import { DenseTableProjetctsProps } from '../../config/Types/TypesProjetos';
import { useStylesTableProjects } from './config/moduleStyles';
import { DialogForCarrousel } from './DialogForCarrousel';
import { DialogForDeleteProjeto } from './DialogForDeleteProjeto';

export default function DenseTableProjetcts(
  {
    Projetos,
    Authorization
  }: DenseTableProjetctsProps): JSX.Element {

  const {
    setProjetoIdToDelete,
    setAuthorization,
  } = useContext(ProjetosContext);

  const classes = useStylesTableProjects();
  const [open, setOpen] = useState(false);

  const [openDialogCarrousel, setOpenDialogCarrousel] = useState(false);
  const [name, setName] = useState('');
  const [idProjetoToCarrouselModify, setIdProjetoToCarrouselModify] = useState('');
  const [isCarrousel, setIsCarrousel] = useState(false);

  function handleClickOpenDialogCarrousel(
    id: string,
    name: string,
    isCarr: boolean
  ) {
    setName(name);
    setIdProjetoToCarrouselModify(id);
    setIsCarrousel(isCarr);
    setOpenDialogCarrousel(true);
  };

  const handleClickOpen = (
    id: string,
    name: string
  ) => {
    setAuthorization(Authorization);
    setName(name);
    setProjetoIdToDelete(id);
    setOpen(true);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Projetos
          </Typography>
          <TableRow className={classes.tableCell}>
            <TableCell className={classes.tableCell}>Titulo</TableCell>
            <TableCell className={classes.tableCell} align="center">Descrição</TableCell>
            <TableCell className={classes.tableCell} align="center">Responsável</TableCell>
            <TableCell className={classes.tableCell} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!Projetos[0] &&
            <TableCell align="inherit">
              Não há projetos cadastrados.
            </TableCell>
          }
          {Projetos.map(projeto => (
            <TableRow key={projeto.projeto_id}>
              <TableCell component="th" scope="row">
                {projeto.titulo}
              </TableCell>
              <TableCell align="center">{projeto.descricao} </TableCell>
              {/* Falta colocar o número de matrícula no banco de dados */}
              <TableCell align="center">{projeto.usuario_Id}</TableCell>
              <TableCell align="right">
                <FaSlideshare
                  style={{ cursor: 'pointer' }}
                  fontSize='small'
                  color={projeto.carrousel && '#008ad3'}
                  onClick={() => handleClickOpenDialogCarrousel(
                    projeto.projeto_id,
                    projeto.titulo,
                    projeto.carrousel
                  )}
                />
                <Delete
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleClickOpen(
                    projeto.projeto_id,
                    projeto.titulo
                  )}
                  fontSize='small' />
              </TableCell>
              <DialogForCarrousel
                name={name}
                id={idProjetoToCarrouselModify}
                isCarrousel={isCarrousel}
                openDialogCarrousel={openDialogCarrousel}
                projeto={projeto}
                setOpenDialogCarrousel={setOpenDialogCarrousel}
              />
              <DialogForDeleteProjeto
                name={name}
                open={open}
                projeto={projeto}
                setOpen={setOpen}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};