# API RESTful Simples

Projeto de criação de uma API RESTful simples usando Express.js integrando com banco de dados PostgresSQL.

## Como Executar o Servidor

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

### 1: Clonar o Repositório

Clone este repositório para a sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/JuliaNascF/Desafios_Tecnicos-Cognum.git
```

### 2: Entre na Pasta da Aplicação

Navegue para a pasta do projeto usando o seguinte comando:

```bash
cd Desafio2
```

### 3: Instale as  Dependências e Execute o Servidor

Antes de executar o servidor, certifique-se de instalar as dependências do projeto executando o seguinte comando:

```bash
npm install
```
Depois execute o servidor com o seguinte comando: 

```bash
npm start
```


## Rotas da API

A API oferece as seguintes rotas para gerenciamento de funcionários:

- GET /employees: Retorna todos os funcionários cadastrados.

- POST /employees: Cria um novo funcionário. Envie um corpo JSON com os campos "name" e "role" para criar um funcionário.

- GET /employees/:id: Retorna um funcionário específico pelo ID.

- PUT /employees/:id: Atualiza um funcionário existente pelo ID. Envie um corpo JSON com os campos "name" e "role" para atualizar o funcionário.

- DELETE /employees/:id: Exclui um funcionário pelo ID.

### Exemplos de uso

1. Listar todos os funcionários:

``` bash
GET http://localhost:3000/employees
```

2. Criar um novo funcionário:


``` bash
POST http://localhost:3000/employees
Body:
{
  "name": "Julia Nascimento",
  "role": "Desenvolvedora"
}
```

3. Obter um funcionário pelo ID:

``` bash
GET http://localhost:3000/employees/:id
```

4. Atualizar um funcionário pelo ID:


``` bash
PUT http://localhost:3000/employees/:id
Body:
{
  "name": "Larissa Costa",
  "role": "Administradora"
}

```

5. Excluir um funcionário pelo ID:

``` bash
DELETE http://localhost:3000/employees/:id
```
