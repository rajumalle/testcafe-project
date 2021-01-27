import { Selector } from './DuckDuckGoTestCases/node_modules/testcafe';
import { Colors } from 'colors'

fixture `Getting Started`
   // .page `https://start.duckduckgo.com` ;
    .page `https://devexpress.github.io/testcafe/example/`;
 
    const searchBox= Selector('input#search_form_input_homepage');
    const searchBUtton=Selector('input#search_button_homepage');
    const checkBox1=Selector('input#remote-testing');
    const hoverObject=Selector('a').withText('Text of HoveringTab');

    const headeObject=Selector('h1');
    const headerTextObject=Selector('header p');



    test('My First Test', async t =>{
        await t
        //.maximizeWindow()
       // .wait(2000)
       // .typeText(searchBox,'Full')
        //.typeText(searchBox,'Stack QA',{speed:0.1})
        //.typeText(searchBox,'Stack QA',{replace:true})

          ///.takeScreenshot('screenshot1.png')
       /// .navigateTo('https://start.duckduckgo.com')
       // .takeScreenshot('screenshot2.png')
        .click(checkBox1)
        .wait(3000);
        const headerTitle= await headeObject.innerText;
        const headerText=await headerTextObject.innerText;
        console.log(headerTitle)
        console.log(headerText.rainbow)

    });
