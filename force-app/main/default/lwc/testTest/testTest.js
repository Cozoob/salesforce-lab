/**
 * Created by mkozub on 12.07.2022.
 */

import { LightningElement } from 'lwc';

export default class TestTest extends LightningElement {
    greeting = 'World';
    showData = true;

    changeHandler(event) {
        this.greeting = event.target.value;
    }

    changeShowData(event){
        this.showData = event.target.value;
        console.log(this.showData);
    }
}