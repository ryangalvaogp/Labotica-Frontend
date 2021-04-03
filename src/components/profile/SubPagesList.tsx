import { ListItemsAlunosProfiles, MainListItems, SecondaryListItems } from './listitems';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { SubPagesListProps } from '../../config/Types/TypesPageCurrent';

export default function SubPagesList(
    {
        classes,
        handleDrawerClose,
        open,
        entity    
    }: SubPagesListProps) {

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper,
                    !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
            {entity==='Professor'? 
            <MainListItems/>
            :            
            <ListItemsAlunosProfiles />}               
            </List>
            <Divider />
            <List>{SecondaryListItems}</List>
        </Drawer>
    );
};