import { Selector } from 'testcafe';

fixture `AC6 Fixture`

    test('AC6- Search results of of diff types data', async t =>{

        const SearchBox = Selector('input#search_form_input_homepage');
        const MagnifyingGlassButton = Selector('input#search_button_homepage');
        const data = [
            "Back to the future",
            "BMX Bandits",
            "Rocky IV",
            "Short Circuit",
            "The Terminator",
            "Ferris Bueller's day off"
        ];

        for (var i=0; i<data.length;i++){
            await t
                .navigateTo('https://start.duckduckgo.com')
                .wait(5000)
                .maximizeWindow()
                .typeText(SearchBox,data[i])
                .click(MagnifyingGlassButton)
                .wait(3000)
                .takeScreenshot('AC6Screenshot'+i+'.png');     
        }
         console.log("All the mentioned items are searched, please check screenshots");
      
    });