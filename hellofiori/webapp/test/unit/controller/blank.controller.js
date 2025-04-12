/*global QUnit*/

sap.ui.define([
	"hellofiori/controller/blank.controller"
], function (Controller) {
	"use strict";

	QUnit.module("blank Controller");

	QUnit.test("I should test the blank controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
