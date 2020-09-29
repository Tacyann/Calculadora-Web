import Button from "./button";
import Input from "./input";
import Label from "./label";

export default class Div{

    criar = (props)=>{

        let div = document.createElement("div");

        if(props.id){
            div.setAttribute("id", props.id);
        }

        if(props.class){
            div.setAttribute("class", props.class);
        }

        if(props.position){
            div.style.position = props.position;
        }

        if(props.marginTop){
            div.style.marginTop = props.marginTop;
        }

        if(props.marginLeft){
            div.style.marginLeft = props.marginLeft;
        }

        return div;
    }


    
}