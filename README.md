# projetoFinalCompasso

Automatização dos testes do site Commerce Suite através do Cypress.
Commerce Suite: https://701523.commercesuite.com.br/

Instalação:
Cypress: npm i -D cypress 
Faker: npm i -D faker
Faker BR: npm install -dev faker-br
JSBrasil: npm i js-brasil
Mochawesome: npm i -D mochawesome mochawesome merge

Execução:
Testes com a interação da interface gráfica do Cypress: npm run cy:open --config watchForFileChanges=false 
Testes apresentados dentro do terminal: npm run cy:run
Gera um .json do report: npm run report:merge
Muda o arquivo gerado do merge (.json) para .html: npm run report:generate

Nome: Andriano Toazza
Email: anditoazza@gmail.com