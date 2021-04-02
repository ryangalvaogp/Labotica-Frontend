import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './config/DropContainer'
import { useStylesUpload } from "./config/moduleStyles";
import {
    renderDragMessagemProps,
    UploadImagesProjectsComponentProps
} from "../../config/Types/TypesProjetos";

function RenderDragMessagem(
    {
        uploadQuantity,
        isDragActive,
        isDragReject
    }: renderDragMessagemProps): any {
    if (!isDragActive) {
        return <UploadMessage>
            {uploadQuantity === 'single' ?
                'Arraste uma imagem aqui!'
                :
                'Arraste as imagens do projeto aqui!'
            }
        </UploadMessage>
    };
    if (isDragReject) {
        return (
            <UploadMessage type="error">
                Arquivo não suportado!
            </UploadMessage>)
    };

    return (
        <UploadMessage type="success">
            Solte o arquivo aqui!
        </UploadMessage>
    );
};

export default function Upload(
    {
        uploadQuantity,
        onUpload
    }: UploadImagesProjectsComponentProps) {
    const classes = useStylesUpload();

    return (
        <div className={classes.root}>
            <Dropzone
                accept="image/*"
                onDropAccepted={onUpload}>
                {({
                    getInputProps,
                    getRootProps,
                    isDragActive,
                    isDragReject }) =>
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input
                            {...getInputProps()}
                            className={classes.input}
                            type="file"
                        />
                        <RenderDragMessagem
                            uploadQuantity={uploadQuantity}
                            isDragActive={isDragActive}
                            isDragReject={isDragReject}
                        />
                    </DropContainer>
                }
            </Dropzone>
        </div>
    );
};