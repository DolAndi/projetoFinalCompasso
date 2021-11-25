/// <reference types="cypress" />

import cadastroCommerce from '../pages/cadastro.page.js'
import carrinhoCommerce from '../pages/carrinho.page.js'
import checkoutCommerce from '../pages/checkout.page.js';
import loginCommerce from '../pages/login.page.js'

describe('Deve realizar os testes de checkout', () => {
    describe('Deve efetuar o teste positivo', () => {
        before(() => {
            cadastroCommerce.acessarSite()
            carrinhoCommerce.validarProdutos()
            carrinhoCommerce.validarModal()
            carrinhoCommerce.validarCarrinho()
        })
        it('Deve realizar o checkout da aplicação, logando com email', () => {
            checkoutCommerce.validarLoginCheckout()
            checkoutCommerce.logarEmailCheckout()
        })
    })
    describe('Deve efetuar o teste negativo', () => {
        before(() => {
            cadastroCommerce.acessarCommerceSuite()
            carrinhoCommerce.validarProdutos()
            carrinhoCommerce.validarModal()
            carrinhoCommerce.validarCarrinho()
        })
        it('Deve tentar validar o login com um CPF inválido', () => {
            checkoutCommerce.validarLoginCheckout()
            checkoutCommerce.CPFcheckoutInv()
            checkoutCommerce.checkoutInvalidado()
        })
    })
})