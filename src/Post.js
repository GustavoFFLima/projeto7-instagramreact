import React from "react"

export default function Post(props) {
  const [save, setSave] = React.useState("bookmark-outline") 
  const [heart, setHeart] = React.useState("heart-outline") 
  const [curtidas, setCurtidas] = React.useState(props.curtidas) 
  let heartFull = "test"

  function salvarPost() {
    if(save === "bookmark-outline"){
      setSave("bookmark")
    } else {
      setSave("bookmark-outline")
    }
  }
  function likePost() {
    if(heart === "heart-outline"){
      setHeart("heart")
      setCurtidas(curtidas + 1)
    } else {
      setHeart("heart-outline")
      setCurtidas(curtidas - 1)
    }
  }

  function heartImagem() {
    setHeart("heart")
    setCurtidas(curtidas + 1)
  }

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
        <img onClick={() => heartImagem()} src={props.imagem} data-test="post-image"/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={() => likePost()} name={heart} class={heartFull} data-test="like-post"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={() => salvarPost()} name={save} data-test="save-post"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div class="texto" data-test="likes-number">
            Curtido por <strong>{props.textoCurtido}</strong> e <strong>outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
