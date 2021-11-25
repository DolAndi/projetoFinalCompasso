/// <reference types="cypress" />

import cadastroCommerce from '../pages/cadastro.page.js'
import carrinhoCommerce from '../pages/carrinho.page.js'
import checkoutCommerce from '../pages/checkout.page.js';
import loginCommerce from '../pages/login.page.js'

describe('Deve realizar os testes da rota', () => {
    describe('Deve efetuar os testes positivos', () => {
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
})