import { createContext, useEffect, useState } from 'react'
import Crypto from 'crypto'
import api from '../config/api'
import { FeedContextData, FeedContextProviderProps, LisPostsEntity, Posts } from '../config/Types/TypesFeed'
import { UsuarioLogadoProps } from '../config/Types/TypesSystemProfile'

export const FeedContext = createContext({} as FeedContextData);
export function FeedContextProvider({ children }: FeedContextProviderProps) {
  const [authorization, setAuthorization] = useState<UsuarioLogadoProps['usuario_Id']>();
  const [posts, setPosts] = useState<Posts[]>([]);
  const [listAllPostsAlunos, setListAllPostsAlunos] = useState<LisPostsEntity[]>([]);
  const [listAllPostsProfessores, setListAllPostsProfessores] = useState<LisPostsEntity[]>([]);

  const [refresh, setRefresh] = useState<string>('');

  async function handleNewPost(data: any, Author: string) {
    try {
      await api.post(`post`, data, {
        headers: { Authorization: Author, }
      });
      setRefresh(Crypto.randomBytes(1).toString('hex'));
    } catch (error) {
      return error;
    };
  };

  async function DeletePost(id: Posts['post_Id']) {
    try {
      await api.delete(`post/${id}`,
        {
          headers: {
            Authorization: authorization,
          }
        });
      setRefresh(Crypto.randomBytes(2).toString('hex'));
    } catch (error) {
      return error;
    };
  };

  useEffect(() => {
    api
      .get('post')
      .then(res => {
      setPosts(res.data);
    }).catch(res=>console.log(''))

  }, [refresh]);

  useEffect(() => {
    api.get('views/post/allposts/Alunos').then(res => {
      setListAllPostsAlunos(res.data);
    }).catch(res=>console.log(''));
  }, [refresh]);

  useEffect(() => {
    api.get('views/post/allposts/Professores').then(res => {
      setListAllPostsProfessores(res.data);
    }).catch(res=>console.log(''));
  }, [refresh]);

  return (
    <FeedContext.Provider value={
      {
        posts,
        listAllPostsAlunos,
        listAllPostsProfessores,
        setPosts,
        DeletePost,
        handleNewPost,
        setAuthorization,
        refresh
      }
    }>
      {children}
    </FeedContext.Provider>
  );
};