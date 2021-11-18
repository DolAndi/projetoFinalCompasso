/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err)
  return false
  })



  
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {

}
