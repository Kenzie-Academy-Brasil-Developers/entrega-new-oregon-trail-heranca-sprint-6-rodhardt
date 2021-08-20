const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler");

const { doutor } = require("./../../app");

let viajante = new Traveler("teste")
viajante.isHealthy = false


Given('um Doctor de nome {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    doutor.name = string
});

Given('ele sempre começa a sua viagem com {int} refeição', function (int) {
    // Given('ele sempre começa a sua viagem com {float} refeição', function (float) {
      // Write code here that turns the phrase above into concrete actions
    doutor.foodQuantity = int
});

When('o Doctor curar um Traveler doente', function () {
    // Write code here that turns the phrase above into concrete actions
    doutor.heal(viajante)
});

When('o Doctor tentar curar um Traveler já saudável', function () {
    // Write code here that turns the phrase above into concrete actions
    viajante.isHealthy = true
    doutor.heal(viajante)
});

Then('o Traveler deverá ficar saudável', function () {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(viajante.isHealthy, true)
});

Then('o Traveler deverá continuar saudável', function () {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(viajante.isHealthy, true)
});