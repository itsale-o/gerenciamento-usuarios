# Gerenciamento de Usuários

Frontend da aplicação de gerenciamento de usuários, desenvolvido com React e
Vite.

## Pré-requisitos

- Node.js 22 ou superior
- npm
- API da aplicação disponível para receber as requisições do frontend

Também é possível executar o projeto com Docker e Docker Compose.

## Configuração

Na pasta `frontend`, crie um arquivo `.env.local` com as configurações
necessárias:

```env
VITE_API_URL=http://localhost:8000
VITE_KEY1=sua-chave-1
VITE_KEY2=sua-chave-2
VITE_PUBLIC_IP_API=https://api.ipify.org?format=json
```

`VITE_API_URL` é usado pelo proxy de desenvolvimento para encaminhar as
requisições `/api` à API. As chaves devem ser fornecidas pelo responsável pelo
backend e não devem ser versionadas.

## Executando localmente

1. Acesse a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador.

O Vite atualiza a aplicação automaticamente enquanto os arquivos são
alterados.

## Executando com Docker Compose

A partir da raiz do projeto, execute:

```bash
docker compose up --build
```

Depois, acesse [http://localhost:5173](http://localhost:5173).

Para executar em segundo plano:

```bash
docker compose up --build -d
```

Para parar os containers:

```bash
docker compose down
```

## Comandos disponíveis

Execute os comandos abaixo dentro da pasta `frontend`:

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção em `dist/` |
| `npm run preview` | Serve localmente a build de produção |
| `npm run lint` | Executa o ESLint |

Para validar uma build de produção:

```bash
npm run build
npm run preview
```

## Tecnologias

- React
- Vite
- React Router
- Bootstrap e Bootstrap Icons
- i18next
