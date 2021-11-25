/// <reference types="cypress" />

import gerarFixtures from '../pages/gerarFixtures.js'
import cadastroCommerce from '../pages/cadastro.page.js'
import loginCommerce from '../pages/login.page.js'

describe('Deve realizar os testes da rota', () => {
    describe('Deve realizar os testes positivos', () => {
        before(() => {
            cadastroCommerce.acessarSite()
        })
        it('Deve cadastrar uma pessoa com sucesso', () => {
            cadastroCommerce.validarUrl(`${Cypress.env('base_url')}`)
            cadastroCommerce.entrarCadastro()
            cadastroCommerce.validarCamposCadastro()
            cadastroCommerce.digitarCamposCadastro()
            cy.wait(5000)
            cadastroCommerce.validarCadastro()      
        })
    }) 
    describe('Deve realizar os testes negativos', () => {
        it('Deve falhar ao cadastrar um usuário com CPF invalidado', () => {
            gerarFixtures.gerarUsuarioInvalido()
            loginCommerce.logout()
            cadastroCommerce.entrarCadastro()
            cadastroCommerce.validarCamposCadastro()
            cadastroCommerce.digitarCamposCadastroInvalido()
            cadastroCommerce.validarCadastroInvalido()
        })
    })
})