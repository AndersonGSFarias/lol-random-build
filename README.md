# 🎮 LoL Random Build

Aplicação web desenvolvida em **React** que gera uma build aleatória de **League of Legends**, incluindo campeão, rota, feitiços, runas e itens.

O projeto foi criado com foco em praticar conceitos fundamentais de front-end, como componentização, estados, props, renderização dinâmica, organização de arquivos, responsividade e manipulação de dados mockados.

---

## 🚧 Status do projeto

> Projeto em desenvolvimento.

Atualmente, a aplicação já gera composições aleatórias utilizando dados mockados. Futuramente, a ideia é substituir os mocks por dados reais consumidos através do **Data Dragon**, serviço oficial da Riot Games para dados estáticos do League of Legends.

---

## 📸 Preview

A aplicação possui layout responsivo com:

- versão mobile/tablet com cards em coluna;
- versão desktop a partir de `1280px`, usando layout em grid;
- componentes com tamanho controlado para evitar que o layout quebre em telas grandes.

---

## ✨ Funcionalidades atuais

- Geração aleatória de campeão
- Geração aleatória de rota independente do campeão
- Geração de 2 feitiços aleatórios
- Geração de runa primária com:
  - árvore aleatória
  - keystone aleatória
  - uma runa por linha

- Geração de runa secundária com:
  - árvore diferente da primária
  - duas runas de linhas diferentes

- Geração de 6 itens aleatórios
- Imagens temporárias antes da primeira geração
- Pré-carregamento de imagens para melhorar a performance
- Atalho no teclado: pressionar `Enter` também gera uma nova composição
- Layout mobile-first
- Layout desktop com breakpoint `xl` (`1280px`)

---

## 🛠️ Tecnologias utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS v4
- Lucide React
- Data Dragon CDN
- HTML5
- CSS3

---

## 📁 Estrutura do projeto

```bash
src/
├── assets/
│   ├── itens/
│   ├── no-return/
│   ├── rotas/
│   └── runas/
│
├── components/
│   ├── Footer/
│   ├── GenerateButton/
│   ├── HeroSection/
│   └── Result/
│       ├── ChampionCard.jsx
│       ├── ItemsCard.jsx
│       ├── RunesPrimary.jsx
│       ├── RunesSecondary.jsx
│       └── SpellsCard.jsx
│
├── data/
│   ├── championsMock.js
│   ├── itemsMock.js
│   ├── rolesMock.js
│   ├── runePagesMock.js
│   └── spellsMock.js
│
├── utils/
│   ├── preloadImages.js
│   ├── random.js
│   └── runes.js
│
├── App.jsx
├── main.jsx
└── main.css
```

---

## 🧠 Conceitos praticados

Durante o desenvolvimento do projeto, foram aplicados conceitos como:

- Componentização no React
- Uso de `useState`
- Uso de `useEffect`
- Uso de `useCallback`
- Props entre componentes
- Renderização condicional
- Renderização de listas com `.map()`
- Organização de mocks em arquivos separados
- Criação de funções utilitárias
- Pré-carregamento de imagens
- Layout responsivo com Tailwind CSS
- Separação entre lógica e interface

---

## 🎲 Como funciona a geração

Ao clicar no botão **Gerar Build** ou pressionar `Enter`, a aplicação executa uma função que seleciona aleatoriamente:

1. Um campeão
2. Uma rota
3. Dois feitiços
4. Uma árvore de runas primária
5. Uma árvore de runas secundária diferente da primária
6. Seis itens

A lógica das runas respeita a estrutura do League of Legends, evitando que duas runas da mesma linha sejam selecionadas ao mesmo tempo.

---

## ⚡ Performance

Para melhorar a experiência do usuário, foi implementado um sistema simples de pré-carregamento de imagens.

Assim, as imagens dos campeões, itens, feitiços, runas e rotas são carregadas assim que o app inicia, deixando a geração da build mais rápida e fluida.

---

## 📦 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lol-random-build.git

# Acesse a pasta do projeto
cd lol-random-build

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

---

## 📱 Rodar em rede local

Para testar no celular usando a mesma rede Wi-Fi:

```bash
npm run dev -- --host
```

Depois, acesse no navegador do celular o endereço exibido no terminal.

---

## 🚀 Funcionalidades futuras

- Consumir dados reais do Data Dragon
- Adicionar dark mode
- Permitir fixar campeão, item, spell ou runa
- Adicionar animações ao gerar uma nova build
- Criar histórico de builds geradas
- Adicionar botão de compartilhar build
- Melhorar a quantidade de campeões, itens, runas e spells disponíveis
- Deploy na Vercel

---

## 📌 Observações

Este projeto ainda utiliza mocks para facilitar o desenvolvimento da lógica e da interface. A estrutura foi organizada pensando em uma futura substituição dos mocks por dados reais vindos do Data Dragon.

---

## 👨‍💻 Autor

Desenvolvido por **Anderson G. S. Farias**
