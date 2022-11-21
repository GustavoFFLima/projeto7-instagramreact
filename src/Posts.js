import Post from './Post'

export default function Posts() {
  const posts = [
    {imagemUsuario: "assets/img/meowed.svg", usuario: "meowed", imagem: "assets/img/gato-telefone.svg", textoCurtido: "respondeai", curtidas: Number(101523)},
    {imagemUsuario: "assets/img/barked.svg", usuario: "barhed", imagem: "assets/img/dog.svg", textoCurtido: "adorable_animals", curtidas: Number(99159)}
  ]
  return (
    <div class="posts">
      {posts.map((item) => <Post imagemUsuario={item.imagemUsuario}  usuario={item.usuario} imagem={item.imagem} textoCurtido={item.textoCurtido} curtidas={item.curtidas} />)}
    </div>
  )
}