//import Calculadora from "./pagina/calculadora";

export default class App{

    constructor(){

        console.log("Calculadora JS");
        this.init();

        //new Calculadora().criar();
    }
        init =( ) =>
        {
            var index = document.getElementById("index");
            index.style.position = "absolute";
            index.style.top = "10px";
            index.style.left = "10px";


        }
        

}

new App();