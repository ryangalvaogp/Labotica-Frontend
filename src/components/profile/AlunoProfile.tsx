import { useContext, useState } from 'react';
import { PageCurrentContext } from '../../contexts/pageCurrentContext';
import { ProfileContext } from '../../contexts/profileContext';
import AppHeader from './AppHeader';
import SubPagesList from './SubPagesList';
import HomeProfile from './Home';
import PostsAluno from './PostAluno';
import Settings from './settings/Settings';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles, tooltipStyles } from './config/moduleStyles';
import { SubPageProfileSelect } from '../../config/Types/TypesPageCurrent';

function SubPageSelect(
  {
    subpage
  }: SubPageProfileSelect): JSX.Element {
  switch (subpage) {
     case 'home':
       return <HomeProfile />;

    case 'posts':
      return <PostsAluno />;

    case 'settings':
      return <Settings />

    default:
      return <HomeProfile />;
  }
}

export function AlunoProfile() {
  const { currentSubPageProfile } = useContext(PageCurrentContext);
  const {
    name,
    usuario_Id,
    funcao,
    setIsLogged
  } = useContext(ProfileContext);

  const classes = useStyles();
  const claseTool = tooltipStyles();

  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader
        author={usuario_Id}
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        entity={funcao}
        name={name}
        claseTool={claseTool}
        setIsLogged={setIsLogged} />
      <SubPagesList
        entity={funcao}
        classes={classes}
        open={open}
        handleDrawerClose={handleDrawerClose} />
      <SubPageSelect subpage={currentSubPageProfile} />
    </div>
  );
};