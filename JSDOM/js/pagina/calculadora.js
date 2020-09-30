//var index = document.getElementById("index");

function criarCalculadora(){

    let visor = criarDivComInput({
        id:"Visor",
        class:"",
        position: "absolute",
        marginTop:"10px",
        text:"Visor :",
        placeholder:" ",
        type: text
    });

    index.append(visor);

}