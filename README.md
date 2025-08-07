# Exemplos de Estado Derivado - React + TypeScript + Vite

Este projeto demonstra conceitos avançados de React, incluindo **estado derivado**, **memoização**, **performance otimizada** e **componentes reutilizáveis**.

## 🎯 **Funcionalidades Principais**

### 📊 **Componentes Implementados**

1. **CountryList** - Lista de países com filtro em tempo real
2. **CapitalList** - Lista de capitais com filtro por nome
3. **ToDoList** - Lista de tarefas com países da API
4. **Dashboard** - Componente template que gerencia os demais

### 🚀 **Características Técnicas**

- ✅ **Estado Derivado**: Cálculos otimizados com `useMemo`
- ✅ **Performance**: Componentes memoizados com `React.memo`
- ✅ **Callbacks**: Funções otimizadas com `useCallback`
- ✅ **TypeScript**: Tipagem completa e segura
- ✅ **Tailwind CSS**: Estilos modernos e responsivos
- ✅ **API Integration**: Dados reais de países via REST API

## 🏗️ **Estrutura do Projeto**

```
src/
├── components/
│   ├── CountryList.tsx      # Lista de países com filtro
│   ├── CapitalList.tsx      # Lista de capitais
│   ├── ToDoList.tsx         # Lista de tarefas
│   └── Dashboard.tsx        # Componente template
├── App.tsx                  # Componente principal
├── main.tsx                 # Ponto de entrada
└── index.css               # Estilos globais
```

## 🎨 **Componentes Detalhados**

### **CountryList**
- 🔍 **Filtro em tempo real** por nome do país
- 📊 **Dados da API** restcountries.com
- 🎯 **Performance otimizada** com memoização
- 💾 **Estado interno** gerenciado

### **CapitalList**
- 🌍 **Capitais únicas** extraídas de todos os países
- 🔍 **Filtro inteligente** por nome da capital
- 📈 **Estatísticas** em tempo real
- 🎨 **Interface responsiva**

### **ToDoList**
- ✅ **Adicionar países** da lista como tarefas
- 🎯 **Marcar/desmarcar** itens com checkbox
- 🗑️ **Remover itens** da lista
- 📝 **Estado persistente** durante a sessão

### **Dashboard**
- 🎛️ **Componente template** reutilizável
- 📱 **Layout responsivo** (flex/grid)
- 🎨 **Props configuráveis**
- 🔧 **Fácil manutenção**

## 🛠️ **Tecnologias Utilizadas**

- **React 19.1.0** - Biblioteca principal
- **TypeScript 5.8.3** - Tipagem estática
- **Vite 7.0.4** - Build tool e dev server
- **Tailwind CSS 3.4.17** - Framework CSS
- **PostCSS 8.5.6** - Processamento CSS
- **ESLint** - Linting e formatação

## 🚀 **Como Executar**

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone <repository-url>
cd derived_states

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### **Scripts Disponíveis**
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Linting do código
```

## 🎯 **Conceitos Demonstrados**

### **1. Estado Derivado**
```typescript
// Exemplo: Filtragem otimizada
const filteredCountries = useMemo(() => 
  countries.filter((country) => 
    country.name.common.toLowerCase().includes(search.toLowerCase())
  ), [countries, search]
)
```

### **2. Memoização de Componentes**
```typescript
// Exemplo: Componente memoizado
export const CountryList = memo(function CountryList() {
  // Só re-renderiza quando necessário
})
```

### **3. Callbacks Otimizados**
```typescript
// Exemplo: Callback memoizado
const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value)
}, [])
```

### **4. Performance Otimizada**
- ✅ **Re-renderizações inteligentes**
- ✅ **Cálculos memoizados**
- ✅ **Callbacks otimizados**
- ✅ **Componentes isolados**

## 🎨 **Design System**

### **Cores**
- **Primary**: `#646cff` (Azul)
- **Primary Hover**: `#535bf2` (Azul escuro)
- **Dark 100-800**: Tons de cinza escuro
- **Background**: Gradiente escuro

### **Layout**
- **Responsivo**: Flexbox e Grid
- **Tema**: Dark mode por padrão
- **Componentes**: Cards com sombras
- **Interações**: Hover effects e transições

## 🔧 **Otimizações Implementadas**

### **Performance**
1. **React.memo** em todos os componentes
2. **useMemo** para cálculos pesados
3. **useCallback** para event handlers
4. **Estado derivado** otimizado

### **UX/UI**
1. **Interface intuitiva** e responsiva
2. **Feedback visual** em tempo real
3. **Animações suaves** e transições
4. **Acessibilidade** básica

## 📊 **Métricas de Performance**

- ⚡ **Re-renderizações**: Minimizadas com memo
- 🎯 **Tempo de resposta**: < 100ms para filtros
- 📱 **Responsividade**: Mobile-first design
- 🔄 **HMR**: Hot Module Replacement ativo

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 **Agradecimentos**

- **React Team** - Biblioteca incrível
- **Vite Team** - Build tool rápida
- **Tailwind CSS** - Framework CSS moderno
- **REST Countries API** - Dados de países

---

**Desenvolvido com ❤️ usando React + TypeScript + Vite**
