import { LinkedList } from '@algoasaurujs/tsds';

export class Page {
    public url: string
    public history: LinkedList<string> | undefined

    constructor(url: string, history: LinkedList<string> | undefined = undefined) {
        this.history = history;
        this.url = url;
    }

    public async visit(pageContext: any) {
        await pageContext.goto(this.url);
        const title = await pageContext.locator('title').innerText();
        console.log(title)

        const hrefs = await pageContext.locator('a').all()

        let duplicatedLinks: string[] = [''];

        for (const anchor of hrefs) {
            const href = await anchor.getAttribute('href');
            duplicatedLinks.push(href as string);
        }

        const links = Array.from(new Set(duplicatedLinks))
        links.forEach(link => {
            console.log(link)
        })
    }
}