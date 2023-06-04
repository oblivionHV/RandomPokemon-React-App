import "./RandomPokemon.css";
export default function RandomPokemon() {
  const rnd = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rnd}.png`;
  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{rnd}</h1>
      <img src={url} alt="" />
    </div>
  );
}
