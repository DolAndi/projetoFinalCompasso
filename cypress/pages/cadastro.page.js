import Base from './_base.page'
import { CADASTRO } from './components/cadastro.elements'

export default class cadastroUsuario extends Base {
    static acessarCommerceSuite() {
        cy.visit(`${Cypress.env('base_url')}`)
    }

    static cadastroCorretoCPF() {
        super.clickOnElement(CADASTRO.FORM_PESSOA_FISICA)
        super.typeValue(CADASTRO.FORM_NOME, CADASTRO.NOME)
        super.typeValue(CADASTRO.FORM_CPF, CADASTRO.CPF)
        super.typeValue(CADASTRO.FORM_EMAIL, CADASTRO.FORM_EMAIL)
        super.typeValue(CADASTRO.FORM_EMAIL_VERIFICACAO, CADASTRO.FORM_EMAIL)
        super.typeValue(CADASTRO.FORM_CEP_1, CADASTRO.CEP)
        super.typeValue(CADASTRO.FORM_CEP_2, CADASTRO.CEP)
        super.typeValue(CADASTRO.FORM_NUM_CASA, CADASTRO.NUMERO_CASA)
    }

    static cadastroCorretoCNPJ() {
        super.clickOnElement(CADASTRO.FORM_PESSOA_JURIDICA)
        super.typeValue(CADASTRO.FORM_RAZAO_SOCIAL, CADASTRO.RAZAO_SOCIAL)
        super.typeValue(CADASTRO.FORM_INSCRICAO_ESTADUAL, CADASTRO.IE)
        super.typeValue(CADASTRO.FORM_CNPJ, CADASTRO.CNPJ)
        super.typeValue(CADASTRO.FORM_NOME, CADASTRO.NOME)
        super.typeValue(CADASTRO.FORM_CPF, CADASTRO.CPF)
        super.typeValue(CADASTRO.FORM_EMAIL, CADASTRO.FORM_EMAIL)
        super.typeValue(CADASTRO.FORM_EMAIL_VERIFICACAO, CADASTRO.FORM_EMAIL)
        super.typeValue(CADASTRO.FORM_CEP_1, CADASTRO.CEP)
        super.typeValue(CADASTRO.FORM_CEP_2, CADASTRO.CEP)
        super.typeValue(CADASTRO.FORM_NUM_CASA, CADASTRO.NUMERO_CASA)
    }

    static cadastroInvalidoCPF() {
        super.clickOnElement(CADASTRO.FORM_PESSOA_FISICA)
        super.typeValue(CADASTRO.FORM_NOME, CADASTRO.NOME)
        super.typeValue(CADASTRO.FORM_CPF, '0000000')
        super.typeValue(CADASTRO.FORM_EMAIL, 'random_user')
        super.typeValue(CADASTRO.FORM_EMAIL_VERIFICACAO, CADASTRO.FORM_EMAIL)
        super.typeValue(CADASTRO.FORM_CEP_1, CADASTRO.CEP)
        super.typeValue(CADASTRO.FORM_CEP_2, CADASTRO.CEP)
        super.typeValue(CADASTRO.FORM_NUM_CASA, CADASTRO.NUMERO_CASA)
    }

    static cadastroInvalidoCNPJ() {
        super.clickOnElement(CADASTRO.FORM_PESSOA_JURIDICA)
        super.typeValue(CADASTRO.FORM_RAZAO_SOCIAL, 'random_user')
        super.typeValue(CADASTRO.FORM_INSCRICAO_ESTADUAL, CADASTRO.IE)
        super.typeValue(CADASTRO.FORM_CNPJ, '0000000')
        super.typeValue(CADASTRO.FORM_NOME, 'random_user')
        super.typeValue(CADASTRO.FORM_CPF, '0000000')
        super.typeValue(CADASTRO.FORM_EMAIL, CADASTRO.FORM_EMAIL)
        super.typeValue(CADASTRO.FORM_EMAIL_VERIFICACAO, CADASTRO.FORM_EMAIL)
        super.typeValue(CADASTRO.FORM_CEP_1, CADASTRO.CEP)
        super.typeValue(CADASTRO.FORM_CEP_2, CADASTRO.CEP)
        super.typeValue(CADASTRO.FORM_NUM_CASA, CADASTRO.NUMERO_CASA)
    }
}