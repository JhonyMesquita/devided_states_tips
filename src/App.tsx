import { memo } from 'react'
import { Dashboard } from './components/Dashboard'

export const App = memo(function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Exemplos de Estado Derivado</h1>
      </header>
      
      <Dashboard 
        title="Dashboard de Componentes"
        showHeader={true}
        layout="flex"
      />
    </div>
  )
})