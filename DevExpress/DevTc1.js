import {Selector} from 'testcafe';
import DevExpress from '../ObjectsRepository/DevExpress_Model'
const devExpress = new DevExpress();

fixture `Dev Express fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

    test('Dev Express Test case 1',  async t =>{
        await t
            .wait(2000)
            .maximizeWindow()
            .typeText(devExpress.SearchBox,'ARJUN');

        await t
            .click(devExpress.CheckBox1)
            .click(devExpress.CheckBox2)
            .click(devExpress.CheckBox3)
            .click(devExpress.RadioBox1)
            .click(devExpress.RadioBox2)
            .click(devExpress.DropDown)
            .click(devExpress.BothOption);

        await t
            .click(devExpress.FinalCheckBox)
            .wait(2000)
            .typeText(devExpress.TextAreaBox,'Hello Test cafe Project')
            .wait(5000);



    });
