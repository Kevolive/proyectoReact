import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelControl from './Panelcontrol'
import './index.css'
import ListadoClientes from './ListadoClientes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl/>
    <ListadoClientes/>
  </StrictMode>,
)
