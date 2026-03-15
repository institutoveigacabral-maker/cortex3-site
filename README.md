# Cortex3 -- Site Institucional

![CI](https://github.com/institutoveigacabral-maker/cortex3-site/actions/workflows/ci.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Site institucional do grupo com paginas de apresentacao, modelo Figital, portfolio de marcas, governanca corporativa e contato. Construido com Hono + Cloudflare Workers para deploy edge.

## Stack

- Hono (Cloudflare Workers)
- React + Vite + TypeScript
- Zod (validacao)
- Tailwind CSS

## Funcionalidades

- Paginas institucionais (Grupo, Modelo, Portfolio, Governanca, Contato)
- Rendering server-side via Cloudflare Workers
- Design system com componentes reutilizaveis
- Responsivo e otimizado para performance

## Setup Local

```bash
git clone https://github.com/institutoveigacabral-maker/cortex3-site.git
cd cortex3-site
npm install
cp .env.example .env.local  # configurar variaveis
npm run dev
```

## Testes

```bash
npm test
```

67 testes cobrindo logica de negocio, validacoes e utilitarios.



## Contributing

Ver [CONTRIBUTING.md](CONTRIBUTING.md).

## Licenca

MIT -- ver [LICENSE](LICENSE).
