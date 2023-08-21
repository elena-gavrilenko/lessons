export class JSBlock {
        #container;
        constructor(){
            this.#container=document.createElement('div');
            this.#container.className='js-block';
        }
        render(){
            const mainTitle=document.createElement('h1');
            mainTitle.className='main-title';
            mainTitle.textContent='Javascript';

            const JSImageHTML=document.createElement('img');
            JSImageHTML.className='js-img';
            JSImageHTML.src='../assets/js_2.png'

            const foundText=document.createElement('p');
            foundText.className='found-text';
            foundText.textContent='С момента создания JS прошло';

            this.#container.append(mainTitle, JSImageHTML,foundText);

            return this.#container;
        }
}
