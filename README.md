
# :beer: Copo Cheio - Delivery App

Um app de delivery para suas bebidas.

Esse foi o projeto mais completo até agora! Nessa aplicação, meu grupo foi responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de bebidas. 🍻

Neste projeto, nós desenvolvemos um app de delivery para uma distribuidora de bebidas. Veja abaixo como foi feita a distribuição de acessos:

- Consumidor:
  - Realizar Pedidos
  - Ver status do pedido
- Vendedor:
  - Permissão para cadastro de novos Produtos
  - Alteração de status de Pedidos
- Administrador:
  - Possibilidade para modificar a permissão de acesso dos usuários
  - Cadastro de novos usuários


![smartphone](https://github.com/Brayan-23/Delivery-App/blob/main/Login.gif)
![smartphone](https://github.com/Brayan-23/Delivery-App/blob/main/Produtos.gif)


## ⚙️ Funcionalidades

✅ Fazer Login / Cadastro;

✅ Criar uma venda - Cliente;

✅ Alterar o status da venda - Vendedor;

✅ Fazer gestão dos usuários do App - Administrador;

## :hammer_and_wrench: Ferramentas 
### 🍮 BackEnd
- DOCKER;
- MySQL com Sequelize;
- NodeJS com Express;
- JWT;
- MD5;
- Testes (Sinon, Chai, Mocha);

### 🍮 FrontEnd
- React;
- Context API;
- Jest
- Axios

# Orientações

- *Clonar o repositório:*

```
$ git clone git@github.com:Brayan-23/Delivery-App.git
```

- *Acessar o projeto appdelivery:*

```
$ cd Delivery-App
```

- *Instalar as dependências tanto do Front-end, como Back-end*

> Acesse as pastas back-end e front-end e instale as dependencias: `npm install`


<details>
  <summary><strong>🐋 Rodando o MySQL com Docker vs Localmente</strong></summary><br />
  
  ## Com Docker


  - Dentro da pasta back-end, rode o `docker-compose` com o comando:
   ```
  $ docker-compose up -d
  ```
  - Esse serviço irá inicializar um container chamado `back_app_delivery` com a imagem do <strong>MySQL</strong>.

  - *Com o container em funcionamento, execute o comando para popular o Banco de Dados:*
  
  ```
  $ npm run db:reset
  ```
  
  - *Por fim, execute em sua respectivas pastas o comando abaixo, para colocar no ar tanto Back-end, quanto Front-end*
   
   ```
   $ npm start
   ```
---
  
  ## Sem Docker
 
  - *Execute o comando para popular o Banco de Dados:*
  
  ```
  $ npm run db:reset
  ```
  - *Execute em sua respectivas pastas o comando abaixo, para colocar no ar tanto Back-end, quanto Front-end*
  
   ```
   $ npm start
   ```
   
   ⚠ Atenção ⚠: Caso opte por utilizar localmente, necessarimente você precisa ter o <strong>MySQL</strong> instalado e funcionando.. 
   
  <br/>
</details>

- *Poderá encontrar a aplicação* [LINK](http://localhost:3000/)
- *Utilizar um login válido:*
```
        Customer              Administrador         Vendedora
email: zebirita@email.com ou adm@deliveryapp.com ou fulana@deliveryapp.com
senha: $#zebirita#$ ou --adm2@21!!-- ou fulana@123
```
## 👨‍💻 Desenvolvedores

- [Brayan Santos](https://www.linkedin.com/in/braka/)
- [Carlos Henryck](https://www.linkedin.com/in/carlos-henryck-dev/)
- [Carlos Eduardo](https://www.linkedin.com/in/eduardosantos0418/)
- [Eduardo Ferreira](https://www.linkedin.com/in/eduardo-ferreira-da-costa-desenvolvedor/)
- [David Machado](https://www.linkedin.com/in/david-machado-dev/)
