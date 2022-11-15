import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GuestLayout from '../components/Layout/GuestLayout'
import Home from '../components/Home'
import Articles from '../components/Articles'
import SearchLetter from '../components/SearchLetter'
import SearchCategory from '../components/SearchCategory'
import { getRoutePath } from './route-utils'
import SearchResults from '../components/SearchResults'
import ReadArticle from '../components/ReadArticle'
import Language from '../components/Language'
import CreateActivity from '../components/CreateActivity'
import Writer from '../components/Writer'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* Unauthenticated routes */}
          <Route
            path={getRoutePath('HOME')}
            element={
              <GuestLayout>
                <Home />
              </GuestLayout>
            }
          />
          <Route
            path={getRoutePath('ARTICLES')}
            element={
              <GuestLayout>
                <Articles />
              </GuestLayout>
            }
          />
          <Route path={getRoutePath('ARTICLE')} element={<ReadArticle />} />
          <Route
            path={getRoutePath('WRITER')}
            element={
              <GuestLayout>
                <Writer />
              </GuestLayout>
            }
          />
          <Route
            path={getRoutePath('SEARCH')}
            element={
              <GuestLayout>
                <SearchResults />
              </GuestLayout>
            }
          />
          <Route
            path={getRoutePath('SEARCH_LETTER')}
            element={
              <GuestLayout>
                <SearchLetter />
              </GuestLayout>
            }
          />
          <Route
            path={getRoutePath('SEARCH_CATEGORY')}
            element={
              <GuestLayout>
                <SearchCategory />
              </GuestLayout>
            }
          />
          <Route
            path={getRoutePath('CREATE_ACTIVITY')}
            element={<CreateActivity />}
          />
          <Route path={getRoutePath('LANGUAGE')} element={<Language />} />
          {/* Authenticated routes */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
