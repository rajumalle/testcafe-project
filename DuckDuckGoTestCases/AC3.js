import { Selector } from 'testcafe';

fixture `AC3 Fixture`
    .page `https://start.duckduckgo.com` ;

  
    test('AC3- Search results of supercalafragalistic', async t =>{
       
        const SearchBox = Selector('input#search_form_input_homepage');
        const FirstSearchResult=Selector('div').withText('supercalifragilisticexpialidocious').exists;
        await t
            .wait(2000)
            .maximizeWindow()
            .typeText(SearchBox,'supercalafragalistic')
            .wait(3000)
            .takeScreenshot('AC3Screenshot.png')
            .expect(FirstSearchResult).ok();
            
        console.log("Content of first element with text as supercalifragilisticexpialidocious");
      
    });