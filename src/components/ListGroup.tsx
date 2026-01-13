import { useState } from "react";

function ListGroup() {
  let items = ["Vuwani", "Thohoyandou", "Westdene", "Braam", "Jozi"];

  const [selectedIndex, setselectedIndex] = useState(-1); //state hook function

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        pp
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setselectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
