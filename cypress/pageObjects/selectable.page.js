import { BasePage } from "./base.page";

export class SelectablePage extends BasePage {
	static get url(){
		return "/selectable";
	}

	static get gridTab(){
		return cy.get("#demo-tab-grid");
	}
	
	static get gridContainer(){
		return cy.get("#gridContainer");
	}

	static gridGetElement(content){
		return this.gridContainer.contains(content);
	}
}