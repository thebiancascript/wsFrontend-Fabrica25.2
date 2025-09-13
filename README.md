# **POKEDEX** 🐱‍👤 ![Vercel](https://img.shields.io/badge/deploy-vercel-000?style=flat&logo=vercel) ![Next.js](https://img.shields.io/badge/Next.js-000?style=flat&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white) Uma aplicação front-end para explorar, buscar e favoritar Pokémons utilizando a [PokéAPI](https://pokeapi.co/). --- ## 🚀 Tecnologias Utilizadas - **Next.js** – Framework React para aplicações web modernas. - **TypeScript** – Tipagem estática para maior segurança. - **Tailwind CSS** – Framework utilitário para estilização rápida e responsiva. - **Vercel** – Plataforma de deploy contínuo. --- ## 📦 Instalação Clone o repositório e instale as dependências:
bash
git clone https://github.com/thebiancascript/wsFrontend-Fabrica25.2.git
cd wsFrontend-Fabrica25.2
npm install
🧪 Desenvolvimento
Inicie o servidor de desenvolvimento:

bash
Copy code
npm run dev
A aplicação estará disponível em http://localhost:3000.

🛠️ Scripts
dev: Inicia o servidor de desenvolvimento.

build: Cria a versão de produção da aplicação.

start: Inicia a aplicação em modo produção.

lint: Executa o ESLint para verificar problemas de código.

📄 Estrutura de Diretórios
css
Copy code
src/
 ├─ app/
 │   ├─ detalhes/      – Página de detalhes de um Pokémon
 │   ├─ favoritos/     – Página de Pokémons favoritos
 │   └─ home/          – Página inicial com a lista de Pokémons
 ├─ components/        – Componentes reutilizáveis
 ├─ hooks/             – Hooks personalizados
 └─ types/             – Tipagens TypeScript
assets/                – Imagens utilizadas no README

🌐 Deploy
A aplicação está online no Vercel:

🔗 <a href="(https://ws-frontend-fabrica25-2-ehqw-git-main-bianca-sobrals-projects.vercel.app/)>Ver site</a></li>

### Página inicial com a lista de Pokémons

<img width="1903" height="920" alt="pokemons" src="https://github.com/user-attachments/assets/ea14df4a-b35b-4df1-9868-2ce3140ee779" />

### Página de detalhes de um Pokémon

<img width="1905" height="935" alt="infos" src="https://github.com/user-attachments/assets/8bd8d0ba-c327-437c-b902-a71d224ecaeb" />

### Página que exibe os Pokémons favoritos

<img width="1869" height="898" alt="teladefavs" src="https://github.com/user-attachments/assets/42763d6a-7d60-4f12-b5c2-83a9bd574a24" />


⭐ Funcionalidades
Listagem de Pokémons da PokéAPI.

Visualização de detalhes do Pokémon.

Favoritar / desfavoritar Pokémons.

Layout responsivo para mobile e desktop.
