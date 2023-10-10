# Condo Access API
API de controle de acesso de visitantes em condomínios.

Projeto concebido seguindo as orientações do Teste Técnico de Dev da Superlógica Tecnologias.

## Overview
### Tecnologias e Frameworks
A API NodeJS foi escrita em TypeScript, usando Express. O banco de dados é PostgreSQL, usando a biblioteca TypeORM como ORM. Os testes automatizados foram feitos com Jest e a validação de dados com Celebrate, que usa o Joi.

### Fluxo
A API possui as seguintes funcionalidades:
* CRUD de visitante (cadastro dos dados, atualização dos dados, lista de todos os visitantes cadastrados, e remoção de um visitante)
* Registro de acesso de entrada de um visitante, lista de acessos registrados, e a atualização de um acesso existente para indicar que o visitante saiu do condomínio.

Ao executar a API, já haverá no banco de dados exemplos de condomínio e unidades seguindo a estrutura proposta (o condomínio recebeu o nome de "condo"):

**Tabela de condomínio:**

| id  | name |
| ------------- | ------------- |
| 1  | "condo"  |

**Tabela de unidade:**

| id  | name | condominio_id
| ------------- | ------------- | -------------
| 1  | "A1"  | 1
| 2  | "A2"  | 1

Vale lembrar que nesta API, só é possivel registrar o acesso de entrada de um visitante que estiver cadastrado.

## Instruções para rodar
### Em Linux:
Após baixar/clonar o repositório, entrar no diretório do projeto e rodar no terminal o seguinte comando:
```chmod +x .docker/entrypoint.sh```
Em seguida, rodar o container de Docker do projeto usando:
```docker-compose up```
Quando aparecer no terminal a string ```Servidor iniciado na porta 3000```, é porque a API já está rodando no servidor local.

## Manipulação do banco usando pgAdmin
Caso necessário, o container do Docker permite a visualização e manipulação do banco PostgreSQL usando o pgAdmin, que estará disponível em ```localhost:80```.

O login é ```admin@pgadmin.com.br``` e a senha é ```admin```. Para adicionar um novo servidor, o host é ```db```, o usuário ```postgres``` e a senha ```123```.

## Documentação
Após rodar a API com o Docker Compose, a documentação estará disponível em ```localhost:3000/docs```.

## Dúvidas
Qualquer problema ou dúvida com o projeto, estarei à disposição para responder. Meu email é pedronogarcez@gmail.com.