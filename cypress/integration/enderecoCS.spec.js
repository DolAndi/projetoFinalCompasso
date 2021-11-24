/// <reference types="cypress" />

import cadastroCommerce from '../pages/cadastro.page.js'
import loginCommerce from '../pages/login.page.js'
import enderecoCommerce from '../pages/endereco.page.js'

describe('Deve realizar os testes da rota', () => {
    describe('Deve realizar os testes positivos', () => {
        before(() => {
            cadastroCommerce.acessarCommerceSuite()
            loginCommerce.validarEntrarLogin()  
            loginCommerce.logar()
            cadastroCommerce.validarUrl('/my-account')
        })
        it('Deve efetuar um cadastro de um novo endereço', () => {
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
        it('Deve falhar no cadastro de um endereço com dados invalidados', () => {
            enderecoCommerce.validarEntrarEndereco()
            enderecoCommerce.cadastrarEnderecoInvalido()
            enderecoCommerce.validarEnderecoInvalido()
        })
    })
})