import Base from './_base.page';
import gerarFixtures from '../pages/gerarFixtures.js'
import {HOMEPAGE as HP} from './components/cadastro.elements.js'
import {LOGINPAGE as LP} from './components/login.elements.js'
import {ENDERECO as E} from './components/endereco.elements.js'

export default class enderecoCommerce extends Base {
    static validarEntrarEndereco() {
        cy.wait(4000)
        super.validarElemento(LP.BTN_SAIR, 3)
        super.clickOnElement(LP.BTN_SAIR, 3)
        cy.readFile(`cypress/fixtures/usuarioValido.json`).then((usuario) => {
            super.validateElementText(E.TXT_USER, usuario.valido.nome)
        })
        super.validarElemento(E.BTN_EDITAR)
        super.clickOnElement(E.BTN_EDITAR, 0)
        super.validarElemento(E.INPUT_CEP)
    }
    static cadastrarEndereco() {
        cy.wait(4000)   
        cy.get(E.INPUT_NOMEENDERECO).clear()
        cy.get(E.INPUT_CEP).clear()
        cy.readFile(`cypress/fixtures/enderecoValido.json`).then((endereco) => {
            super.typeValue(E.INPUT_CEP, endereco.valido.cep)
        })
        cy.wait(4000)
        super.typeValue(E.INPUT_NOMEENDERECO, "valido")
        cy.readFile(`cypress/fixtures/enderecoValido.json`).then((endereco) => {
            super.typeValue(E.INPUT_NUMERO, endereco.valido.numero)
        })
        super.clickOnElement(E.BTN_SALVAR)
        cy.wait(4000)
        cy.url().then((url) => {
            if (url.includes('/addresses/edit')) {
                cy.reload()
                cy.wait(4000)
                this.cadastrarEndereco()
            }
        })
    }  
    static cadastrarEnderecoInvalido() {
        cy.get(E.INPUT_CEP).clear()
        super.typeValue(E.INPUT_CEP, "105163198")
        cy.get(E.INPUT_NOMEENDERECO).clear()
        super.typeValue(E.INPUT_NOMEENDERECO, "Rua do sofrimento")
        cy.get(E.INPUT_NUMERO).clear()
        super.typeValue(E.INPUT_NUMERO, "123132")
        cy.get(E.INPUT_RUA).clear()
        super.typeValue(E.INPUT_RUA, "desespero")
        cy.get(E.INPUT_BAIRRO).clear()
        super.typeValue(E.INPUT_BAIRRO, "suprassumo")
        super.clickOnElement(E.BTN_SALVAR)
    }
    static validarEnderecoInvalido() {
        super.validateElementText(E.MSG_ERROR, 'O endereço não foi salvo! Tente novamente em alguns instantes.')
    }
}