import * as React from 'react';
import DialogInitial from '../DialogInitial';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import { Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import { AppHeaderProps } from '../../config/Types/Types';

export default function AppHeader(
    {
        claseTool,
        classes,
        name,
        author,
        entity,
        open,
        setIsLogged,
        handleDrawerOpen
    }: AppHeaderProps) {

    return (
        <AppBar
            style={{ background: '#333' }}
            position="fixed"
            className={
                clsx(classes.appBar,
                    open && classes.appBarShift
                )
            }
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="Abrir Menu"
                    onClick={handleDrawerOpen}
                    className={
                        clsx(classes.menuButton,
                            open && classes.menuButtonHidden
                        )
                    }
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}>
                    {entity === 'Professor' ?
                        'Administrador ' : 'Aluno '}
                    - Labótica IFPA Paragominas
                    <DialogInitial name={name} />
                </Typography>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <Tooltip
                            arrow
                            TransitionProps={{ timeout: 1000 }}
                            classes={claseTool}
                            title={'Sair'}>
                            <LogoutIcon onClick={() => setIsLogged(false)} />
                        </Tooltip>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};