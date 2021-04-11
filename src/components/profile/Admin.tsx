import * as React from 'react';
import { PageCurrentContext } from '../../contexts/pageCurrentContext';
import { ProfileContext } from '../../contexts/profileContext';
import AppHeader from './AppHeader';
import SubPagesList from './SubPagesList';
import HomeProfile from './Home';
import Students from './Students';
import Projects from './Projetos';
import ManagerPosts from './managerPosts';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SubPageProfileSelect } from '../../config/Types/TypesPageCurrent';
import { useStyles, tooltipStyles } from './config/moduleStyles';
import Settings from './settings/Settings';

function SubPageSelect(
  {
    subpage
  }: SubPageProfileSelect): JSX.Element {
  switch (subpage) {
    case 'home':
      return <HomeProfile />;

    case 'usuarios':
      return <Students />;

    case 'projetos':
      return <Projects />;

    case 'posts':
      return <ManagerPosts />;
    
    case 'settings':
      return <Settings/>

    default:
      return <HomeProfile />;
  }
}

export function Admin() {
  const { currentSubPageProfile } = React.useContext(PageCurrentContext);
  const { name, usuario_Id, funcao, setIsLogged } = React.useContext(ProfileContext);

  const classes = useStyles();
  const claseTool = tooltipStyles();

  const [open, setOpen] = React.useState(true);
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
        classes={classes}
        author={usuario_Id}
        open={open}
        entity={funcao}
        handleDrawerOpen={handleDrawerOpen}
        name={name}
        claseTool={claseTool}
        setIsLogged={setIsLogged}
      />
      <SubPagesList
        classes={classes}
        entity={funcao}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <SubPageSelect subpage={currentSubPageProfile} />
    </div>
  );
};