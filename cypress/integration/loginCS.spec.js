/// <reference types="cypress" />

import gerarFixtures from '../pages/gerarFixtures.js'
import cadastroCommerce from '../pages/cadastro.page.js'
import loginCommerce from '../pages/login.page.js'

describe('Deve realizar os testes da rota /login',() => {
    describe('Deve realizar os testes positivos',() => {
        before(() => {
            cadastroCommerce.acessarCommerceSuite()
        })
        it('Deve efetuar o login de uma pessoa física com sucesso',() => {
            cadastroCommerce.validarUrl(`${Cypress.env('base_url')}`)
            loginCommerce.validacaoLogin()  
            loginCommerce.logarValido() 
            cy.wait(5000)
            loginCommerce.validarLogin()  
        })
    }) 
    describe('Deve realizar os testes negativos',() => {
        it('Deve falhar o login de um usuário',() => {
            loginCommerce.logarInvalido()
        })
    })
})