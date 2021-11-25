/// <reference types="cypress" />

import cadastroCommerce from '../pages/cadastro.page.js'
import carrinhoCommerce from '../pages/carrinho.page.js'

describe('Deve realizar os testes da rota de carrinho', () => {
    describe('Deve realizar os testes positivos', () => {
        before(() => {
            cadastroCommerce.acessarSite()
        })
        it.only('Deve efetuar validações e adição um produto ao carrinho com sucesso', () => {
            carrinhoCommerce.validarProdutos()
            carrinhoCommerce.validarModal()
            carrinhoCommerce.validarCarrinho()
        })
        it.only('Deve inserir um frete válido no carrinho', () => {
            carrinhoCommerce.inserirFrete()
        })
    }) 
    describe('Deve realizar os testes negativos', () => {
        before(() => {
            cadastroCommerce.acessarSite()
            carrinhoCommerce.validarProdutos()
            carrinhoCommerce.validarModal()
            carrinhoCommerce.validarCarrinho()
        })
        it('Deve tentar usar um CEP invalidado', () => {
            carrinhoCommerce.inserirFreteInvalido()
            carrinhoCommerce.validarCepInvalido()
        })
    })
})