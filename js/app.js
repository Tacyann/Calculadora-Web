export default class App{

    constructor(){

        console.log("entrou app");

        this.init();

        new AbortController();
    }


    init =() =>{
        var index = document.getElementById("index");
        index.style.position ="fixed";
        index.style.top= "20%";
        index.style.left ="50%";
        index.style.width = "520px";
        index.style.height = "800px";
        index.style.marginTop = "-9em";
        index.style.marginLeft ="-17em";

    }
}

new App();