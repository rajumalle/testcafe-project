import { Selector } from 'testcafe';

import DuckPage from '../ObjectsRepository/Duck_Model';
const duckPage = new DuckPage();

fixture `AC2 Fixture`
    .page `https://start.duckduckgo.com` ;

    test('AC2- Search results of super keyword', async t =>{
       
        await t
            .wait(1000)
            .maximizeWindow()
            .typeText(duckPage.SearchBox,'super')
            .wait(3000)
            .takeScreenshot('AC2Screenshot.png');
 
        var searchResult = Selector('span').withAttribute('class','t-normal');
        var numberOfSuggestionItems=searchResult.count;
        console.log('Number Of SuggestionItems found ->');
        console.log(numberOfSuggestionItems.count);
        if(numberOfSuggestionItems==10){
            console.log('Number Of SuggestionItems found 10');
        }else{
            console.log('Number Of SuggestionItems found are not equal to 10');
        }
            // var resultCount = Selector('form#search_form_homepage')
            //                 .child(Selector('div').withAttribute('class','search__autocomplete'))
            //                 .child(Selector('div').withAttribute('class','acp-wrap js-acp-wrap'))
            //                 .child(Selector('div').withAttribute('class','acp'));

    });
