import React from 'react'
import ReactDOM from 'react-dom/client'

import { Link, Outlet } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Body from './src/components/Body'
import './index.css'
// import Simmer from './src/components/Simmer'
import RestaurantMenu from './src/components/RestaurantMenu'
import { ShimmerCircularImage } from 'react-shimmer-effects'
import Example from './src/components/Shimmer'
import RestaurantCollection from './src/components/RestaurantCollection'
import Cart from './src/components/restaurantsinformations/Cart'
import { Provider } from 'react-redux'
import { store } from './src/utils/strore'

const App1 = () => {
 return (
   <>
     {/* <Simmer/> */}
    <Provider store={store}>
      <Header />
      <Outlet />
       <Footer />
       </Provider> 
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App1 />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
        {
        path: '/cart',
          element: <Cart />
      },
      {
        path: '/restaurant/:restId',
        element: <RestaurantMenu />
      },
      {
        path: '/collection/:collectionId',
        element: <RestaurantCollection/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
