import fakerBr from 'js-brasil'
import faker from 'faker'

export const CADASTRO = {
    FORM_PESSOA_FISICA: "[id=PessoaFisica]",

    FORM_PESSOA_JURIDICA: "[id=PessoaJuridica]",
    FORM_RAZAO_SOCIAL: "[id=razao_social]",
    FORM_INSCRICAO_ESTADUAL: "[id=ie]",
    FORM_CNPJ: "[id=cnpj]",

    FORM_NOME: "[id=pf_nome_cliente]",
    FORM_CPF: "[id=pf_cpf_cliente]",

    FORM_EMAIL: "[id=email_cliente]",
    FORM_EMAIL_VERIFICACAO: "[id=email_cliente2]",

    FORM_SENHA: "[id=senha_cliente]",
    FORM_SENHA_VERIFICACAO: "",

    FORM_CEP_1: "[id=cep_1]",
    FORM_CEP_2: "[id=cep_2]",
    FORM_NUM_CASA: "[id=numero_endereco]",

    BOTAO_AVANCAR: "[class=botao-commerce-img]",

    URL_CADASTRO: "https://701523.commercesuite.com.br/cadastro",

    NOME: `${faker.name.firstName}` + `${faker.name.lastName}`,
    RAZAO_SOCIAL: `${faker.name.firstName}` + `${faker.name.lastName}`,
    CPF: fakerBr.CPF(),
    CNPJ: fakerBr.CNPJ(),
    IE: fakerBr.inscricaoestadual(),
    CEP: fakerBr.cep(),
    NUMERO_CASA: `${faker.datatype.number}`,
    EMAIL: fakerBr.EMAIL(),
    SENHA: `${faker.random.word}`,
}