import { createRoot } from 'react-dom/client'
import './index.css'
import { JobContextProvider } from './context/JobContextProvider'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'

createRoot(document.getElementById('root')!).render(
    <JobContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </JobContextProvider>
)
