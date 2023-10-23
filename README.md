## Detalhes importantes do projeto

Para o desenvolvimento deste projeto, optei por utilizar um template que elaborei com base nas melhores práticas e tecnologias modernas. Optei por utilizar este template em meus projetos devido à sua notável facilidade de uso. Ele oferece uma estrutura pré-configurada e organizada que já inclui as tecnologias que utilizo diariamente. Isso significa que posso iniciar o desenvolvimento de novas aplicações de forma ágil, sem a necessidade de configurar cada detalhe desde o início.

O template em questão é construído sobre a base sólida do Next.js 13 (Framework do React) e TypeScript, proporcionando uma estrutura robusta e altamente escalável para o desenvolvimento de aplicações web.

Além disso, o template incorpora uma série de pacotes essenciais que agilizam o processo de desenvolvimento. Entre eles, destacam-se o Styled Components e Styled Media Query, que possibilitam a criação de interfaces atraentes e responsivas de forma eficaz. Para a integração de ícones, adotei o pacote React Icons, proporcionando uma ampla gama de ícones prontos para uso.

A utilização do TypeScript garante um código mais limpo, legível e com menor margem para erros.

A fim de garantir a qualidade e robustez do código, implementei testes utilizando o Jest, com suporte para ambientes JS DOM e Styled Components. Adicionalmente, incluí o Plop, uma ferramenta que agiliza a geração de código, proporcionando uma maior eficiência no desenvolvimento.

Para a documentação e visualização dos componentes, integrei o Storybook, permitindo uma fácil navegação e interação com os elementos do projeto.

Você pode acessar o repositório no GitHub desse template [por aqui](https://github.com/GabrielBursi/boilerplate-next-approuter).

## Tecnologias Utilizadas

* **Chakra UI**: Essa biblioteca fornece componentes reutilizáveis e estilizados, o que acelera o processo de desenvolvimento e mantém uma consistência visual em toda a aplicação. A integração com Next.js e React facilita a construção de interfaces modernas e responsivas.

* **Axios**: Utilizado para realizar requisições HTTP, o Axios é uma escolha sólida para a comunicação entre o frontend e o backend, oferecendo uma API intuitiva e fácil de usar.

* **JSON Server**: Uma ferramenta prática para criar uma API fake durante o desenvolvimento, permitindo simular o comportamento do backend antes da sua implementação definitiva.

* **React Hook** Form: Essa biblioteca simplifica a gestão de formulários no React, tornando o processo de coleta e validação de dados mais intuitivo e eficiente.

* **React Icons**: Facilita a incorporação de ícones de alta qualidade à aplicação, contribuindo para uma interface mais atraente e usável.

* **Styled Components**: Esta biblioteca permite a estilização de componentes de forma mais dinâmica e organizada, integrando o CSS diretamente no JavaScript. Isso promove uma melhor organização do código e facilita a manutenção.

* **Styled Media Query**: Utilizado para implementar estilos responsivos com base em consultas de mídia, garantindo uma experiência de usuário consistente em diferentes dispositivos.

* **Polished**: Esta biblioteca oferece um conjunto de utilitários para manipulação de estilos, facilitando a aplicação de efeitos visuais e garantindo uma aparência consistente.

## Como usar em produção

1. Digite no terminal o seguinte comando:
```bash
npm i
```
2. Faça o build do projeto:
```bash
npm run build
```
3. Inicie o projeto:
```bash
npm start
```

## Como usar em desenvolvimento

Infelizmente, a API fornecida pela empresa estava temporariamente indisponível. Para contornar essa situação, optei por implementar uma solução alternativa utilizando o JSON Server.

O JSON Server é uma ferramenta extremamente útil que permite simular uma API RESTful utilizando um arquivo JSON como fonte de dados. Essa abordagem foi adotada para criar uma API falsa, similar à API fornecida pela empresa, permitindo assim a continuidade do desenvolvimento do projeto, apesar da indisponibilidade da API original.

A estrutura da API falsa foi modelada para imitar de perto a API fornecida pela empresa, garantindo que o código desenvolvido seja facilmente integrável quando a API original estiver novamente disponível.

1. Digite no terminal o seguinte comando:
```bash
npm i
```
2. Inicie o projeto em ambiente de desenvolvimento:
```bash
npm run dev
```
3. Inicie o server fake:
```bash
npm run server
```

## Comandos Específicos

- `npm run dev`: Next.js é iniciado no modo de desenvolvimento.
- `npm run build`: Usado para preparar o aplicativo para implantação em um ambiente de produção..
- `npm start`: Usado para iniciar o aplicativo em um ambiente de produção após ter sido construído.
- `npm run test`: Executa os testes usando o Jest.
- `npm run test:watch`: Executa os testes em modo de observação usando o Jest.
- `npm run storybook`: Inicia o servidor do Storybook para desenvolvimento.
- `npm run build-storybook`: Compila o Storybook para produção, gerando os arquivos estáticos na pasta '../src/public'.
- `npm run generate`: Executa a ferramenta de geração de componente.
- `npm run generate:t`: Executa a ferramenta de geração de template.
