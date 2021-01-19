import { Page, Browser, BrowserContext } from 'playwright';



export type It = {
    browser?: Browser;
    context: BrowserContext;
    page: Page;
};
