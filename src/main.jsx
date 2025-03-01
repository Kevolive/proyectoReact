import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelControl from './Panelcontrol'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl/>
  </StrictMode>,
)
