# **POKEDEX** 🐱‍👤

![Vercel](https://img.shields.io/badge/deploy-vercel-000?style=flat&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)

Uma aplicação front-end para explorar, buscar e favoritar Pokémons utilizando a [PokéAPI](https://pokeapi.co/).

---

## 🚀 Tecnologias Utilizadas

- **Next.js** – Framework React para aplicações web modernas.
- **TypeScript** – Tipagem estática para maior segurança.
- **Tailwind CSS** – Framework utilitário para estilização rápida e responsiva.
- **Vercel** – Plataforma de deploy contínuo.

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/thebiancascript/wsFrontend-Fabrica25.2.git
cd wsFrontend-Fabrica25.2
npm install
```

### 🧪 Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Scripts

- `dev` – Inicia o servidor de desenvolvimento.
- `build` – Cria a versão de produção da aplicação.
- `start` – Inicia a aplicação em modo produção.
- `lint` – Executa o ESLint para verificar problemas de código.


## 📄 Estrutura de Diretórios

```text
src/
 ├─ app/
 │   ├─ detalhes/        – Página de detalhes de um Pokémon
 │   ├─ favoritos/       – Página de Pokémons favoritos
 │   └─ home/            – Página inicial com a lista de Pokémons
 ├─ components/          – Componentes reutilizáveis
 ├─ hooks/               – Hooks personalizados
 ├─ lib/                 – Bibliotecas e utils
 └─ types/               – Tipagens TypeScript
assets/                  – Imagens utilizadas no README
public/                  – Arquivos públicos
```

---

## 🌐 Deploy

A aplicação está online no Vercel:

[🔗 Ver site](https://ws-frontend-fabrica25-2-oya8.vercel.app/)



## 📸 Capturas de Tela

### Página inicial com a lista de Pokémons
![Página Inicial](https://raw.githubusercontent.com/thebiancascript/wsFrontend-Fabrica25.2/main/assets/pokemons.png)

### Página de detalhes de um Pokémon
![Detalhes do Pokémon](https://raw.githubusercontent.com/thebiancascript/wsFrontend-Fabrica25.2/main/assets/infos.png)

### Página que exibe os Pokémons favoritos
![Favoritos](https://raw.githubusercontent.com/thebiancascript/wsFrontend-Fabrica25.2/main/assets/teladefavs.png)



## ⭐ Funcionalidades

- Listagem de Pokémons da PokéAPI.
- Visualização de detalhes do Pokémon.
- Favoritar / desfavoritar Pokémons.
- Layout responsivo para mobile e desktop.
