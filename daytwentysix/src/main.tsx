import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Form from './components/Form.tsx'
import FormAction from './components/FormAction.tsx'
import ActionState from './components/ActionState.tsx'


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Form />} />
        <Route path='/action' element={<FormAction />}/>
        <Route path='/actionst' element={<ActionState />} />

      </Route>
    </Routes>
    </BrowserRouter>,
)
