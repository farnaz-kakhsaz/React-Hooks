import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10)
      }
    ]);
  };

  return (
    <React.Fragment>
      <button onClick={addItem}>Add a numeber</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default HookCounterFour;
