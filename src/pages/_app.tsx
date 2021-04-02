import { StaticRouter, Switch } from 'react-router-dom'
import { FeedContextProvider } from '../contexts/feedContext'
import { PageCurrentProvider } from '../contexts/pageCurrentContext'
import { ProfileContextProvider } from '../contexts/profileContext'
import { ProjetosContextProviderr } from '../contexts/projetosContext'

import '../styles/global.css'
import '../styles/Home.css'

export default function MyApp({ Component, pageProps }: any) {

  return (
    <StaticRouter>
      <Switch>
        <PageCurrentProvider>
          <ProjetosContextProviderr>
            <ProfileContextProvider>
            <FeedContextProvider>
              <Component {...pageProps} />
              </FeedContextProvider>
            </ProfileContextProvider>
          </ProjetosContextProviderr>
        </PageCurrentProvider>
      </Switch>
    </StaticRouter>


  )
}
