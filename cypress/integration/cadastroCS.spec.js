/// <reference types="cypress" />

import gerarFixtures from '../pages/gerarFixtures.js'
import cadastroCommerce from '../pages/cadastro.page.js'
import loginCommerce from '../pages/login.page.js'

describe('Deve realizar os testes da rota', () => {
    describe('Deve realizar os testes positivos', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        before(() => {
            cadastroCommerce.acessarCommerceSuite()
        })
        it('Deve cadastrar uma pessoa física com sucesso', () => {
            cadastroCommerce.validarUrl(`${Cypress.env('base_url')}`)
            cadastroCommerce.entrarCadastro()
            cadastroCommerce.validarCamposCadastro()
            cadastroCommerce.digitarCamposCadastro()
            cy.wait(5000)
            cadastroCommerce.validarCadastro()      
        })
    }) 
    describe('Deve realizar os testes negativos', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        it('Deve tentar cadastrar um usuário com CPF inválido', () => {
            gerarFixtures.gerarUsuarioInvalido()
            loginCommerce.logout()
            cadastroCommerce.entrarCadastro()
            cadastroCommerce.validarCamposCadastro()
            cadastroCommerce.digitarCamposCadastroInvalido()
            cadastroCommerce.validarCadastroInvalido()
        })
    })
})