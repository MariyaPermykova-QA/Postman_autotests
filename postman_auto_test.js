

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("время отклика 400ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(400);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("id");
});

var jsonData = pm.response.json();
pm.collectionVariables.set("id_pokemon", jsonData.id);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("время отклика 400ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(400);
});
pm.test("Ищу атаку 1", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData[1].attack).to.eql("1.0");
});