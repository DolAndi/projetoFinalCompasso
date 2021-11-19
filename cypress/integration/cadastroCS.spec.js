/// <reference types="cypress" />

import gerarFixtures from '../pages/gerarFixtures.js'
import CSCadastro from '../pages/cadastro.page.js'
import CSLogin from '../pages/login.page.js'

describe("Deve realizar os testes da rota de cadastro de usuario", () => {
    describe('Deve realizar os testes positivos', () => {
        before(() => {
            CSCadastro.acessarCommerceSuite()
        })
        it('Deve efetuar o cadastro de uma pessoa física com sucesso', () => {
            CSCadastro.validarUrl(`${Cypress.env('base_url')}`)
            CSCadastro.entrarCadastro()
            CSCadastro.validarCamposCadastro()
            CSCadastro.digitarCamposCadastro()
            cy.wait(5000)
            CSCadastro.validarCadastro()      
        })
    })

    describe('Deve realizar os testes positivos', () => {
        it('Deve falhar no cadastro de um usuário com CPF inválido', () => {
            gerarFixtures.gerarUsuarioInvalido()
            CSLogin.logout()
            CSCadastro.entrarCadastro()
            CSCadastro.validarCamposCadastro()
            CSCadastro.digitarCamposCadastroInvalido()
            CSCadastro.validarCadastroInvalido()
        })
    })
})  