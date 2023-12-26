const url ="http://localhost:5000"

const verAmigosBtn=document.querySelector("#boton");

const listaDesordenada=document.querySelector("#lista");

let amigosMostrados = false;

verAmigosBtn.addEventListener("click", () => {
    if (amigosMostrados === false)  {
        $.get("http://localhost:5000/amigos",(amigos) => {
            amigos.forEach((amigo) => {
                let li = document.createElement("li");

                li.innerHTML = `${amigo.name}`;
                listaDesordenada.appendChild(li);
            });
        });
    }

    amigosMostrados=true;
});

const renderAmigos = (data) => {
    $("img").attr("src", "")
}

for (let i=0; i < data.length; i++) {
    $("#lista").append(`<li>${data[i].name}</li>`)

}

$("#boton").click(function(){
    $.get(`${url}amigos`, (data)=> {
    renderAmigos(data)
    $("#lista").empty()

    if (data.length) {
        $("img").attr("src", "")
    }

    for (let i = 0; i< data.length; i++) {
        $("#lista").append(`<li>${data[i].name}</li>`)
    }
    })
});

const inputSearch = document.querySelector("#input");
const btnSearch= document.querySelector("#serch");
const spanAmigo= document.querySelector("#amigo");

btnSearch.addEventListener("click", () => {
    $.get(`${url}amigos/${inputSearch.value}`, (amigo) => {
        spanAmigo.innerHTML = `No se encontro el amigo`;
    })
});

$("#delete").click(function() {

    let id = $("#inputDelete").value()

    $.ajax({

        url: `${url}amigos/${id}`,

        type:"DELETE",

        success:function (result) {

            alert (`se elimino correctamente tu amigo con id ${id}`) 

            renderAmigos(result)

            $("#lista").empty()

            for (let i= 0; i < result.length; i++) {

            $("#lista").append(`<li>${result[i].name}</li>`)

        
        }
    },

    error: (function() {
        alert("Error en el servidor")
        })
    })
})







