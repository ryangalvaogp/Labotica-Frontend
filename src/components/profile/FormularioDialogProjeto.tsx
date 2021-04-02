import { useContext, useEffect, useState } from 'react';
import { ProjetosContext } from '../../contexts/projetosContext';
import Upload from './upload';
import ListFiles from './ListFiles';
import Crypto from 'crypto'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import filesize from 'filesize'
import { FormDialogProps } from '../../config/Types/TypesSystemProfile';
import { files } from '../../config/Types/TypesProjetos';

export default function FormDialogProjeto(
    {
        children,
        open,
        Authorization,
        setOpen
    }: FormDialogProps) {
    const { handleNewProjeto, setAuthorization } = useContext(ProjetosContext)

    //Antes de entrar na produção tirar os dados inicais
    const [titulo, setTitulo] = useState('aaaa');
    const [descricao, setDescricao] = useState('aaaa.s@gmail.com');
    const [images, setImages] = useState([]);
    const [refresf, setRefresh] = useState('');

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

        setImages([...images, uploadFiles[0]])
    };

    async function handleSubmit() {
        setOpen(false);
        setAuthorization(Authorization);
        const data = new FormData();

        data.append('titulo', titulo);
        data.append('descricao', descricao);
        data.append('carrousel', 'false');

        images.map(image => {
            data.append('images', image.file);
        });

        handleNewProjeto(data, Authorization);
    };

    function handleClose() {
        setOpen(false);
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
                >{children}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Preencha todas informações a seguir
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Titulo"
                        type="text"
                        fullWidth
                        required
                        value={titulo}
                        onChange={e => {
                            setTitulo(e.target.value)
                        }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="name"
                        label="Descricao"
                        type="text"
                        fullWidth
                        value={descricao}
                        onChange={e => {
                            setDescricao(e.target.value)
                        }}
                    />

                    <Upload
                        uploadQuantity='multi'
                        onUpload={handleUpload}
                    />
                    {
                        ListImagesSelected(images, handleDeleteOfList)
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={() => handleSubmit()} color="primary">
                        Cadastrar
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};