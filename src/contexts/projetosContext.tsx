import api from '../config/api';
import Crypto from 'crypto'
import { createContext, useContext, useEffect, useState } from 'react'
import { ImgProjetoPropsWithoutProjetoProps, ProjetosContextData, ProjetosContextProvider } from '../config/Types/TypesProjetos'
import { ImgProjetoProps, ListProjetosProps, Projeto } from '../config/Types/TypesProjetos'
import { ProfileContext } from './profileContext';

export const ProjetosContext = createContext({} as ProjetosContextData)
export function ProjetosContextProviderr({ children }: ProjetosContextProvider) {
  const { usuario_Id } = useContext(ProfileContext)

  //Estados para listar os projetos do Homepage
  const [projetos, setProjetos] = useState<ListProjetosProps[]>([])//Listar Projetos e Imagem padrão
  const [imagesProjetos, setImagesProjetos] = useState<ImgProjetoProps[]>([])//Todas imagens de todos os projetos
  const [projeto, setProjeto] = useState<Projeto[]>([])//Listar Projeto Específico
  const [projetctSelectedToViewImages, setProjetctSelectedToViewImages] = useState<Projeto['projeto_id']>('s')//Selecionar um Projeto Específico para ver suas imagens
  const [imgProjeto, setImgProjeto] = useState<ImgProjetoPropsWithoutProjetoProps[]>([])//Imagens de um projeto Específico
  const [imagesProjetosToCarrousel, setImagesProjetosToCarrousel] = useState([])

  //Estados para gerenciar os projetos no Dashboard
  const [allProjects, setAllProjects] = useState<Projeto[]>([])//Listar todos os projetos

  const [projetoIdToDelete, setProjetoIdToDelete] = useState<Projeto['usuario_Id']>('')//Selecionar o projeto para deletar
  const [authorization, setAuthorization] = useState<Projeto['usuario_Id']>('')//Autorização para ações priveligiadas 

  //Estado de auxílio para atualizar os dados
  const [refreshData, setRefreshData] = useState('')

  async function handleDeleteProjeto(id: string) {

    try {
      await api.delete(`Projetos/${projetoIdToDelete}`,
        {
          headers: {
            Authorization: authorization
          }
        })
      setRefreshData(Crypto.randomBytes(2).toString('hex'))
      console.log(`Projeto Deletado`)

    } catch (error) {
      console.log(error)
    }
  }
  async function handleNewProjeto(data: any, Author: string) {
    try {
      await api.post(`Projetos`, data, {
        headers: { Authorization: Author, }
      })
      setRefreshData(Crypto.randomBytes(1).toString('hex'))
      console.log(`Projeto Criado`)

    } catch (error) {
      console.log(error)
    }
  }

  async function HandleProjetoToCarrousel(id: Projeto['projeto_id'], newValue: Projeto['carrousel']) {
    try {
      const response = await api.put(`projetos/carrousel/${id}`, {
        carrousel: newValue,
      })

      setRefreshData(Crypto.randomBytes(1).toString('hex'))
      return response.status;
    } catch (error) {
      return error;
    }
  }

  async function HandleSetImageDefault(id:string, newValue:boolean){
    try {
      const response = await api.put(`projetos/images/default/${id}`,{
        isDefault:newValue,
      });
      setRefreshData(Crypto.randomBytes(1).toString('hex'))
      return response.data;
    } catch (error) {
      return error;
    }
  }

  //API Calls - Consult Documentation
  useEffect(() => {
    api.get('projetos')
      .then(res => {
        setAllProjects(res.data);
      }).catch(res=>console.log(''))
  }, [refreshData]);

  useEffect(() => {
    api.get('projetos/images')
      .then(res => {
        setImagesProjetos(res.data);
      }).catch(res=>console.log('projetos'))
  }, [refreshData]);

  useEffect(() => {
    api.get(`views/projeto/imagedefault`)
      .then(res => {
        setProjetos(res.data);
      }).catch(res=>console.log('views/projeto/imagedefault'))
  }, []);

  useEffect(() => {
    api.post(`projetos/${projetctSelectedToViewImages}`)
      .then(res => {
        setProjeto(res.data);
      }).catch(res=>console.log('projetos/${projetctSelectedToViewImages}'))
  }, [projetctSelectedToViewImages]);

  useEffect(() => {
    api.get('views/projeto/carrousel')
      .then(res => {
        setImagesProjetosToCarrousel(res.data);
      }).catch(res=>console.log('views/projeto/carrousel'))
  }, []);

  return (
    <ProjetosContext.Provider value={
      {
        allProjects,
        imagesProjetos,
        imagesProjetosToCarrousel,
        projetos,
        projeto,

        authorization,

        setProjetoIdToDelete,
        handleDeleteProjeto,

        handleNewProjeto,
        setAuthorization,

        imgProjeto,
        projetctSelectedToViewImages,
        setProjetctSelectedToViewImages,
        setImgProjeto,
        

        HandleProjetoToCarrousel,
        HandleSetImageDefault
      }
    }>
      {children}
    </ProjetosContext.Provider>
  );
}