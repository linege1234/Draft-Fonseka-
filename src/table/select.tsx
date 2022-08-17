import { useState } from "react";
import ReactDOM from "react-dom";

export default function PositionSelect(value) {
  const hero = value.value[0];
  const [position, setPosition] = useState("");
  const [player, setPlayer] = useState([
    {
      name: "",
      position: ""
    }
  ]);
  const change = (e) => {
    setPosition(e.target.value);
    const { name, value } = e.target;
    setPlayer({
      name: hero,
      position: value
    });
  };
  console.log(hero);
  console.log(position);
  console.log(player);

  return (
    <section>
      <form>
        <select value={position} onChange={change}>
          <option value="S">ST</option>
          <option value="M">MF</option>
          <option value="D">DF</option>
          <option value="G">GK</option>
          <option value="SUB">SUB</option>
        </select>
      </form>
    </section>
  );
}
