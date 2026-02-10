# Exercícios Módulo 1

**Instruções:**

- Faça os exercícios NA ORDEM - eles aumentam em dificuldade
- Tente resolver SOZINHA antes de pedir ajuda
- Digite o código - NÃO copie e cole
- Teste seu código no browser
- Se travar por mais de 30 min, veja a dica ou pesquise

**Legenda de Dificuldade:** ⭐ Fácil | ⭐⭐ Médio | ⭐⭐⭐ Difícil

## **MÓDULO 1: Fundamentos (Componentes, JSX, Props)**

Foco: Criar componentes básicos, usar JSX, passar props

### **Exercício 1.1: Hello Component** ⭐

Crie um componente chamado Greeting que exibe 'Olá, Mundo!' em um h1.

**Requisitos:**

- Use function component
- Retorne JSX válido
- Export default

💡 *Dica: Um componente é uma função que retorna JSX*


### **Exercício 1.2: Welcome Message** ⭐

Crie um componente Welcome que recebe 'nome' via props e exibe 'Bem-vindo, [nome]!'

**Requisitos:**

- Receba props.nome
- Interpole o nome no JSX usando {}
- Use um h2 para o título

💡 *Dica: Use {props.nome} ou destructure {nome}*


### **Exercício 1.3: Profile Card** ⭐

Crie um componente ProfileCard que recebe nome, idade e profissão via props e exibe em um card.

**Requisitos:**

- Receba 3 props: nome, idade, profissao
- Exiba todas as informações organizadas
- Use uma div com className='card'

💡 *Dica: Destructure as props: function ProfileCard({ nome, idade, profissao })*


### **Exercício 1.4: Button Component** ⭐

Crie um componente Button que recebe 'texto' e 'cor' via props.

**Requisitos:**

- Props: texto (string), cor (string)
- Use a cor como className
- Exiba o texto dentro do botão

💡 *Dica: className pode receber variáveis: className={cor}*


### **Exercício 1.5: Avatar Component** ⭐⭐

Crie um componente Avatar que recebe url da imagem, nome e tamanho (small/medium/large).

**Requisitos:**

- Props: imageUrl, nome, tamanho
- Exiba img com alt={nome}
- Aplique className baseado no tamanho
- Exemplo: avatar-small, avatar-medium, avatar-large

💡 *Dica: Use template literals: className={`avatar-${tamanho}`}*


### **Exercício 1.6: Multiple Components** ⭐

Crie 3 componentes (Header, MainContent, Footer) e use todos no App.

**Requisitos:**

- Cada componente retorna JSX diferente
- Organize verticalmente no App
- Cada um com className próprio

💡 *Dica: Importe cada componente no App.jsx*

### **Exercício 1.7: Props com Números** ⭐

Crie um componente Price que recebe valor (number) e exibe formatado com R$.

**Requisitos:**

- Prop: valor (number)
- Formate: R$ XX,XX
- Use toFixed(2) e replace('.', ',')

💡 *Dica: const formatado = `R$ ${valor.toFixed(2).replace('.', ',')}`*

### **Exercício 1.8: Default Props** ⭐

Crie um componente Badge com prop 'texto'. Se não receber texto, exibe 'Novo'.

**Requisitos:**

- Prop: texto (opcional)
- Valor padrão: 'Novo'
- Use um span para exibir

💡 *Dica: Use default parameter: function Badge({ texto = 'Novo' })*

### **Exercício 1.9: Composição de Componentes** ⭐⭐

Crie um Card que recebe título, descrição e botão (todos via props).

**Requisitos:**

- Props: titulo, descricao, textoBotao
- Estruture: título em h3, descrição em p, botão em button
- Aplique classes CSS adequadas


### **Exercício 1.10: Status Badge** ⭐⭐

Crie um componente StatusBadge que recebe 'status' (active/inactive/pending) e exibe badge colorido.

**Requisitos:**

- Prop: status
- Cor verde para active, vermelho para inactive, amarelo para pending
- Use className dinâmico: badge-active, badge-inactive, badge-pending

💡 *Dica: className={`badge badge-${status}`}*


### **Exercício 1.11: Props de Objetos** ⭐⭐

Crie um componente UserCard que recebe um objeto 'user' com nome, email e avatar.

**Requisitos:**

- Prop: user (objeto com { nome, email, avatar })
- Acesse: user.nome, user.email, user.avatar
- Exiba avatar como img

💡 *Dica: Destructure: function UserCard({ user })*


### **Exercício 1.12: Multiple Children** ⭐

Crie um App que renderiza 5 Cards com dados diferentes.

**Requisitos:**

- Use o componente Card do exercício 1.9
- Passe props diferentes para cada Card
- Organize em grid ou lista

### **Exercício 1.13: Icon Button** ⭐⭐

Crie um IconButton que recebe ícone (emoji ou texto) e label.

**Requisitos:**

- Props: icon, label
- Exiba ícone e label lado a lado
- Exemplo: 🏠 Home, ⚙️ Settings


### **Exercício 1.14: Rating Stars** ⭐⭐

Crie um componente Rating que recebe número (1-5) e exibe estrelas ⭐.

**Requisitos:**

- Prop: rating (1 a 5)
- Exiba estrelas preenchidas (⭐) e vazias (☆)
- Exemplo: rating=3 → ⭐⭐⭐☆☆

💡 *Dica: Use repeat: '*⭐*'.repeat(rating) + '*☆*'.repeat(5-rating)*


### **Exercício 1.15: Alert Box** ⭐⭐

Crie um Alert que recebe tipo (success/error/warning/info) e mensagem.

**Requisitos:**

- Props: tipo, mensagem
- Aplique className baseado no tipo
- Adicione emoji: ✓ success, ✗ error, ⚠ warning, ℹ info


### **Exercício 1.16: Product Card** ⭐⭐

Crie um ProductCard completo com imagem, nome, preço, desconto e botão.

**Requisitos:**

- Props: imagem, nome, preco, desconto (opcional)
- Se tiver desconto, exiba preço riscado e novo preço
- Botão 'Adicionar ao Carrinho'

### **Exercício 1.17: Nested Components** ⭐⭐

Crie NavBar com componentes Logo e MenuItem dentro.

**Requisitos:**

- NavBar contém Logo e vários MenuItems
- Logo recebe texto
- MenuItem recebe label e link

### **Exercício 1.18: Props Validation** ⭐⭐⭐

Crie um componente Countdown que valida se recebe número positivo.

**Requisitos:**

- Prop: seconds (number)
- Se seconds <= 0, exiba 'Valor inválido'
- Se válido, exiba o número

💡 *Dica: Use if antes do return ou ternário no JSX*

### **Exercício 1.19: Complex Card** ⭐⭐⭐

Crie um BlogPostCard com título, autor, data, resumo, tags e imagem.

**Requisitos:**

- Props: titulo, autor, data, resumo, tags (array), imagem
- Exiba tags como badges
- Formate data: new Date(data).toLocaleDateString('pt-BR')

### **Exercício 1.20: Component Library** ⭐⭐⭐

Crie um ShowCase que exibe todos os componentes que você criou.

**Requisitos:**

- Importe todos os componentes anteriores
- Organize em seções
- Passe props de exemplo para cada um