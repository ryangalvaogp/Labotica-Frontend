import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CustomizedSnackbarsProps } from '../../../config/Types/TypesSettings';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars(
    {
        messagem,
        severity,
        open,
        setOpen,
    }: CustomizedSnackbarsProps) {
    const classes = useStyles();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={severity}>
                    {messagem}
                </Alert>
            </Snackbar>
        </div>
    );
}