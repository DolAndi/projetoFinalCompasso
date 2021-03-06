import Base from './_base.page';
import {CARRINHO as C} from './components/carrinho.elements.js'
import {CHECKOUT as CO} from './components/checkout.elements.js'
import {CHECKOUT_INVALIDO as CI} from './components/checkout.elements.js'

export default class checkoutCommerce extends Base {
    static validarLoginCheckout(){
        super.clickOnElement(C.BTN_CONTINUAR)
        super.validateElementText(CO.TXT_INFORME, 'Informe seu e-mail ou CPF/CNPJ  para prosseguir com sua compra' )
        super.validarElemento(CO.INPUT_USER)
        super.validarElemento(CO.BTN_CONTINUAR)
        super.validarElemento(CO.BTN_FACEBOOK)
        super.validarElemento(CO.BTN_MASTERPASS)
    }
    static logarEmailCheckout(){
        cy.fixture(`../fixtures/usuarioValido.json`).then((usuario) => {
            super.typeValue(CO.INPUT_USER, usuario.valido.email)
        })
        super.clickOnElement(CO.BTN_CONTINUAR)
        super.CPF_confirmacao()
    }
    static checkoutInvalidado() {
        super.validarElemento(CI.DIV_INVALIDO)
        super.validateElementText(CI.TXT_INVALIDO, 'Você errou as perguntas de segurança. Para continuar, efetue o login.')
        super.validarElemento(CI.INPUT_SENHA)
        super.validarElemento(CI.BTN_ESQUECEUSENHA)
    }
}