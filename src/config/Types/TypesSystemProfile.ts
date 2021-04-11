import { Dispatch, ReactNode, SetStateAction } from 'react'
import { LisPostsEntity, Posts } from './TypesFeed'
import { handleSelectSubPageProfileProps } from './TypesPageCurrent'
import { ImgProjetoProps } from './TypesProjetos'

export interface ProfileContextData {
    email: string
    password: string

    name: string
    usuario_Id: string
    funcao: UsuarioLogadoProps['funcao']
    matricula: UsuarioLogadoProps['matricula']
    isLogged: boolean

    allAlunos: Usuario[]
    allProfessores: Usuario[]

    funcaoNewUser: Usuario['funcao']

    handeLogin: (e: any) => void
    handleLogout: (e: any) => void

    setEmail: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>

    setName: Dispatch<SetStateAction<string>>
    setUsuario_Id: Dispatch<SetStateAction<string>>
    setFuncao: Dispatch<SetStateAction<string>>
    setIsLogged: Dispatch<SetStateAction<boolean>>


    setUsuarioIdToDelete: Dispatch<SetStateAction<Usuario['usuario_Id']>>
    handleDeleteUsuario: () => void

    setFuncaoNewUser: Dispatch<SetStateAction<string>>
    handleCadastrarUsuario: ({ name, email, password }: handleCadastrarUsuarioProps) => void
};

export interface ProfileProvider {
    children: ReactNode;
};

export type Usuario = {
    usuario_Id: string
    name: string,
    matricula: number,
    funcao: 'Professor' | 'Aluno' | ''
    email: string
    password?: string
};

export type UsuarioLogadoProps = {
    usuario_Id: Usuario['usuario_Id']
    name: Usuario['name']
    funcao?: Usuario['funcao']
    matricula?: Usuario['matricula']
};

export type DialogInitialProps = {
    name: string
};

export interface DepositsProps {
    Titulo: string
    content: any
    nameEntity?: TableUsuarioProps['nameEntity']
    Authorization?: string
    action?: handleSelectSubPageProfileProps
}

export interface TableUsuarioProps {
    nameEntity: UsuarioLogadoProps['funcao']
    Usuario: Usuario[]
}

export interface FormDialogProps {
    children?: any
    open: boolean
    nameEntity?: TableUsuarioProps['nameEntity']
    Authorization?: string
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
    ;  onSubmit?: () => void
}

export type handleCadastrarUsuarioProps = {
    name: Usuario['name']
    email: Usuario['email']
    password: Usuario['password']
    matricula: Usuario['matricula']
};

export interface DashboardProps {
    entity: Usuario['funcao']
};

export type PostAll = {
    classes: Record<"root" | "content" | "toolbar" | "title" | "titleAlunos" | "toolbarIcon" | "appBar" | "appBarShift" | "menuButton" | "menuButtonHidden" | "drawerPaper" | "drawerPaperClose" | "appBarSpacer" | "container" | "paper" | "fixedHeight" | "fixedHeightT" | "titleI" | "titleBar" | "rootI" | "gridListI", string>
    T: string
    listAllPostsProfessores: LisPostsEntity[]
    listAllPostsAlunos: LisPostsEntity[]
    usuario_Id: string
};

export interface AdmPostsProps {
    usuario_Id: Usuario['usuario_Id']
    postUser: Posts[]
};

export interface ImageGridListProps {
    imagesProjetos?: ImgProjetoProps[]
    imagesPosts?: Posts[]
};

export type SwitchClassOfImages = {
    origin: 'posts' | 'projetos'
};

export interface DialogForDeleteUsuarioProps {
    name:Usuario['name']
    open:boolean
    nameEntity:Usuario['funcao']
    user:Usuario
    setOpen: Dispatch<SetStateAction<boolean>>
};