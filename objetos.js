class Calebe {
    constructor (site) {
        this.site = site //variavel de interface
        //this.parametro2 = parametro2 //variavel de interface
        //açoes
    }

    exibirSite () {
        //açoes
        window.open(this.site);
    }
   //metodo2 () { //açoes }
}

var novoCalebe = new Calebe ("https://br.pinterest.com/pin/221520875415729927/");
novoCalebe.exibirSite();