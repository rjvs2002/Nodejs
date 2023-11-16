import React, { useEffect, useState } from "react";

export default function CountButton(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 10) {
      setCount(0);
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + props.incr);
  };

  return (
    <div>
      <button onClick={handleClick}>+{props.incr}</button>
      <div>{count}</div>
    </div>
  );
}