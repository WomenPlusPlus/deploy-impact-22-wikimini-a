import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GuestLayout from '../components/Layout/GuestLayout'
import Home from '../components/Home'
import Articles from '../components/Articles'
import SearchLetter from '../components/SearchLetter'
import { getRoutePath } from './route-utils'

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
            path={getRoutePath('SEARCH_LETTER')}
            element={
              <GuestLayout>
                <SearchLetter />
              </GuestLayout>
            }
          />
          {/* Authenticated routes */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
