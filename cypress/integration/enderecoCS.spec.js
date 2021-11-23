/// <reference types="cypress" />

//ToDo: Implementar a saida do ciclo infinito de error

import cadastroCommerce from '../pages/cadastro.page.js'
import loginCommerce from '../pages/login.page.js'
import enderecoCommerce from '../pages/endereco.page.js'

describe('Deve realizar os testes da rota', () => {
    describe('Deve realizar os testes positivos', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        before(() => {
            cadastroCommerce.acessarCommerceSuite()
            loginCommerce.validarEntrarLogin()  
            loginCommerce.logar()
            cadastroCommerce.validarUrl('/my-account')
        })
        it('Deve cadastrar um novo endereço com sucesso', () => {
            enderecoCommerce.validarEntrarEndereco()
            enderecoCommerce.cadastrarEndereco()
        })
    }) 
    describe('Deve realizar os testes negativos', () => {
        before(() => {
            cadastroCommerce.acessarCommerceSuite()
            loginCommerce.validarEntrarLogin()  
            loginCommerce.logar()
            cadastroCommerce.validarUrl('/my-account')
        })
        it('Deve tentar cadastrar um CEP com caracteres inválidos', () => {
            enderecoCommerce.validarEntrarEndereco()
            enderecoCommerce.cadastrarEnderecoInvalido()
            enderecoCommerce.validarEnderecoInvalido()
        })
    })
})