const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler");

const { cacador } = require("./../../app");

let viajante = new Traveler("teste")
let viajanteFoodInicial = viajante.foodQuantity

/** GIVEN */

Given('um Hunter de nome {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    cacador.name = string
});

Given('ele sempre começa a sua viagem com {int} refeições', function (int) {
    // Given('ele sempre começa a viagem com {float} refeições', function (float) {
      // Write code here that turns the phrase above into concrete actions
    cacador.foodQuantity = int
})

Given('ele sempre começa a sua viagem em estado saudável.', function () {
    // Write code here that turns the phrase above into concrete actions
    cacador.isHealthy
  });



/* WHEN */

When('o Hunter sair para caçar {int} vezes', function (int) {
    // When('o Hunter sair para caçar {float} vezes', function (float) {
      // Write code here that turns the phrase above into concrete actions
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('o Hunter parar para comer {int} vezes', function (int) {
    // When('o Hunter parar para comer {float} vezes', function (float) {
      // Write code here that turns the phrase above into concrete actions
      for (let contador = 0; contador < int; contador++) {
        cacador.eat();
    }
});

When('o Hunter compartilhar {int} refeições com um Traveler', function (int) {
    // When('o Hunter compartilhar {float} refeições com um Traveler', function (float) {
      // Write code here that turns the phrase above into concrete actions
      cacador.giveFood(viajante, int)
    });



Then('a sua quantidade de refeições deve ser igual a {int}', function (int) {
    // Then('a sua quantidade de refeições deve ser igual a {float}', function (float) {
      // Write code here that turns the phrase above into concrete actions
      assert.strictEqual(cacador.foodQuantity, int)   
});


Then('a quantidade de refeições do Hunter deve ser igual a {int}', function (int) {
    // Then('a sua quantidade de refeições do Hunter deve ser igual a {float}', function (float) {
      // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(cacador.foodQuantity, int)
});

Then('o Traveler deverá receber mais {int} refeições', function (int) {
    // Then('o Traveler deverá receber mais {float} refeições', function (float) {
      // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(viajante.foodQuantity, viajanteFoodInicial + int)      
});

Then('a quantidade de refeições do Hunter deve se manter como {int}', function (int) {
    // Then('a sua quantidade de refeições do Hunter deve se manter como {float}', function (float) {
      // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(cacador.foodQuantity, int)
});

Then('o Traveler não receberá refeições', function () {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(viajanteFoodInicial, 1)
  });

Then('o Hunter não ficará doente', function () {
    // Write code here that turns the phrase above into concrete actions
    let isHunterHealthy = cacador.isHealthy
    assert.strictEqual(isHunterHealthy, true)
});

Then('o Hunter ficará doente', function () {
    // Write code here that turns the phrase above into concrete actions
    let isHunterHealthy = cacador.isHealthy
    assert.strictEqual(isHunterHealthy, false)
});
