import { Dispatch, ReactNode, SetStateAction } from "react";
import { Usuario, UsuarioLogadoProps } from "./TypesSystemProfile";

export type handleSelectSubPageProfileProps = 'home' | 'posts' | 'usuarios' | 'projetos' | 'settings' 


export type Pages = 'feed' | 'projetosDetails' | 'home' | 'contato' | 'download';


export type BarpagesProps = {
    children: string
    to?: string
    block?: boolean
    name: Pages
    onClick?: () => void
};
export interface currentPageContextData{
    currentSubPageProfile:handleSelectSubPageProfileProps,
    currentPage:string,
    allUsuarios:Usuario[]
    setCurrentPage:Dispatch<SetStateAction<string>>
    setCurrentSubPageProfile:Dispatch<SetStateAction<handleSelectSubPageProfileProps>>
};

export interface SubPagesListProps {
    classes: Record<"title" | "root" | "content" | "toolbar" | "toolbarIcon" | "appBar" | "appBarShift" | "menuButton" | "menuButtonHidden" | "drawerPaper" | "drawerPaperClose" | "appBarSpacer" | "container" | "paper" | "fixedHeight" | "titleI" | "titleBar" | "rootI" | "gridListI", string>, 
    open: boolean
    entity:UsuarioLogadoProps['funcao']
    handleDrawerClose: () => void
};

export interface PageCurrentProviderProps {
    children: ReactNode;
};

export type SubPageProfileSelect={
    subpage: handleSelectSubPageProfileProps 
};