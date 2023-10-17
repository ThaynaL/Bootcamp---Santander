class titleDynamic extends  HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode:'open' });

        //construir o component
        const componenteBase = document.createElement('h1');
        componenteBase.textContent = this.getAttribute('titulo');

        //estilizar o component
        const style = document.createElement('style');
        style.textContent = `
            h1{
                color: blue;
            }
        `;
        //enviar para o shodow
        shadow.appendChild(componenteBase);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', titleDynamic);