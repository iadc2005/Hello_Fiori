/*global QUnit*/

sap.ui.define([
	"f/controller/BlankPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BlankPage Controller");

	QUnit.test("I should test the BlankPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
