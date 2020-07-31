class HeaderModule extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        const css = document.createElement('style');
        css.innerHTML = `
h1 {
    font-size: 20px;
    font-family: Arial;
    color: grey;
}

p {
    font-family: Arial;
    line-height: 20px;
}
        `;
        this.shadow.appendChild(css);

        // create a container for the header
        const headerContainer = document.createElement('div');

        // create the header elements
        const titleDiv = document.createElement('h1');
        titleDiv.innerHTML = this.headerTitle;
        headerContainer.appendChild(titleDiv);

        const subtitleDiv = document.createElement('p');
        subtitleDiv.innerHTML =  this.headerSubtitle;
        headerContainer.appendChild(subtitleDiv);

        this.shadow.appendChild(headerContainer);
    }

    get headerTitle() { return this.getAttribute('title'); }
    get headerSubtitle() { return this.innerHTML; }
}

customElements.define('plugin-header', HeaderModule);

export { HeaderModule };