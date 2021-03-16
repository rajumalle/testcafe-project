import { Selector } from 'testcafe';

export default class DevExpress{
    constructor(){

        this.SearchBox = Selector('#developer-name');

        this.CheckBox1 = Selector('input#remote-testing');
        this.CheckBox2 = Selector('input#reusing-js-code');
        this.CheckBox3 = Selector('input#background-parallel-testing');

        this.RadioBox1 = Selector('input#windows');
        this.RadioBox2 = Selector('input#macos');

        this.DropDown =  Selector('#preferred-interface');
        this.BothOption = Selector('option').withText('Both');

        this.FinalCheckBox = Selector('input#tried-test-cafe')

        this.TextAreaBox = Selector('#comments');


    }
}