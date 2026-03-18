# Cortex3 -- Site Institucional

![CI](https://github.com/institutoveigacabral-maker/cortex3-site/actions/workflows/ci.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Site institucional do ecossistema Cortex3. Apresenta o grupo, o modelo Figital, portfolio de marcas, governanca corporativa e canal de contato. Construido com React no frontend e Hono no edge via Cloudflare Workers, garantindo latencia minima e deploy global.

## Stack Tecnica

| Camada | Tecnologia |
|--------|-----------|
| Runtime Edge | Cloudflare Workers |
| API / Server | Hono 4 |
| Frontend | React 19 + TypeScript |
| Build | Vite 7 |
| Estilizacao | Tailwind CSS + PostCSS |
| Validacao | Zod |
| Icones | Lucide React |
| Roteamento | React Router 7 |
| Testes | Vitest + Testing Library |
| Lint | ESLint 9 + typescript-eslint |
| Formatacao | Prettier |
| Dead code | Knip |
| Deploy | Cloudflare Workers (Wrangler) |
| Storage | Cloudflare D1 (banco) + R2 (objetos) |

## Funcionalidades

- Paginas institucionais: Home, Grupo, Modelo Figital, Portfolio, Governanca, Contato
- Server-side rendering via Cloudflare Workers com Hono
- Design system com componentes reutilizaveis (Hero, Navigation, Footer, blocos modulares)
- Arquitetura edge-first -- deploy global com latencia minima
- Validacao de dados com Zod
- Suite de testes automatizados (componentes e rotas)
- Analise de dead code com Knip
- CI automatizado via GitHub Actions

## Arquitetura

```
src/
├── react-app/          # Aplicacao React (SPA)
│   ├── components/     # Componentes reutilizaveis
│   │   ├── ui/         # Design system base
│   │   ├── blocks/     # Blocos de pagina
│   │   └── home/       # Componentes da Home
│   └── pages/          # Paginas (Home, Grupo, Figital, Portfolio, Governanca, Contato)
├── worker/             # Cloudflare Worker (Hono API)
│   └── index.ts        # Entry point do edge server
├── shared/             # Tipos e utilitarios compartilhados
│   └── types.ts        # Tipos TypeScript compartilhados
└── test/               # Testes automatizados
    ├── components/     # Testes de componentes
    ├── data/           # Fixtures e dados de teste
    ├── routing.test.tsx
    └── setup.ts        # Setup do Vitest
```

## Setup Local

```bash
git clone https://github.com/institutoveigacabral-maker/cortex3-site.git
cd cortex3-site
npm install
npm run dev
```

O servidor de desenvolvimento inicia com hot reload via Vite.

## Scripts

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de producao (TypeScript + Vite) |
| `npm test` | Executa suite de testes com Vitest |
| `npm run lint` | Verifica codigo com ESLint |
| `npm run format` | Formata codigo com Prettier |
| `npm run format:check` | Verifica formatacao sem alterar |
| `npm run knip` | Detecta dead code e dependencias nao utilizadas |
| `npm run check` | Build completo + dry-run do deploy |
| `npm run cf-typegen` | Gera tipos do Cloudflare Workers |

## Deploy

O deploy e feito via Cloudflare Workers com Wrangler:

```bash
npm run build
npx wrangler deploy
```

O projeto utiliza:
- **Cloudflare D1** como banco de dados relacional no edge
- **Cloudflare R2** como storage de objetos
- **Assets SPA** com fallback para single-page-application

O CI via GitHub Actions executa lint, testes e build a cada push.

## Licenca

MIT -- ver [LICENSE](LICENSE).
