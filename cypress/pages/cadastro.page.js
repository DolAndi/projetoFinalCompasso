import Base from './_base.page';
import gerarFixtures from '../pages/gerarFixtures.js'
import {HOMEPAGE as HP} from './components/cadastro.elements.js'
import {CADASTRO as C} from './components/cadastro.elements.js'

export default class cadastroCommerce extends Base {
    static acessarSite() {
        cy.visit(`${Cypress.env('base_url')}`)
    }
    static entrarCadastro() {
        super.validarElemento(HP.BTN_CADASTRO)
        super.clickOnElement(HP.BTN_CADASTRO)
    }
    static validarCamposCadastro() {
        super.validarElemento(C.TXT_NOME)
        super.validarElemento(C.TXT_DATA)
        super.validarElemento(C.TXT_CPF)
        super.validarElemento(C.TXT_TELEFONE)
        super.validarElemento(C.TXT_CELULAR)
        super.validarElemento(C.TXT_EMAIL)
        super.validarElemento(C.TXT_EMAIL2)
        super.validarElemento(C.TXT_SENHA)
        super.validarElemento(C.TXT_SENHA2)
    } 
    static digitarCamposCadastro() {
        gerarFixtures.gerarUsuarioValido()
        cy.readFile(`cypress/fixtures/usuarioValido.json`).then((usuario) => {
            super.typeValue(C.TXT_NOME, usuario.valido.nome)
            super.typeValue(C.TXT_DATA, usuario.valido.data)
            super.typeValue(C.TXT_CPF, usuario.valido.cpf)
            super.typeValue(C.TXT_CELULAR, usuario.valido.telefoneCelular)
            super.typeValue(C.TXT_EMAIL, usuario.valido.email)
            super.typeValue(C.TXT_EMAIL2, usuario.valido.email)
            super.typeValue(C.TXT_SENHA, usuario.valido.senha)
            super.typeValue(C.TXT_SENHA2, usuario.valido.senha)
        })
        super.validarElemento(C.BTN_AVANÇAR)
        super.clickOnElement(C.BTN_AVANÇAR)
        cy.wait(5000)
        cy.url().then((url) => {
            if (url.includes('/cadastro')) {
                cy.reload()
                this.digitarCamposCadastro()
            }
        })
    }
    static validarCadastro() {
        super.validarUrl('/loja')
        cy.fixture('../fixtures/usuarioValido.json').then((usuario) => {
            super.validateElementText(HP.TXT_WELCOME, `Olá, ${usuario.valido.nome}`)
        })
    }
    static digitarCamposCadastroInvalido() {
        cy.fixture(`../fixtures/usuarioInvalido.json`).then((usuario) => {
            super.typeValue(C.TXT_NOME, usuario.invalido.nome)
            super.typeValue(C.TXT_DATA, usuario.invalido.data)
            super.typeValue(C.TXT_CPF, usuario.invalido.cpf)
            super.typeValue(C.TXT_CELULAR, usuario.invalido.telefoneCelular)
            super.typeValue(C.TXT_EMAIL, usuario.invalido.email)
            super.typeValue(C.TXT_EMAIL2, usuario.invalido.email)
            super.typeValue(C.TXT_SENHA, usuario.invalido.senha)
            super.typeValue(C.TXT_SENHA2, usuario.invalido.senha)
        })
    }
    static validarCadastroInvalido() {
        super.validarElemento(C.BTN_AVANÇAR)
        super.clickOnElement(C.BTN_AVANÇAR)
        super.validateElementText(C.TXT_ERROCPF, 'Para prosseguir com o cadastro, por favor, informe um CPF válido.')
    }
}