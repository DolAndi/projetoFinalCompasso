import faker from "faker"
import fakerbr from "faker-br"
const { fakerBr } = require('js-brasil');
import Base from './_base.page'

export default class gerarFixtures extends Base {
    static gerarUsuarioValido () {
        cy.writeFile('cypress/fixtures/usuarioValido.json', {
            'valido' :
                 {
                "nome": `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
                "data": `${fakerBr.data()}`,
                "cpf": `${fakerBr.cpf()}`,
                "telefoneFixo": `${fakerBr.telefone()}`,
                "telefoneCelular": `${fakerBr.celular()}`,
                "email": `${fakerbr.internet.email()}`,
                "senha": `${faker.internet.password()}`
              }
          })
    } 
    static gerarUsuarioInvalido () {
      cy.writeFile('cypress/fixtures/usuarioInvalido.json',  {
          'invalido' :
               {
              "nome": `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
              "data": `${fakerBr.data()}`,
              "cpf": `${fakerbr.name.firstName()}`,
              "telefoneFixo": `${fakerBr.telefone()}`,
              "telefoneCelular": `${fakerBr.celular()}`,
              "email": `${fakerbr.internet.email()}`,
              "senha": `${faker.internet.password()}`
            }
        })
      }
    static gerarCep () {
      cy.writeFile('cypress/fixtures/enderecoValido.json',  {
        'valido' :
              {
            "cep": `${fakerBr.cep()}`,
            "numero": `${faker.datatype.number()}`
          }
      })
    }
  }