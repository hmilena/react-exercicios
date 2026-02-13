# **MÓDULO 0: Introdução**

[Veja a página com as demonstrações e respostas do React Exercicios](https://hmilena.github.io/react-exercicios/)

para instalar o projeto:
 
```bash
npm install
```

para rodar o projeto:

```bash
npm run dev
```

# Do OutSystems pra React

# **MÓDULO 1: Fundamentos**

## **O que é React?**

React é uma biblioteca JavaScript para construir interfaces de usuário baseadas em componentes. 

### **Conceitos OutSystems → React:**

- WebBlock→ Component
- Input Parameter → Props
- Local Variable → State
- Client Action → Event Handler
- Aggregate → useEffect + fetch

## **O primeiro componente**

Componentes são a base de tudo no React. Vamos criar o primeiro:

```jsx
// HelloWorld.jsx
function HelloWorld() {  
	return (    
		<div className="hello-world">      
			<h1>Olá, Mundo!</h1>      
			<p>Meu primeiro componente React!</p>    
		</div>  
	);
}

export default HelloWorld;
```

**DICA**: JSX parece HTML, mas é JavaScript. Como class é uma keyword reservada do JavaScript, usamos 'className'.

### **Anatomia de um componente:**

- `function NomeDoComponente()` - sempre com letra maiúscula
- `return (...)` - o que será renderizado na tela
- `export default` - para poder importar em outros arquivos

## **JSX - A Sintaxe do React**

JSX é como você escreve HTML dentro do JavaScript:

```jsx
// JavaScript
function Card() {  
	const titulo = "Meu Card";  
	const descricao = "Descrição do card";    
	
	return (    
		<div className="card">      
			<h2>{titulo}</h2>      
			<p>{descricao}</p>      
			<button>Clique aqui</button>    
		</div>  
	);
}
```

### **Regras importantes do JSX:**

- Use `{ }` para colocar JavaScript dentro do JSX
- `className` ao invés de class
- `onClick` ao invés de onclick (**camelCase**)
- Componentes devem retornar **UM** elemento pai (use <div> ou <>)
- Tags devem ser fechadas: `<img />` ao invés de <img>

**ATENÇÃO**: Nunca use if/for diretamente dentro do JSX. Use ternário ou map().

## **Props - Passando Dados**

Props são como *Input Parameters* do OutSystems - você passa dados de um componente pai para filho.

```jsx
function Button(props) {  
	return (    
		<button className={props.color}> {props.text} </button>  
	);
}

// Usando o Button
function App() {  
	return (    
		<div>      
			<Button text="Salvar" color="blue" />      
			<Button text="Cancelar" color="red" />    
		</div>  
	);
}
```

**Destructuring (forma moderna):**

```jsx
function Button({ text, color }) {  
	// Desestrutura props  
	return <button className={color}>{text}</button>;
}
```

**DICA**: Props são READ-ONLY. Nunca tente modificar props dentro do componente.

---

# **MÓDULO 2: State e Interatividade**

## useState - Gerenciando Estado

State é como Local Variables no OutSystems - guarda dados que podem mudar.

```jsx
import { useState } from 'react';

function Counter() {  
	// [variavel, funcaoParaAtualizar] = useState(valorInicial)  
	const [count, setCount] = useState(0); 
	   
	const incrementar = () => {    
		setCount(count + 1);  // Atualiza o state  
	};  
	  
	return (    
		<div>      
			<p>Contador: {count}</p>      
			<button onClick={incrementar}>+1</button>    
		</div>  
	);
}
```

### **Regras do useState:**

- SEMPRE use a função set para atualizar (`setCount`, `setNome`, etc)
- Nunca faça: count = count + 1 (isso não funciona!)
- State causa re-render - quando muda, o componente redesenha
- Pode guardar qualquer tipo de dado: string, number, array, object

# **Event Handlers**

Como responder a cliques, digitação, etc:

```jsx
function Form() {  
	const [nome, setNome] = useState('');
	    
	const handleChange = (event) => {    
		setNome(event.target.value);  // Pega o valor do input  
	};    
	
	const handleSubmit = () => {    
		alert(`Olá, ${nome}!`);  
	};    

	return (    
		<div>      
			<input type="text" value={nome} onChange={handleChange} />      
			<button onClick={handleSubmit}>Enviar</button>    
		</div>  
	);
}
```

### **Eventos comuns:**

- `onClick` - clique em botão/elemento
- `onChange` - mudança em input/select
- `onSubmit` - envio de formulário
- `onMouseEnter` / `onMouseLeave` - `hover`

# **Controlled Components (Inputs)**

No React, inputs devem ser 'controlados' - o React controla o valor:

```jsx
// JavaScript
function LoginForm() {  
	const [email, setEmail] = useState('');  
	const [senha, setSenha] = useState('');    
	
	return (    
		<form>      
			<input 
			type="email" 
			value={email} 
			onChange={(e) => setEmail(e.target.value)}        
			placeholder="Email"/>      
			<input         
			type="password"        
			value={senha}        
			onChange={(e) => setSenha(e.target.value)}        
			placeholder="Senha"/>      
			<button type="submit">Login</button>    
		</form> 
	);
}
```

**DICA**: Sempre vincule `value={state}` e `onChange={setState}`. Isso é o padrão React.

# **Renderização Condicional e Listas**

## **Renderização Condicional**

Mostrar ou esconder elementos baseado em condições:

```jsx
function Greeting({ isLoggedIn, userName }) {  
	// Operador ternário: condição ? seVerdadeiro : seFalso  
	return (    
		<div>      
			{isLoggedIn ? 
			(<h1>Bem-vindo, {userName}!</h1> ) : ( 
			 <h1>Por favor, faça login</h1>)}    
		</div>  
	);
}
	
// OU usando &&
function Message({ hasError, errorText }) {  
	return (    
		<div>      
			{hasError && <p className="error">{errorText}</p>}    
		</div>  
	);
}
```

### **Quando usar cada um:**

- condition ? A : B - quando tem duas opções
- condition && <Element> - quando só mostra se verdadeiro
- if/else fora do return - para lógica mais complexa

## **Renderizando Listas**

Use .map() para renderizar arrays:

```jsx
function ProductList() {  
	const produtos = [
	{ 
		id: 1, 
		nome: 'Notebook', 
		preco: 3000 
	}, { 
		id: 2, 
		nome: 'Mouse', 
		preco: 50 
	}, { 
		id: 3, 
		nome: 'Teclado', 
		preco: 150 
	}];  
	  
	return (    
		<div>      
			<h2>Produtos</h2>      
			{produtos.map((produto) => (        
				<div key={produto.id} className="produto">          
					<h3>{produto.nome}</h3>          
					<p>R$ {produto.preco}</p>        
				</div>      
			))}    
		</div>  
	);
}
```

**ATENÇÃO**: SEMPRE use key={} em listas! Precisa ser único. Use ID, nunca index.

**Por que a key é importante:**

React usa keys para identificar qual item mudou. Sem key, pode causar bugs e performance ruim.

# **MÓDULO 4: useEffect e Side Effects**

## **O que é useEffect?**

useEffect é como Aggregate no OutSystems - executa código quando o componente monta ou quando algo muda. Use para: buscar dados, timers, subscriptions.

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {  
	const [user, setUser] = useState(null);  
	const [loading, setLoading] = useState(true);    
	useEffect(() => {    
		// Código que executa quando componente monta    
		console.log('Componente montou!');        
		// Buscar dados    
		fetch(`/api/users/${userId}`)      
			.then(res => res.json())      
			.then(data => {        
				setUser(data);        
					setLoading(false);      
			});  
		}, []); 
		
		if (loading) return <p>Carregando...</p>;    
		
		return <div>{user.name}</div>;
}
```

### **Array de Dependências**

O segundo argumento do useEffect controla QUANDO ele executa:

```jsx
// 1. SEM array - executa em TODA re-render (cuidado!)
useEffect(() => {  
	console.log('Executou!');
});

// 2. Array VAZIO - executa só uma vez (ao montar)
useEffect(() => {  
	console.log('Executou só uma vez');
}, []);

// 3. Com DEPENDÊNCIAS - executa quando elas mudam
useEffect(() => {  
	console.log('userId mudou:', userId);  // Buscar novo usuário
}, [userId]);  // Re-executa se userId mudar
```

**DICA**: Coloque no array TUDO que você usa dentro do useEffect (props, state, etc).

### **Cleanup (Limpeza)**

Use return para limpar timers, subscriptions, etc:

```jsx
function Clock() {  
	const [time, setTime] = useState(new Date());    
	useEffect(() => {    
		const interval = setInterval(() => {      
			setTime(new Date());    
		}, 1000);        // Cleanup - executado quando componente desmonta    
		
		return () => {      
			clearInterval(interval); 
		};  
	}, []);    
	
	return <div>{time.toLocaleTimeString()}</div>;
}
```

# **MÓDULO 5: Custom Hooks**

## **O que são Custom Hooks?**

Custom hooks são funções que encapsulam lógica reutilizável. Pense como criar um Client Action reutilizável no OutSystems.

```jsx
// useFetch.js - Custom hook para buscar dados
import { useState, useEffect } from 'react';
function useFetch(url) {  
	const [data, setData] = useState(null);  
	const [loading, setLoading] = useState(true);  
	const [error, setError] = useState(null);    
	
	useEffect(() => {    
		fetch(url)      
			.then(res => res.json())      
			.then(data => {        
				setData(data);        
				setLoading(false);      
			})      
			.catch(err => {        
				setError(err.message);        
				setLoading(false);      
			});  
		}, [url]);    
		
		return { data, loading, error };
}

// Usando o custom hook
function UserList() {  
	const { data, loading, error } = useFetch('/api/users');    
	
	if (loading) return <p>Carregando...</p>;  
	
	if (error) return <p>Erro: {error}</p>;    
	
	return (    
		<ul>      
			{data.map(user => (        
				<li key={user.id}>{user.name}</li>      
			))}    
		</ul>  
	);
}
```

### **Regras para Custom Hooks:**

- Nome DEVE começar com 'use' (useAlgo)
- Pode usar outros hooks dentro (useState, useEffect, etc)
- Retorna o que você quiser (object, array, etc)

# **MÓDULO 6: Context API**

## **O que é Context?**

Context é como Site Properties no OutSystems - dados globais acessíveis por qualquer componente sem passar props manualmente.

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Criar Context
const ThemeContext = createContext();

// 2. Criar Provider
function ThemeProvider({ children }) {  
	const [theme, setTheme] = useState('light');    
	const toggleTheme = () => {    
		setTheme(theme === 'light' ? 'dark' : 'light');  };   
		 
		return (    
			<ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>  
		);
}

// 3. Usar em qualquer componente
function Button() {  
	const { theme, toggleTheme } = useContext(ThemeContext);    
	
	return (    
		<button       
			className={theme}      
			onClick={toggleTheme}>Tema: {theme}    
		</button>  
	);
}

// 4. Envolver app com Provider
function App() {  
	return (    
		<ThemeProvider>      
			<Button />    
		</ThemeProvider>  
	);
}
```

# **MÓDULO 7: Performance e Otimização**

## **React.memo**

Evita re-renders desnecessários de componentes:

```jsx
import { memo } from 'react';

// Componente filho pesado
const ExpensiveComponent = memo(function({ data }) {  
	console.log('Renderizou ExpensiveComponent');  
	// ... lógica complexa  
	return <div>{data}</div>;
});

```

## **useMemo**

Cacheia cálculos caros:

```jsx
// Agora só re-renderiza se 'data' mudar

import { useMemo } from 'react';

function ProductList({ products }) {  
	// Só recalcula se products mudar  
	const sortedProducts = useMemo(() => {    
		console.log('Calculando...');    
		return products.sort((a, b) => b.price - a.price);  
	}, [products]);    
	
	return (    
		<ul>      
			{sortedProducts.map(p => (        
				<li key={p.id}>{p.name}</li>
			))}    
		</ul>  
	);
}
```

## **useCallback**

Cacheia funções para evitar re-criar a cada render:

```jsx
import { useCallback } from 'react';

function Parent() {  
	const [count, setCount] = useState(0);    
	// Sem useCallback, função é recriada a cada render  
	const increment = useCallback(() => {    
		setCount(c => c + 1);  
	}, []); // Função nunca muda    
	return <Child onIncrement={increment} />;
}
```

# **MÓDULO 8: Formulários Avançados**

## **Formulários com Múltiplos Campos**

```jsx
function Form() {  
	const [formData, setFormData] = useState({ nome: '', email: '', idade: '', });    
	const handleChange = (e) => {    
		const { name, value } = e.target;    
		setFormData(prev => ({...prev, [name]: value }));  
	};    
	const handleSubmit = (e) => {    
		e.preventDefault();    
		console.log(formData);  
	};    
	
	return (    
		<form onSubmit={handleSubmit}>      
			<input name="nome" value={formData.nome} onChange={handleChange} />      
			<input name="email" value={formData.email} onChange={handleChange} />      
			<button type="submit">Enviar</button>    
		</form>  
	);
}
```

## **Validação Simples**

```jsx
function LoginForm() {  
	const [email, setEmail] = useState('');  
	const [errors, setErrors] = useState({});    
	const validate = () => {    
		const newErrors = {}; 
		       
		if (!email) {      
			newErrors.email = 'Email obrigatório';    
		} else if (!/\S+@\S+\.\S+/.test(email)) {      
			newErrors.email = 'Email inválido';    
		}  
		      
		setErrors(newErrors);    
		
		return Object.keys(newErrors).length === 0;  
		
	};    
	
	const handleSubmit = (e) => {    
		e.preventDefault();    
		
		if (validate()) {      
			// Enviar formulário    
		}  
	};    
	
	return (    
		<form onSubmit={handleSubmit}>      
			<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />      
			{errors.email && <span>{errors.email}</span>}      
			<button type="submit">Login</button>    
		</form>  
	);
}
```

## **PADRÕES COMUNS NO REACT**

**Padrão 1: Loading States**

```jsx
function UserProfile() {  
	const [user, setUser] = useState(null);  
	const [loading, setLoading] = useState(true);  
	const [error, setError] = useState(null);    
	
	useEffect(() => {    
		fetch('/api/user')      
			.then(res => res.json())      
			.then(data => {        
				setUser(data);        
				setLoading(false);      
			})      
			.catch(err => {        
				setError(err.message);        
				setLoading(false);      
			});  
		}, []);    
		
		if (loading) return <Spinner />;  
		
		if (error) return <Error message={error} />;  
		
		if (!user) return <NotFound />;    
		
		return <div>{user.name}</div>;
}
```

## **Padrão 2: Composition (Composição)**

```jsx
// Container reutilizável
function Card({ children, title }) {  
	return (    
		<div className="card">      
			<h2>{title}</h2>      
			<div className="card-body">{children}</div>    
		</div>  
	);
}

// Usar com diferentes conteúdos
<Card title="Perfil">  
	<p>Nome: João</p>
</Card>

<Card title="Estatísticas">  
	<Stats data={data} />
</Card>
```

## **Padrão 3: Lifting State Up**

Quando dois componentes precisam do mesmo state, mova para o pai comum:

```jsx
function Parent() {  
	const [selected, setSelected] = useState(null); 
	   
	return (    
		<div>      
			<Sidebar onSelect={setSelected} />      
			<Content selected={selected} />    
		</div>  
	);
}
```

**Próximos Passos no Seu Aprendizado**

**Depois de dominar este guia:**

- TypeScript com React (type safety)
- React Router (navegação entre páginas)
- Redux ou Zustand (state management complexo)
- React Query (gerenciar server state)
- Testing Library (testes)
- Next.js (framework React com SSR)

**Acesse as pastas dos módulos para praticar com exercícios!** 