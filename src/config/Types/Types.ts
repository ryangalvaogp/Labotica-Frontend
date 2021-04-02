import { Pages } from "./TypesPageCurrent";
import { UsuarioLogadoProps } from "./TypesSystemProfile";

export interface AppHeaderProps{
    classes: Record<"root" | "content" | "toolbar" | "toolbarIcon" | "appBar" | "appBarShift" | "menuButton" | "menuButtonHidden" | "title" | "drawerPaper" | "drawerPaperClose" | "appBarSpacer" | "container" | "paper" | "fixedHeight" | "titleI" | "titleBar" | "rootI" | "gridListI", string>
    open: boolean,
    author:string
    entity: UsuarioLogadoProps['funcao']
    name: string, 
    claseTool: Record<"tooltip" | "arrow", string> 
    handleDrawerOpen: () => void, 
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
};
