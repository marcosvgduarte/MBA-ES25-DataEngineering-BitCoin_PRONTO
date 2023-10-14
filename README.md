![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# API de Consulta ao Coincap com Ingestão de Dados ₿

Fornecer uma visão geral da solução criada  e uma breve descrição das tecnologias utilizadas.

## Tecnologias

Descrever a abordagem adotada para realização do projeto, incluindo as ferramentas e técnicas utilizadas.

## Desafios 

Detalhar quaisquer limitações ou suposições feitas durante o processo de desenvolvimento, destacando quaisquer pontos fortes ou fracos da tecnologia ou solução que foram utilizadas.

## Descobertas

Resumo das principais descobertas feitas durante o projeto e conclusão sobre a viabilidade e o potencial da solução desenvolvida. Ele também deve destacar quaisquer recomendações para testes ou desenvolvimentos adicionais.

## Como utilizar

Descrição de como utilizar a API construída.

## Material de Apoio

Links das documentações e materias de apoio utilizados para a construção da API.

# NodeJS
Projeto de CRUD feito em NodeJS usando Express e MySQL

### Objetivo do framework
O Node JS é uma plataforma para desenvolvimento de aplicações server-side baseadas em rede utilizando JavaScript e o V8 JavaScript Engine, usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente.
Ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.<br>

### Requisitos básicos para poder utilizá-lo
* [NodeJS](https://nodejs.org)
* [Xampp](https://www.apachefriends.org)
* [Postman](https://www.getpostman.com)
* [MySQL](https://database-client.com/#/home) - Extension
* [Banco_de_Dados_AWS_RDS](mba-es25.cwudjjjzg4mm.sa-east-1.rds.amazonaws.com)
* [Email_Remetente](alertabitcoincap@outlook.com)


### Documentação
* NodeJS em inglês [NodeJS Docs](https://nodejs.org/en/docs/)  <br>
* Express em português [Express](http://expressjs.com/pt-br/)

### Principais vantagens do framework
* V8 JavaScript Engine: é o interpretador de JavaScript open source implementado pelo Google em C++ e utilizado pelo Chrome.<br>
* Single threaded: Embora isso possa parecer uma desvantagem, o que se percebe ao desenvolver com Node.js é que isso simplifica extremamente a construção da aplicação. <br>
* IO(In/Out) não-bloqueante: Com isto nenhuma tarefa pesadas de entrada e saída vai travar a aplicação,
pois elas serão executadas em background sem bloquear a aplicação e o retorno de sucesso
ou falha dessas tarefas ocorrem através de uma função de callback.<br>
* Ready for real-time: Frameworks que interagem em real-time entre cliente e servidor, que são compatíveis com o novo protocolo WebSockets 
e permitem trafegar dados através de uma única conexão bi-direcional,
tratando as mensagens via eventos no JavaScript. <br>
* Comunidade Ativa

### Desvantagem
O Express cria por padrão o projeto com view em `.jade`, sendo que mudaram para `.pug`.

### Principais passos para instalação e configuração deste projeto
Após clonar o projeto para executalo é necessário abrir o terminal ou cmd e ir para a pasta do projeto e executar: `npm install`. 
Após novamento no terminal executar o comando `npm start` para executar o projeto. <br>
Obs.: 
    1-Caso queira debuggar o código ao invés do comando `npm start`, execute o comando `npm run dev`, que habilita o nodemon.
        1.1-A instrução para debug está no arquivo `package.json` como ` "dev": "nodemon --inspect ./routes/cotacao.js" `.
    2-Após essa ação, clique `Run and Debug` e selecione `nodejs` na barra superior.
Agora pode acessar `http://localhost:3000` para verificar se esta funcionando. <br>
E para usar no postman `http://localhost:3000/cotacao`.
Todos os outros comandos podem ser executados pelo postam alterando a rota.

### Criar novo projeto (caso queira fazer do zero).
Após instalar o nodejs abrir o cmd ou terminal e executar o comando `npm install express-generator -g` para instalar o Express. 
Para criar um novo projeto executar `express nome_do_projeto`. <br>
Uma dica é executar antes o `express -h` para criar um projeto com as opções de desejar. 
Por exemplo `express --git --ejs nome_do_projeto` que cria um .gitignore e a os arquivos da view em formato ejs(o padrão é .jade). <br>
Com a criação do projeto entre pelo terminal ou cmd na pasta do projeto e execute `npm install`. <br>
Agora com o projeto criado e os modulos instalar pode executar `npm start` e acessar `http://localhost:3000` 
para ver se o projeto esta funcionando.

## Integrantes do Projeto

Nome | RM
----  | --------
Amanda Carolini | RA 2300540 
Bianca Pereira | RA 2301749
Marcos Duarte | RA 2301819
Raul Lobo | RA 2302261