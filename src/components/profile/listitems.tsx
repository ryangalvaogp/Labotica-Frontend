import { useContext } from 'react';
import { PageCurrentContext } from '../../contexts/pageCurrentContext';
import { ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core'
import { Dashboard, People, BarChart, Layers } from '@material-ui/icons'
import { Assignment, Wallpaper } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core';
import { handleSelectSubPageProfileProps } from '../../config/Types/TypesPageCurrent'

const useStyles = makeStyles({
  root: {
    flexGrow: 12,
    backgroundColor: 'transparent',
    maxWidth: 400,
  },
});

export function MainListItems() {
  const { setCurrentSubPageProfile } = useContext(PageCurrentContext)
  const classes = useStyles();
  function handleSelectSubPageProfile(nameSubPage: handleSelectSubPageProfileProps) {
    setCurrentSubPageProfile(nameSubPage)
  }

  return (
    <div>
      <ListItem  onClick={() => handleSelectSubPageProfile('home')} button>
        <ListItemIcon color={'red'}>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Página Principal" />
      </ListItem>
      <ListItem onClick={() => handleSelectSubPageProfile('posts')} button>
        <ListItemIcon>
          <Wallpaper />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
      <ListItem onClick={() => handleSelectSubPageProfile('usuarios')} button>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Usuários" />
      </ListItem>
      <ListItem onClick={() => handleSelectSubPageProfile('projetos')} button>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Projetos" />
      </ListItem>
      <ListItem onClick={() => handleSelectSubPageProfile('settings')} button>
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary="Configurações" />
      </ListItem>
    </div>)
};

export function SecondaryListItems() {
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </div>
  );
}

export function ListItemsAlunosProfiles() {
  const { setCurrentSubPageProfile } = useContext(PageCurrentContext);

  function handleSelectSubPageProfile(nameSubPage: handleSelectSubPageProfileProps) {
    setCurrentSubPageProfile(nameSubPage)
  };

  return (
    <div>
      <ListItem onClick={() => handleSelectSubPageProfile('home')} button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Página Principal" />
      </ListItem> 
      <ListItem onClick={() => handleSelectSubPageProfile('posts')} button>
        <ListItemIcon>
          <Wallpaper />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
      <ListItem onClick={() => handleSelectSubPageProfile('settings')} button>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Configurações" />
      </ListItem>

    </div>)
};