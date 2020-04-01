# Template básico NodeJS + Mongoose

Template para projetos básicos em NodeJS + Mongoose.

## Requisitos

- NodeJS LTS (ou superior)
- Postgres/MongoDB/Redis
- Docker (opcional)

### Uso

1. Clonar o repositório:

```sh
$ git clone git@github.com:DevSamurai/nodejs-template-mongoose-basic.git [ProjectName]
$ cd [ProjectName]
$ node ./setup.js
$ yarn
$ cp .env.example .env # ajustar os parâmetros de configuração
$ yarn dev
```

### Executando o Docker via Compose

O arquivo `docker-compose.yml` já contém a imagens para sistemas de banco de dados Postgres, MongoDB e Redis, com seus devidos sistemas de administração.

Para subir as imagens execute o comando no projeto:

```bash
$ docker-compose up
```

#### Serviços

##### Postgres

Painel de Administração:

* Administração: http://localhost:8000
* Usuário: `admin@admin.com`
* Senha: `secret`

Banco de Dados:

* Usuário: `postgres`
* Senha: `secret`
* BD: `develop`

##### MongoDB

Painel de Administração:

* Administração: http://localhost:8001

Banco de Dados:

* Usuário: `root`
* Senha: `secret`

##### Redis

Painel de Administração:

* Administração: http://localhost:8002

## Dúvidas

Se você curtiu esse projeto ou está com dúvidas acesse:

* O Guia com todo o passo a passo explicativo em https://guia.devsamurai.com.br
* Nossa comunidade Samurai no Discord acesse https://lp.devsamurai.com.br/discord

## Licença

MIT
