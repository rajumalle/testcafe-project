import { Selector } from 'testcafe';

fixture `AC4 Fixture`
    .page `https://start.duckduckgo.com` ;

  
    test('AC4- Check Themes link exists in Menu', async t =>{
       
        const MenuLink=Selector('a').withAttribute('class','header__button--menu  js-side-menu-open');
        const Themes =Selector('a').withText('Themes').exists;
        await t
            .wait(2000)
            .maximizeWindow()
            .click(MenuLink)
            .wait(2000)
            .takeScreenshot('AC4Screenshot.png')
            .expect(Themes).ok();
        console.log("Themes link exists on page")
       
    });