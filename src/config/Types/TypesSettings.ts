import { Color } from "@material-ui/lab/Alert";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface SettingsContextProviderProps {
    children: ReactNode
};

export interface SettingsContextData {

};

export type CustomizedSnackbarsProps = {
    open:boolean
    messagem:string
    severity:Color
    setOpen:Dispatch<SetStateAction<boolean>>
};