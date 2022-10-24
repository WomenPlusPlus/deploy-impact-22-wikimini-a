import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'

const SayHello = () => {
  return <div>Hello Wiki A</div>
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SayHello />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
