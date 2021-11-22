/// <reference types="cypress" />

import gerarFixtures from '../pages/gerarFixtures.js'
import cadastroUsuario from '../pages/cadastro.page.js'
import CSLogin from '../pages/login.page.js'

describe("Deve realizar os testes da rota de cadastro de usuario", () => {
    describe('Deve realizar os testes positivos', () => {
        beforeEach(() => {
            cadastrarUsuario.acessarCommerceSuite()
        })
        it('Cadastro de usuário com CPF', () => {
            cadastrarUsuario.cadastroCorretoCPF()
        })
        it('Cadastro de usuário com CNPJ', () => {
            cadastrarUsuario.cadastroCorretoCNPJ()
        })
    })
    
    describe('Deve realizar os testes negativos', () => {
        beforeEach(() => {
            cadastrarUsuario.acessarCommerceSuite()
        })
        it('Cadastro inválido de usuário com CPF', () => {
            cadastrarUsuario.cadastroInvalidoCPF()
        })
        it('Cadastro inválido de usuário com CNPJ', () => {
            cadastrarUsuario.cadastroInvalidoCNPJ()
        })
    })
})  