/// <reference types="cypress" />

import cadastroCommerce from '../pages/cadastro.page.js'
import loginCommerce from '../pages/login.page.js'
import enderecoCommerce from '../pages/endereco.page.js'

describe('Deve realizar os testes da rota de endereço', () => {
    describe('Deve realizar os testes positivos', () => {
        before(() => {
            cadastroCommerce.acessarSite()
            loginCommerce.validacaoLogin()  
            loginCommerce.logarValido()
            cadastroCommerce.validarUrl('/my-account')
        })
        it('Deve efetuar um cadastro de um novo endereço', () => {
            enderecoCommerce.validarEntrarEndereco()
            enderecoCommerce.cadastrarEndereco()
        })
    }) 
    describe('Deve realizar os testes negativos', () => {
        before(() => {
            cadastroCommerce.acessarSite()
            loginCommerce.validacaoLogin()  
            loginCommerce.logarValido()
            cadastroCommerce.validarUrl('/my-account')
        })
        it('Deve falhar no cadastro de um endereço com dados invalidados', () => {
            enderecoCommerce.validarEntrarEndereco()
            cy.wait(4000)
            enderecoCommerce.cadastrarEnderecoInvalido()
            enderecoCommerce.validarEnderecoInvalido()
        })
    })
})