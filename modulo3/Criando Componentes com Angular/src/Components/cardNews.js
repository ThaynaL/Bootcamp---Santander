class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componenteBase = document.createElement('div');
        componenteBase.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const autor = document.createElement('span');
        autor.textContent = "By " + (this.getAttribute('autor') || "Anonymous");

        const tituloL = document.createElement('a'); 
        tituloL.textContent = this.getAttribute('titulo');
        tituloL.href = this.getAttribute('link-titulo');

    
        const textoN = document.createElement('p');
        textoN.textContent = this.getAttribute('conteudo');
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(tituloL);
        cardLeft.appendChild(textoN);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');

        const imagemN = document.createElement('img');
        imagemN.src = (this.getAttribute('imagem') || "assets/image-default.png");
        imagemN.alt = (this.getAttribute('descricao') || "Imagem padrão");

        cardRight.appendChild(imagemN);

        componenteBase.appendChild(cardLeft);
        componenteBase.appendChild(cardRight);

        return componenteBase;
    }

    styles(){
        const style = document.createElement('style');

        style.textContent = `
        .card{
            width: 720px;
            display: flex;
            margin: auto;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            -webkit-box-shadow: 14px 31px 23px 4px rgba(0,0,0,0.54);
            -moz-box-shadow: 14px 31px 23px 4px rgba(0,0,0,0.54);
            box-shadow: 14px 31px 23px 4px rgba(0,0,0,0.54);
        
        }
        .card_left{
            display: flex;
            flex-direction: column;
            margin: 4rem;
            justify-content: center;
            text-align: justify;
            margin-right: 1rem;
            padding-left: 5rem;
        }
        .card_left > span{
            font-weight: 200;
        }
        .card_left > a{
            margin-top: 1rem;
            font-size: 2rem;
            color: black;
            text-decoration: none;
        }
        .card_left > p{
            color: rgb(70, 70, 70);
        }
        .card_right > img{
            margin-right: 8rem;
        }

        `;

        return style;
    }

}

customElements.define('card-news', CardNews);