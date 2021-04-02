import { Dispatch, ReactNode, SetStateAction } from "react";
import { Usuario } from "./TypesSystemProfile";

export interface ProjetosContextData {
    allProjects: Projeto[]
    imagesProjetos: ImgProjetoProps[],
    imagesProjetosToCarrousel: {
        projeto_id: string
        usuario_Id: string
        id: string
        titulo: string
        caminho: string
        carrousel: boolean
    }[]
    projetos: ListProjetosProps[],
    projeto: Projeto[]
    authorization: string

    setProjetoIdToDelete: Dispatch<SetStateAction<string>>
    handleDeleteProjeto: (id: string) => void

    handleNewProjeto: (data: any, Author: string) => void
    setAuthorization: Dispatch<SetStateAction<string>>

    imgProjeto: ImgProjetoPropsWithoutProjetoProps[]
    projetctSelectedToViewImages: Projeto['projeto_id']
    setProjetctSelectedToViewImages: Dispatch<SetStateAction<string>>
    setImgProjeto: Dispatch<SetStateAction<ImgProjetoPropsWithoutProjetoProps[]>>

    HandleProjetoToCarrousel: (id: Projeto['projeto_id'], data: Projeto['carrousel']) => Promise<any>
    HandleSetImageDefault: (id: string, newValue: boolean) => Promise<any>
};

export interface ProjetosContextProvider {
    children: ReactNode;
};

export type Projeto = {
    projeto_id?: string
    titulo: string;
    descricao: string;
    carrousel: boolean;
    usuario_Id?: string
};

export type ImgProjetoProps = {
    id: string
    caminho: string
    imgDefault: boolean,
    projeto: Projeto
};

export type DescriptionProjetoProps = {
    description: string
    participantes: string
};

export type ListProjetosProps = {
    id: string;
    caminho: string;
    imgDefault: boolean;
    projeto: Projeto;
};

export interface DenseTableProjetctsProps {
    Projetos: Projeto[]
    Authorization: Usuario['usuario_Id']
};

export interface UploadImagesProjectsComponentProps {
    uploadQuantity: 'multi' | 'single'
    onUpload: any
};

export type renderDragMessagemProps = {
    isDragActive: boolean
    isDragReject: boolean
    uploadQuantity: 'multi' | 'single'
};

export type uploadMessagemProps = {
    type?: 'error' | 'success' | 'default'
    children: string
};

export type files = {
    files: any
    name: string
    id: string
    readableSize: number,
    preview: string,
    progress: number,
    uploaded: boolean,
    error: boolean,
    url: string
};

export interface ListFilesProps {
    image: files
    index: number
    onDeleteOfList: (index: number) => void
};

export type ListImagesSelectedProps = {
    images: files[]
    handleDeleteOfList: (index: number) => void

};

export type ImagesOfProjetosCarrouselProps = {
    tituloProjeto: string
};

export interface DialogForCarrouselProps {
    name: Projeto['titulo']
    id: Projeto['projeto_id']
    isCarrousel: Projeto['carrousel']
    openDialogCarrousel: boolean
    projeto: Projeto;
    setOpenDialogCarrousel: Dispatch<SetStateAction<boolean>>
};

export interface DialogForDeleteProjetosProps {
    name: Projeto['titulo']
    open: boolean
    projeto: Projeto;
    setOpen: Dispatch<SetStateAction<boolean>>
};

export interface DialogToSelectImageDefaultOnHomePageProps {
    name: string,
    isDefaultCurrent:boolean
    id: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
};

export type ImgProjetoPropsWithoutProjetoProps = {
    id: string
    caminho: string
    imgDefault: boolean
};