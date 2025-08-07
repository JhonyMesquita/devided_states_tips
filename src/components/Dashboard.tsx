import { memo } from 'react'
import { CountryList } from './CountryList'
import { CapitalList } from './CapitalList'
import { ToDoList } from './ToDoList'

interface DashboardProps {
  title?: string
  showHeader?: boolean
  layout?: 'grid' | 'flex'
}

export const Dashboard = memo(function Dashboard({
  title = 'Exemplos de Estado Derivado',
  showHeader = true,
  layout = 'flex'
}: DashboardProps) {
  return (
    <main className={`app-main ${layout === 'grid' ? 'grid-layout' : ''}`}>
      {showHeader && (
        <div className="dashboard-header">
          <h2>{title}</h2>
        </div>
      )}
      
      <div className="section">
        <h2>Lista de Países com Filtro</h2>
        <CountryList />
      </div>
      
      <div className="section">
        <h2>Lista de Capitais</h2>
        <CapitalList />
      </div>

      <div className="section">
        <h2>ToDo List</h2>
        <ToDoList />
      </div>
    </main>
  )
})
