import Sugestao from "./Sugestao"

export default function Sugestoes () {
  const sugestoes = [
    {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes"},
    {imagem:"assets/img/chibirdart.svg", nome:"chibirdart"},
    {imagem:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar"},
    {imagem:"assets/img/adorable_animals.svg", nome:"adorable_animals"},
    {imagem:"assets/img/smallcutecats.svg", nome:"smallcutecats"}
  ]

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      <div>
        {sugestoes.map((item) => <Sugestao imagem={item.imagem} nome={item.nome}/>)}
      </div>
      <div class="seguir">Seguir</div>
    </div>
  )
}