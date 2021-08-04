import React, { useState } from "react";

function HookCounter4() {
  const [itmes, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...itmes,
      {
        id: itmes.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {itmes.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter4;
