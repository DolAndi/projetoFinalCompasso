/// <reference types="cypress" />

import gerarFixtures from '../pages/gerarFixtures.js'
import CSCadastro from '../pages/cadastro.page.js'
import CSLogin from '../pages/login.page.js'

describe('Deve realizar os testes da rota /login', () => {
    describe('Deve realizar os testes positivos', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        before(() => {
            CSCadastro.acessarCommerceSuite()
        })
        it('Deve efetuar o login de uma pessoa física com sucesso', () => {
            CSCadastro.validarUrl(`${Cypress.env('base_url')}`)
            CSLogin.validarEntrarLogin()  
            CSLogin.logar() 
            cy.wait(5000)
            CSLogin.validarLogin()  
        })
    })
    describe('Deve realizar os testes negativos', () => {
        it('Deve falhar o login de um usuário sem cadastro', () => {
            CSLogin.logarInvalido()
        })
    })
})