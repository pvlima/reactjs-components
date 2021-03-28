import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { MovieContextProvider } from './hooks/useMovies';

export function App() {

  return (
    <MovieContextProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <SideBar />

        <Content />
        
      </div>
    </MovieContextProvider>
  )
}