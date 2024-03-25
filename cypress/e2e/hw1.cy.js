/// <reference types="cypress" />

import { SelectablePage } from "../pageObjects/selectable.page";

describe('homework 1', () => {
	it('selectable scenario', () => {
		SelectablePage.visit();
		SelectablePage.gridTab.click();
		SelectablePage.gridGetElement("Two").click();
		SelectablePage.gridGetElement("Four").click();
		SelectablePage.gridGetElement("Six").click();
		SelectablePage.gridGetElement("Eight").click();
		
		SelectablePage.gridGetElement("Two").should("have.class", "active");
		SelectablePage.gridGetElement("Four").should("have.class", "active");
		SelectablePage.gridGetElement("Six").should("have.class", "active");
		SelectablePage.gridGetElement("Eight").should("have.class", "active");

		SelectablePage.gridGetElement("One").should("not.have.class", "active");
		SelectablePage.gridGetElement("Three").should("not.have.class", "active");
		SelectablePage.gridGetElement("Five").should("not.have.class", "active");
		SelectablePage.gridGetElement("Seven").should("not.have.class", "active");
		SelectablePage.gridGetElement("Nine").should("not.have.class", "active");

	});
});