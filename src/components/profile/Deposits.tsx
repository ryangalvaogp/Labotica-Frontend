import { useContext, useState, Fragment } from 'react';
import { PageCurrentContext } from '../../contexts/pageCurrentContext';
import { ProfileContext } from '../../contexts/profileContext';
import FormDialog from './FormularioDialog';
import FormDialogProjeto from './FormularioDialogProjeto';
import Title from './Title';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { DepositsProps } from '../../config/Types/TypesSystemProfile';
import { handleSelectSubPageProfileProps } from '../../config/Types/TypesPageCurrent';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(
  {
    Titulo,
    content,
    nameEntity,
    Authorization,
    action
  }: DepositsProps) {

  const { currentSubPageProfile, setCurrentSubPageProfile } = useContext(PageCurrentContext)
  const { setFuncaoNewUser } = useContext(ProfileContext)

  const classes = useStyles();

  const [open, setOpen] = useState<boolean>(false);
  const [openDialogProjeto, setOpenDialogProjeto] = useState<boolean>(false)

  function handleClickOpenDialogProjeto() {
    setOpenDialogProjeto(true)
  }
  function handleSelectSubPageProfile(nameSubPage: handleSelectSubPageProfileProps) {
    setCurrentSubPageProfile(nameSubPage)
  }
  const handleClickOpen = () => {
    setFuncaoNewUser(nameEntity)
    setOpen(true);
  };
console.log(nameEntity)
  return (
    <Fragment>
      <div >
        <Title>{Titulo}</Title>
        <Typography component="p" variant="h4">
          {content}
        </Typography>
      </div>
      <div>
        {nameEntity!=='Professor'&&<ButtonOn />}
        
      </div>
    </Fragment>
  );
  
  function ButtonOn(): JSX.Element {
    switch (currentSubPageProfile) {
      case 'usuarios':
        return (
          <>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}>
              Cadastrar
              {
                nameEntity === 'Professor' ?
                  ' Professor' : ' Aluno'
              }
            </Button>
            <FormDialog
              open={open}
              setOpen={setOpen}
              nameEntity={nameEntity}
            >
              Cadastrar
            {
                nameEntity === 'Professor' ?
                  ' Professor' : ' Aluno'
              }
            </FormDialog>
          </>
        );
        
      case 'projetos':
        return (
          <>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpenDialogProjeto}>
              Cadastrar Projetos
            </Button>

            <FormDialogProjeto
              open={openDialogProjeto}
              setOpen={setOpenDialogProjeto}
              Authorization={Authorization}
            >
              Cadastrar Projeto
        </FormDialogProjeto>
          </>)

      default:
        return <Button
          variant="outlined"
          color="primary"
          onClick={() => handleSelectSubPageProfile(action)}>
          Ir para
              {action === 'posts' && ' posts'}
          {action === 'projetos' && ' projetos'}
          {action === 'usuarios' && ' usuarios'}
        </Button>
    }
  }
}