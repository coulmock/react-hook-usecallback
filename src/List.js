import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("update items");
    setItems(getItems(3));
  }, [getItems]);
  return items.map((item, index) => <div key={index}>{item}</div>);
}
