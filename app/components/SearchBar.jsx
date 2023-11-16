import React, { useState } from "react";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const displayClearBtn = searchValue.length > 0;
  const filteredProducts = props.products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search for a product..."
      />
      <br />
      {displayClearBtn && (
        <button onClick={handleClearClick}>Clear</button>
      )}
      <table>
        <thead>
          <tr>
            <th>Product Title</th>
            <th>Product Image</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.title}>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}