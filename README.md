
# Poke Api

Aplicação para consumo dinâmico da api PokeApi (https://pokeapi.co/) onde simula o checkout de um e-commerce com fluxo de formulário através da seleção de um dos Pokemons exibidos.


## Funcionalidades

- Listagem de Pokemons
- Checkout do Pokemon selecionado



## Pilha de Tecnologia

**Bibliotecas:** React, Typescript, Prettier, Eslint, React Router Dom, Styled Components, Yup, Axios, React Icons, React Slick, React Reveal.


## Diretórios do Projeto

| Color             | Descrição                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Assets | Arquivos de fontes e imagens estáticas |
| Components | Centralização de todos os componentes da aplicação |
| Context | Gerenciamento de estado da aplicação |
| Hooks | Hooks reutilizáveis |
| Pages | Páginas da aplicação |
| Routes | Configuração das rotas |
| Service | Serviços externos da aplicação ( Conexão com PokeApi ) |
| Style | Arquivos de estilos globais e tema da aplicação |
| Templates | Base do Template da aplicação |
| Types | Tipagem das bibliotecas |
| Utils | Todo tipo de arquivo util para a aplicação (ex: máscaras de inputs e validações) |


## Executar Localmente

Clone o projeto

```bash
  git clone https://github.com/phsm7/teste-react-mobi2buy-pedro.git
```

Acesse o diretório do projeto

```bash
  cd teste-react-mobi2buy-pedro
```

Instale as dependências

```bash
  yarn
```

Inicie o servidor

```bash
  yarn start
```


## Rotas da Aplicação

#### Baseurl

```http
  http://localhost:3000
```

| Rota| Description                |
| :-------- | :------------------------- |
| `/` | Página Inicial |
| `/ofertas` | Página de Ofertas |
| `/checkout/:pokemon` | Página de Checkout |
| `*` | Página 404 - Não encontrado |


## Feedback

Caso tenha comentários ou sugestões, entre em contato comigo pelo e-mail p7dev.technology@gmail.com

