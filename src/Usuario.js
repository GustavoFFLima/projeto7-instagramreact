import React from "react";

let usuario = [{
  imagem:"assets/img/catanacomics.svg", 
  texto:"catanacomics", 
  name:"Catana"
}];

export default function Usuario () {
  return (
    <div class="usuario" data-test="user">
      {usuario.map((item) => <UsuarioPagina imagem={item.imagem} texto={item.texto} name={item.name}/>)}
    </div>
  )
}

function UsuarioPagina(props){
  const [nome, setNome] = React.useState(props.name)
  const [imagem, setImagem] = React.useState(props.imagem) 

  function editarNome() {
    setNome(prompt("Qual é o seu nime?"))
  }

  function editarImagem() {
    setImagem(prompt("Qual é o seu nime?"))
  }

  return(
    <div>
      <img onClick={() => editarImagem()}  src={imagem} data-test="profile-image"/>
      <div class="texto">
        <strong>{props.texto}</strong>
        <span data-test="name">
          {nome}
          <ion-icon onClick={() => editarNome()} name="pencil" data-test="edit-name"></ion-icon>
        </span>
      </div>
    </div>
  )
}