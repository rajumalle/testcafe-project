import { Selector } from 'testcafe';

fixture `AC5 Fixture`
    .page `https://start.duckduckgo.com` ;

  
    test('AC5- Check Themes link exists in Menu', async t =>{
       
        const MenuLink=Selector('a').withAttribute('class','header__button--menu  js-side-menu-open');
        const Themes =Selector('a').withText('Themes');

        const DarkModeTheme = Selector('div').withAttribute('data-theme-id','d');
        const ThemeChangeNotification = Selector('div')
                        .withAttribute('class','notification__text  js-notification-text').exists;

        await t
            .wait(2000)
            .maximizeWindow()
            .click(MenuLink)
            .wait(2000)
            .click(Themes)
            .wait(3000)
            .click(DarkModeTheme)
            .wait(1000)
            .takeScreenshot('AC5Screenshot.png')
            .expect(ThemeChangeNotification).ok();

        console.log("Background changed to Dark")
       
    });