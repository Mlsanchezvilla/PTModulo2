import React, {Component} from "react";

export class Botones extends Component{

    handleClickModulo1 = function(props){
        alert("Haz clic en Módulo 1");
    };
    
    handleClickModulo2 = function(props){
        alert("Haz clic en Módulo 2");
    };

    render() {
        return (
        <div> 
         <button onClick={this.handleClickModulo1} > Modulo1</button>  
         <button onClick={this.handleClickModulo2} > Modulo2</button>   
        </div>
        )
    }
}


