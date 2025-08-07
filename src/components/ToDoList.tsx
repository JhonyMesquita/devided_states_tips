import { useState, useEffect, useMemo, useCallback, memo } from 'react'

interface Country {
  name: {
    common: string
  }
}

interface TodoItem {
  id: string
  text: string
  completed: boolean
}

export const ToDoList = memo(function ToDoList() {
  const [countries, setCountries] = useState<Country[]>([])
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        // Inicializar com 2 países
        const initialTodos: TodoItem[] = [
          {
            id: '1',
            text: 'Brasil',
            completed: false
          },
          {
            id: '2',
            text: 'França',
            completed: false
          }
        ]
        setTodos(initialTodos)
      })
      .catch(err => console.log(err))
  }, [])

  // Filtrar países para o dropdown
  const filteredCountries = useMemo(() => 
    countries.filter((country) => 
      country.name.common.toLowerCase().includes(search.toLowerCase())
    ), [countries, search]
  )

  // Adicionar novo item à lista
  const addTodo = useCallback((countryName: string) => {
    setTodos(prev => {
      if (countryName.trim() && !prev.some(todo => todo.text === countryName)) {
        const newTodo: TodoItem = {
          id: Date.now().toString(),
          text: countryName,
          completed: false
        }
        return [...prev, newTodo]
      }
      return prev
    })
    setSearch('')
  }, [])

  // Alternar status do item
  const toggleTodo = useCallback((id: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  // Remover item da lista
  const removeTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  console.log('Renderizou - ToDoList')

  return (
    <div className="country-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar país para adicionar..."
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Dropdown de países */}
      {search && filteredCountries.length > 0 && (
        <div className="countries-dropdown">
          <ul className="countries-list max-h-48">
            {filteredCountries.slice(0, 10).map((country) => (
              <li 
                key={country.name.common} 
                className="country-item cursor-pointer hover:bg-dark-500"
                onClick={() => addTodo(country.name.common)}
              >
                <span className="country-name">{country.name.common}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Lista de ToDos */}
      <div className="todos-section">
        <h3 className="text-primary text-lg font-bold mb-4">Minha Lista de Tarefas</h3>
        
        {todos.length === 0 ? (
          <div className="text-center text-dark-800 py-8">
            Nenhum item adicionado ainda. Busque por um país acima para adicionar!
          </div>
        ) : (
          <ul className="todos-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <div className="todo-content">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="todo-checkbox"
                  />
                  <span className={`todo-text ${todo.completed ? 'line-through text-dark-800' : 'text-white'}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="remove-btn"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
})
