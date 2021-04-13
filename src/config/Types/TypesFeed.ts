import { Dispatch, ReactNode, SetStateAction } from "react"
import { Usuario } from "./TypesSystemProfile"

export interface FeedContextData {
    posts: Posts[]
    refresh: string
    listAllPostsAlunos: LisPostsEntity[]
    listAllPostsProfessores: LisPostsEntity[]
    handleNewPost(data: any, Author: string): Promise<void>
    setPosts: Dispatch<SetStateAction<Posts[]>>
    DeletePost(id: Posts['post_Id']): Promise<any>
    setAuthorization: Dispatch<SetStateAction<string>>

};

export type LisPostsEntity = {
    post_Id: string
    titulo: string
    description: string
    place: string
    usuario: {
        name: string
        funcao: string
        email: string
    },
    image: string
    data: string
    url: string
};

export interface FeedContextProviderProps {
    children: ReactNode
};

export type Posts = {
    post_Id?: string
    titulo: string
    description: string
    place: string
    Usuario?: {
        name: string
        funcao: string
        email: string
    },
    image?: string
    data?: string
    authorization?: string
    url: string
};

export interface NewPostDialogProps {
    Authorization: Usuario['usuario_Id']
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
};

export interface ShareProps {
    open:boolean    
    idPost:string 
    onClose:() => void
};