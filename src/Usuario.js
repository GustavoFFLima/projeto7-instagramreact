export default function Usuario () {
  const usuario = [{
    imagem:"assets/img/catanacomics.svg", 
    texto:"catanacomics", 
    name:"Catana"
  }];

  return (
      <div class="usuario" data-test="user">
        {usuario.map((item) => <UsuarioPagina imagem={item.imagem} texto={item.texto} name={item.name}/>)}
      </div>
  )
}

function UsuarioPagina(props){
  return(
    <div>
      <img src={props.imagem} data-test="profile-image"/>
      <div class="texto">
        <strong>{props.texto}</strong>
        <span data-test="name">
          {props.name}
          <ion-icon name="pencil" data-test="edit-name"></ion-icon>
        </span>
      </div>
    </div>
  )
}