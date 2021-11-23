/// <reference types="cypress" />

import CSCadastro from '../pages/cadastro.page.js'
import carrinhoCommerce from '../pages/carrinho.page.js'

describe('Deve realizar os testes da rota', () => {
    describe('Deve realizar os testes positivos', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        before(() => {
            CSCadastro.acessarCommerceSuite()
        })
        it('Deve validar os elementos e adicionar um produto ao carrinho com sucesso', () => {
            carrinhoCommerce.validarProdutos()
            carrinhoCommerce.validarModal()
            carrinhoCommerce.validarCarrinho()
        })
        it('Deve inserir um frete válido no carrinho', () => {
            carrinhoCommerce.inserirFrete()
        })
    }) 
    describe('Deve realizar os testes negativos', () => {
        before(() => {
            CSCadastro.acessarCommerceSuite()
            carrinhoCommerce.validarProdutos()
            carrinhoCommerce.validarModal()
            carrinhoCommerce.validarCarrinho()
        })
        it('Deve tentar usar um CEP inválido no frete', () => {
            carrinhoCommerce.inserirFreteInvalido()
            carrinhoCommerce.validarCepInvalido()
        })
    })
})