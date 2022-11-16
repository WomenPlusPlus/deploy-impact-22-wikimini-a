import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GuestLayout from '../components/Layout/GuestLayout'
import Home from '../components/Home'
import Articles from '../components/Articles'
import SearchLetter from '../components/SearchLetter'
import SearchLetterDictionary from '../components/SearchLetterDictionary'
import SearchCategory from '../components/SearchCategory'
import { getRoutePath } from './route-utils'
import SearchResults from '../components/SearchResults'
import ReadArticle from '../components/ReadArticle'
import Word from '../components/Word'
import Language from '../components/Language'
import CreateActivity from '../components/CreateActivity'
import Writer from '../components/Writer'
import Dictionary from '../components/Dictionary'
import Congratulations from '../components/Congratulations'
import Activity from '../components/Activity'

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
          <Route
            path={getRoutePath('DICTIONARY')}
            element={
              <GuestLayout>
                <Dictionary />
              </GuestLayout>
            }
          />
          <Route path={getRoutePath('ARTICLE')} element={<ReadArticle />} />
          <Route path={getRoutePath('WORD')} element={<Word />} />
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
            path={getRoutePath('SEARCH_LETTER_DICTIONARY')}
            element={
              <GuestLayout>
                <SearchLetterDictionary />
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
          <Route
            path={getRoutePath('CONGRATULATIONS')}
            element={<Congratulations />}
          />
          <Route path={getRoutePath('LANGUAGE')} element={<Language />} />
          <Route path={getRoutePath('ACTIVITY')} element={<Activity />} />
          {/* Authenticated routes */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
