# NG.CASH Challenge

## Objetivo

Estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.

## Instruções

Na pasta raiz do projeto, rodar os comandos:

```bash
# Buid dos containers
docker compose build

# Sobre os containers
docker compose up -d
```

Dentro da pasta api

```bash
cd api

# Realiza as migrations no BD Postgres do container
yarn docker:db:migrate

# Cria as seeds para teste no BD Postgres do container
yarn docker:db:seed
```

O Backend estará sendo executado em `http://localhost:3333`

O BD estará sendo executado em `http://localhost:5432`, com o DB de nome `ng_cash_dev`

O Frontend estará sendo executado em `http://localhost:3000`

Após o seed, terá disponível 10 usuários com o seguinte formato:

- username `user_i`
- Senha: `Password123`

## Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NG%20Cash%20Challenge%20Capelaum&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcapelaum%2Fng-cash-challenge%2Fmain%2Finsomnia.json%3Ftoken%3DGHSAT0AAAAAABZFB2N4RZQWOKFPKTBDYNI4Y34OKRQ)

## Tasks

### Backend

- [x] Stack Base
- [x] Arquitetura
- [x] Qualquer pessoa deverá poder fazer parte da NG. Para isso, basta realizar o cadastro informando username e password.
- [x] Deve-se garantir que cada username seja único e composto por, pelo menos, 3 caracteres.
- [x] Deve-se garantir que a password seja composta por pelo menos 8 caracteres, um número e uma letra maiúscula. Lembre-se que ela deverá ser hashada ao ser armazenada no banco.
- [x] Durante o processo de cadastro de um novo usuário, sua respectiva conta deverá ser criada automaticamente na tabela Accounts com um balance de R$ 100,00. É importante ressaltar que caso ocorra algum problema e o usuário não seja criado, a tabela Accounts não deverá ser afetada.
- [x] Todo usuário deverá conseguir logar na aplicação informando username e password. Caso o login seja bem-sucedido, um token JWT (com 24h de validade) deverá ser fornecido.
- [x] Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar seu próprio balance atual. Um usuário A não pode visualizar o balance de um usuário B, por exemplo.
- [x] Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de realizar um cash-out informando o username do usuário que sofrerá o cash-in), caso apresente balance suficiente para isso. Atente-se ao fato de que um usuário não deverá ter a possibilidade de realizar uma transferência para si mesmo.
- [x] Toda nova transação bem-sucedida deverá ser registrada na tabela Transactions. Em casos de falhas transacionais, a tabela Transactions não deverá ser afetada.
- [x] Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar as transações financeiras (cash-out e cash-in) que participou. Caso o usuário não tenha participado de uma determinada transação, ele nunca poderá ter acesso à ela.
- [x] Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de filtrar as transações financeiras que participou por: Data de realização da transação e/ou Transações de cash-out ou cash-in

<img src=".github/DER - NG-CASH-Challenge.drawio.png" width="600" alt="DER - NG-CASH-Challenge">

### Frontend

- [x] Stack Base
- [x] Página para realizar o cadastro na NG informando username e password.
- [x] Página para realizar o login informando username e password.
- [x] Com o usuário logado, a página principal deve apresentar:
- [x] balance atual do usuário;
- [x] Seção voltada à realização de transferências para outros usuários NG a partir do username de quem sofrerá o cash-in;
- [x] Tabela com os detalhes de todas as transações que o usuário participou;
- [x] Mecanismo para filtrar a tabela por data de transação e/ou transações do tipo cash-in/cash-out;
- [x] Botão para realizar o log-out.
