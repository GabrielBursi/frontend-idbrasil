# Template de Projetos com Next.js e TypeScript
Este é um template de projetos para iniciar rapidamente o desenvolvimento de aplicações com Next.js, TypeScript, StoryBook e Styled Components.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js: [https://nodejs.org](https://nodejs.org)

## Quais pacotes vem com esse template
* next
* react
* styled-components
* styled-media-query
* react-icons
* redux
* axios
* typescript
* jest
* jest-environment-jsdom
* jest-styled-components
* plop
* storybook

## Como usar
Siga as etapas abaixo para começar a usar o template:

1. Digite no terminal o seguinte comando: 
```bash
npx create-next-app -e https://github.com/GabrielBursi/boilerplate-next-approuter nome-do-projeto
```
2. Abra a pasta do projeto criado.
3. Instale as dependências do projeto usando o seguinte comando: 
`npm install`
4. Para rodar o projeto em ambiente de desenvolvimento: 
`npm run dev`
## Comandos Específicos 

- `npm run test`: Executa os testes usando o Jest.
- `npm run test:watch`: Executa os testes em modo de observação usando o Jest.
- `npm run storybook`: Inicia o servidor do Storybook para desenvolvimento.
- `npm run build-storybook`: Compila o Storybook para produção, gerando os arquivos estáticos na pasta '../src/public'.
- `npm run generate`: Executa a ferramenta de geração de componente.
