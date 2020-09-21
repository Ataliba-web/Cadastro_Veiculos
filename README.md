# Cadastro_Veiculos

->Criado projeto Angular/NodeJs de acordo com o solicitado:
 - Criar projeto backend utilizando (NodeJs);
   - Diretório "beck-node-api"
 - Criar crud de veículos com os seguintes atributos (id, placa, chassi, renavam, modelo, marca, ano). Obs.: Os dados podem ser salvos em arquivos;
   - Dados salvos no arquivo "beck-node-api\bd\bd_veiculos.json"
 - Criar teste unitários utilizando Mocha (Node) para cada uma das operações (create, read, update, delete);
   - Teste criado em "beck-node-api\test\cars.spec.js"
   - OBS: Teste com falha.
 - Criar recursos rest para acesso aos dados dos veículos;
   - Feito
 - Criar projeto front-end utilizando a tecnologia Angular 5+;
   - Criado projeto utilizando Angular 8 (Diretório "front-end")
 - Criar lista de veiculos. Obs.: os dados deverão ser recuperados dos recursos rest definidos na aplicação backend.
   - Feito




->Para subir o servidor (node):
 - Dentro do repositório "beck-node-api", executar o comendo "npm start".

->Para subir a aplicação (Angular):
 - Dentro do repositório "front-end", executar o comendo "ng serve --open".
 - URL de acesso em servidor local "http://localhost:4200/"

->Para executar o teste unitário (Mocha):
 - Dentro do repositório "beck-node-api", executar o comendo "npm run test".
 
 
 ->Comandos executados na pasta "front-end" para baixar dependências Angular:
 - npm install -g @angular/cli
 - ng new angular-http

->Comandos executados na pasta "beck-node-api" para baixar dependências NodeJs, API e Test:
 - Baixar NodeJs
 - "npm install" - Instalar as dependências definidas no "package.json" 
 - npm install cors
 - npm install mocha
 - npm install --save-dev chai-subset
 
 

