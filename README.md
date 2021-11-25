# projetoFinalCompasso

Automatização dos testes do site Commerce Suite através do Cypress.

Commerce Suite: https://701523.commercesuite.com.br/

--------------------------------------------------------------------------------------------------------------

Instalação:

Nodejs: npm init -y

Cypress: npm i -D cypress 

Faker: npm i -D faker

Faker BR: npm i -dev faker-br

JSBrasil: npm i js-brasil

Mochawesome: npm i --save-dev mochawesome mochawesome-merge mochawesome-report-generator

CypressMochawesomeReporter: npm i --save-dev cypress-mochawesome-reporter

--------------------------------------------------------------------------------------------------------------

Execução:

Testes com a interação da interface gráfica do Cypress: npm run cy:open --config watchForFileChanges=false 

Testes apresentados dentro do terminal: npm run cy:run

Gerar um .json do report: npm run report:merge

Muda o arquivo gerado do merge .json para .html: npm run report:generate

--------------------------------------------------------------------------------------------------------------

Nome: Andriano Toazza

Email: anditoazza@gmail.com