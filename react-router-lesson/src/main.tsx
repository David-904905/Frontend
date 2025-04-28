import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Products from './components/products/Products.tsx'
import SingleProduct from './components/products/SingleProduct.tsx'
import AuthHome from './components/auth/AuthHome.tsx'
import Auth from './components/auth/Auth.tsx'
import Login from './components/auth/Login.tsx'
import Register from './components/auth/Register.tsx'
import NotFound from './components/partials/NotFound.tsx'
import About from './components/About.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='products' element={<Products />} >
        <Route path=':productId' index element={<SingleProduct />} />
      </Route>

      <Route path='auth' element={<Auth />}>
        {/* accessing the paths in this manner will be auth/login or auth/register, regular auth will give you the authhome component */}
        <Route index element={<AuthHome />}/>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='about' element={<About />}/>

      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter>,
)
