import { createContext, useEffect, useState } from 'react'
import api from '../config/api'
import { PageCurrentProviderProps, currentPageContextData, handleSelectSubPageProfileProps, Pages } from '../config/Types/TypesPageCurrent'
import { Usuario } from '../config/Types/TypesSystemProfile'

export const PageCurrentContext = createContext({} as currentPageContextData)
export function PageCurrentProvider({ children }: PageCurrentProviderProps) {
    const [currentPage, setCurrentPage] = useState <Pages>('home');
    const [currentSubPageProfile, setCurrentSubPageProfile] = useState<handleSelectSubPageProfileProps>('home');
    const [allUsuarios, setAllUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        api.get('usuarios')
            .then(res => {
                setAllUsuarios(res.data);
            });
    }, []);

    return (
        <PageCurrentContext.Provider value={
            {
                currentSubPageProfile,
                currentPage,
                allUsuarios,
                setCurrentPage,
                setCurrentSubPageProfile
            }
        }>
            {children}
        </PageCurrentContext.Provider>
    );
};