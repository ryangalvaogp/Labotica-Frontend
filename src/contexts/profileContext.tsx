import api from '../config/api'
import { PageCurrentContext } from './pageCurrentContext'
import Cookies from 'js-cookie'
import Crypto from 'crypto'
import { createContext, useContext, useEffect, useState } from 'react'
import { ProfileContextData, ProfileProvider, Usuario } from '../config/Types/TypesSystemProfile'
import { handleCadastrarUsuarioProps, UsuarioLogadoProps } from '../config/Types/TypesSystemProfile'

export const ProfileContext = createContext({} as ProfileContextData)
export function ProfileContextProvider({ children }: ProfileProvider) {
    const { currentSubPageProfile } = useContext(PageCurrentContext)

    //Login data
    const [email, setEmail] = useState('Ryan.a@gmail.com')
    const [password, setPassword] = useState('13696312')
    const [isLogged, setIsLogged] = useState(false)

    //Data acquired after logging in
    const [name, setName] = useState<UsuarioLogadoProps['name']>('')
    const [usuario_Id, setUsuario_Id] = useState<UsuarioLogadoProps['usuario_Id']>('')
    const [funcao, setFuncao] = useState<UsuarioLogadoProps['funcao']>('')
    const [matricula, setMatricula] = useState <UsuarioLogadoProps['matricula']> (0)
    

    //Data acquired to subpage Studients
    const [allAlunos, setAllAlunos] = useState<Usuario[]>([])
    const [allProfessores, setAllProfessores] = useState<Usuario[]>([])

    const [usuarioIdToDelete, setUsuarioIdToDelete] = useState<Usuario['usuario_Id']>('')

    //Data to add new user
    const [funcaoNewUser, setFuncaoNewUser] = useState<Usuario['funcao']>('')
    const [newUsuarioStatus, setNewUsuarioStatus] = useState('')

    async function handleDeleteUsuario() {
        try {
            await api.delete(`usuarios/${usuarioIdToDelete}`,
                {
                    headers: {
                        Authorization: usuario_Id,
                    }
                })
            setUsuarioIdToDelete('');

        } catch (error) {
            console.log(error);
        }
    }
    async function handleCadastrarUsuario(
        {
            name,
            email,
            password,
            matricula
        }: handleCadastrarUsuarioProps) {
        try {
            await api.post('usuarios', {
                name,
                email,
                funcao: funcaoNewUser,
                password,
                matricula
            }).then(
                res => {
                    setNewUsuarioStatus(Crypto.randomBytes(2).toString('base64'));
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    //API Calls - Consult Documentation
    useEffect(() => {
        api.get('views/user/allalunos')
            .then(res => {
                setAllAlunos(res.data);
            });
    }, [
        currentSubPageProfile,
        usuarioIdToDelete,
        newUsuarioStatus,
    ]);

    useEffect(() => {
        api.get('views/user/allprofessores')
            .then(res => {
                setAllProfessores(res.data);
            });
    }, [
        currentSubPageProfile,
        usuarioIdToDelete,
        newUsuarioStatus,
    ]);

    //Cookies
    useEffect(() => {
        Cookies.set('isLogged', String(isLogged));
        Cookies.set('name', name, { secure: true });
        Cookies.set('usuario_Id', usuario_Id);
        Cookies.set('funcao', funcao);
    }, [isLogged, name, usuario_Id, funcao]);

    async function handeLogin(e: any) {
        e.preventDefault()
        try {
            const response = await api.post(
                'session/login', {
                email,
                password
            });
            setName(response.data.name);
            setUsuario_Id(response.data.usuario_Id);
            setFuncao(response.data.funcao);
            setIsLogged(true);
            setMatricula(Number(response.data.matricula))
        } catch (error) {
            alert("Email | Password não conferem");
        }
    }

    async function handleLogout(e: any) {
        e.preventDefault();
        setIsLogged(false);
        setName('');
        setUsuario_Id('');
        setFuncao('');
        setMatricula(0)
    }

    return (
        <ProfileContext.Provider value={
            {
                email,
                password,

                name,
                usuario_Id,
                funcao,
                matricula,
                isLogged,

                allAlunos,
                allProfessores,

                funcaoNewUser,

                handeLogin,
                handleLogout,

                setEmail,
                setPassword,
                setName,
                setUsuario_Id,
                setFuncao,
                setIsLogged,

                handleDeleteUsuario,

                setUsuarioIdToDelete,

                setFuncaoNewUser,
                handleCadastrarUsuario,
            }
        }>
            {children}
        </ProfileContext.Provider>
    )
}