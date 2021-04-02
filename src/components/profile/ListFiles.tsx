import { useState } from 'react';
import { List, ListItem, ListItemAvatar, Avatar } from '@material-ui/core';
import { ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { IconButton, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularStatic from './ProgressBar';
import { ListFilesProps } from '../../config/Types/TypesProjetos';
import { useStylesListFiles } from './config/moduleStyles';

export default function ListFiles(
    {
        image,
        index,
        onDeleteOfList
    }: ListFilesProps) {

    const classes = useStylesListFiles();
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(true);

    return (
        <div className={classes.root}>
            <Grid item xs={12} md={12}>
                <div className={classes.demo}>
                    <List dense={dense}>
                        <>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={image.preview}>
                                    </Avatar>
                                </ListItemAvatar>
                                {!image.uploaded && image.error && (
                                    <CircularStatic progress={image.progress} />
                                )}
                                <ListItemText
                                    primary={image.name}
                                    secondary={secondary ? `${image.readableSize}` : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        onClick={() => onDeleteOfList(index)}
                                        edge="end"
                                        aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </>
                    </List>
                </div>
            </Grid>
        </div>
    );
};