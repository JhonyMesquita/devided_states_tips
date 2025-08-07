import { memo } from 'react'
import { CountryList } from './CountryList'
import { CapitalList } from './CapitalList'
import { ToDoList } from './ToDoList'


export const Dashboard = memo(function Dashboard() {
  return (
    <main className="app-main">
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
