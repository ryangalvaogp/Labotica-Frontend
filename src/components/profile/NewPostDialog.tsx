import { useContext, useEffect, useState } from 'react';
import { FeedContext } from '../../contexts/feedContext';
import Upload from './upload';
import ListFiles from './ListFiles';
import {Button, TextField, Dialog, DialogTitle} from '@material-ui/core';
import {DialogActions, DialogContent, DialogContentText} from '@material-ui/core';
import filesize from 'filesize'
import Crypto from 'crypto'
import { files } from '../../config/Types/TypesProjetos';
import { NewPostDialogProps } from '../../config/Types/TypesFeed';

export default function NewPostDialog({ Authorization, open, setOpen }: NewPostDialogProps) {
    const { handleNewPost, setAuthorization } = useContext(FeedContext);

    const [titulo, setTitulo] = useState('Post');
    const [place, setPlace] = useState('Paragominas');
    const [descricao, setDescricao] = useState('')

    const [images, setImages] = useState([]);
    const [refresf, setRefresh] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    async function handleSubmit() {
        setOpen(false)
        const data = new FormData();

        data.append('titulo', titulo);
        data.append('description', descricao);
        data.append('place', place);

        images.map(image => {
            data.append('image', image.file);
        });

        handleNewPost(data, Authorization);
    };

    function handleUpload(files: any) {
        const uploadFiles = files.map((file: any) => ({
            file,
            name: file.name,
            id: Crypto.randomBytes(2).toString('hex'),
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: ''
        }));

        setImages([...images, uploadFiles[0]]);
    };

    function handleDeleteOfList(index: number) {
        let imgs = images;
        let imgnNew = imgs.splice(index, 1);

        setImages(imgs);
        setRefresh(Crypto.randomBytes(2).toString('hex'));
    };

    function ListImagesSelected(
        images: files[],
        handleDeleteOfList: (
            index: number
        ) => void): React.ReactNode {
        return !!images.length && (
            <>
                {images.map((image, index) => (
                    <ListFiles
                        key={image.id}
                        image={image}
                        index={index}
                        onDeleteOfList={handleDeleteOfList} />
                ))}
            </>
        );
    };
    //Chama a função ListImagesSelected para atualizar
    //toda vez que deletar uma imagem selecionada
    useEffect(() => {
        ListImagesSelected(images, handleDeleteOfList)
    }, [refresf]);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle
                    id="form-dialog-title"
                >Publique uma Imagem</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Selecione uma imagem
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Titulo"
                        type="text"
                        fullWidth
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Descrição"
                        type="text"
                        fullWidth
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Local"
                        type="text"
                        fullWidth
                        value={place}
                        onChange={e => setPlace(e.target.value)}
                    />

                    {images.length === 1 ? '' :
                        <Upload
                            uploadQuantity='single'
                            onUpload={handleUpload} />}
                    {
                        ListImagesSelected(images, handleDeleteOfList)
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                    >Cancelar</Button>
                    <Button
                        onClick={handleSubmit}
                        color="primary"
                    >Publicar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};