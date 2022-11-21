export default function Post(props) {
    return(
      <div class="post" data-test="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagemUsuario} />
            {props.usuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
  
        <div class="conteudo">
          <img src={props.imagem} data-test="post-image"/>
        </div>
  
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
            </div>
          </div>
  
          <div class="curtidas">
            <img src="assets/img/respondeai.svg" />
            <div class="texto" data-test="likes-number">
              Curtido por <strong>{props.textoCurtido}</strong> e <strong>outras {props.curtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
  }