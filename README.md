# LoL Random Build

Aplicação web desenvolvida em **React** que gera uma build aleatória de **League of Legends**, incluindo campeão, rota, feitiços de invocador, runas e itens.

O projeto foi desenvolvido com foco em praticar conceitos de front-end moderno, como componentização, consumo de dados externos, manipulação de estado, responsividade, organização de código e otimização de performance.

---

## Status do projeto

Projeto em fase final de desenvolvimento.

A aplicação já consome dados reais do **Data Dragon**, serviço oficial da Riot Games para dados estáticos do League of Legends, e gera builds aleatórias a partir desses dados.

---

## Funcionalidades

- Geração aleatória de campeão
- Geração aleatória de rota
- Geração de 2 feitiços de invocador
- Geração de runa primária
- Geração de runa secundária diferente da primária
- Geração de 6 itens aleatórios
- Consumo de dados reais do Data Dragon
- Filtro de itens disponíveis em Summoner’s Rift
- Filtro de itens finais/lendários
- Filtro de spells disponíveis no modo clássico
- Pré-carregamento de imagens para melhorar a performance
- Atalho no teclado: pressionar `Enter` gera uma nova build
- Layout responsivo mobile-first
- Layout desktop a partir de `1280px`
- Tratamento visual para textos longos com reticências
- Fallback visual para estados iniciais antes da geração

---

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS v4
- Lucide React
- Data Dragon
- HTML5
- CSS3

---

## Conceitos praticados

Durante o desenvolvimento do projeto, foram trabalhados conceitos como:

- Componentização no React
- Uso de `useState`
- Uso de `useEffect`
- Uso de `useCallback`
- Props entre componentes
- Renderização condicional
- Renderização de listas com `.map()`
- Consumo de API/dados externos
- Normalização de dados
- Organização de funções utilitárias
- Pré-carregamento de imagens
- Responsividade com Tailwind CSS
- Acessibilidade básica com `alt`, `title` e botão acessível
- Separação entre lógica de negócio e interface

---

## Como funciona

Ao clicar no botão **Gerar composição** ou pressionar `Enter`, a aplicação sorteia:

1. Um campeão
2. Uma rota
3. Dois feitiços de invocador
4. Uma árvore de runa primária
5. Uma árvore de runa secundária diferente da primária
6. Seis itens finais disponíveis em Summoner’s Rift

Os dados são carregados dinamicamente a partir do Data Dragon. Depois disso, eles são normalizados para um formato mais simples, facilitando o uso dentro dos componentes da aplicação.

---

## Estrutura do projeto

```bash
src/
├── assets/
│   ├── favicon/
│   ├── feiticos/
│   ├── itens/
│   ├── no-return/
│   └── rotas/
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
│   └── rolesMock.js
│
├── services/
│   ├── dataDragonNormalizer.js
│   └── dataDragonService.js
│
├── utils/
│   ├── preloadImages.js
│   ├── random.js
│   └── runes.js
│
├── App.jsx
├── main.css
└── main.jsx
```

---

## Data Dragon

O projeto utiliza o Data Dragon para buscar dados estáticos do League of Legends, como:

- campeões;
- feitiços de invocador;
- itens;
- runas.

A aplicação primeiro busca a versão mais recente disponível e, em seguida, carrega os dados necessários com base nessa versão.

---

## Performance

Para melhorar a experiência do usuário, foi implementado um sistema de pré-carregamento de imagens.

Após os dados serem carregados e normalizados, as imagens de campeões, itens, feitiços, runas e rotas são pré-carregadas no navegador. Isso reduz o atraso visual ao gerar novas builds.

---

## Responsividade

O projeto foi desenvolvido com abordagem **mobile-first**.

- Em telas menores, os cards são exibidos em coluna.
- Em telas desktop, a partir de `1280px`, o layout passa a usar grid.
- O container principal possui largura controlada para evitar que os componentes fiquem esticados em monitores grandes.

---

## Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lol-random-build.git

# Acesse a pasta do projeto
cd lol-random-build

# Instale as dependências
npm install

# Rode o projeto em ambiente de desenvolvimento
npm run dev
```

---

## Testar em rede local

Para testar o projeto em outro dispositivo na mesma rede, como um celular:

```bash
npm run dev -- --host
```

Depois, acesse no navegador do dispositivo o endereço exibido no terminal.

---

## Gerar build de produção

Para gerar a versão final do projeto:

```bash
npm run build
```

Para visualizar a build localmente:

```bash
npm run preview
```

---

## Melhorias futuras

- Adicionar animação ao gerar uma nova build
- Permitir fixar campeão, rota, spells, runas ou itens
- Criar builds baseadas na rota sorteada
- Criar filtros por tipo de item
- Adicionar botão para compartilhar build
- Adicionar histórico de builds geradas
- Melhorar tratamento de erro caso o Data Dragon esteja indisponível
- Publicar o projeto na Vercel

---

## Observações

Este projeto não utiliza chave de API da Riot Games, pois o Data Dragon fornece dados estáticos públicos.

As rotas são mantidas em um arquivo local, pois o Data Dragon não fornece uma relação direta de rota para cada campeão no contexto deste projeto.

---

## Autor

Desenvolvido por **Anderson G. S. Farias**.
