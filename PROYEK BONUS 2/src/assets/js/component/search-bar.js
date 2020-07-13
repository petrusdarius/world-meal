class searchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode="open"})
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElements").value
    }

    render() {
        this.shadowDOM.innerHTML = `
        <input type="text" placeholder="search" class="search">
        <a href="#"><span class="fas fa-search"></span></a>`
    }
}

customElements.define("search-bar",searchBar);