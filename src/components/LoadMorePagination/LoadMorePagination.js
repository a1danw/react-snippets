import React, { useState, useEffect } from "react";

const LoadMorePagination = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(10);

  const showMoreItems = () => {
    if (visible < items.length) setVisible((prevValue) => prevValue + 10);
  };

  console.log(items.length);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <div className="container">
        {items.slice(0, visible).map((item) => (
          <div className="card">
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.body}</p>
          </div>
        ))}
        <p>
          Showing {visible} out of {items.length}
        </p>
        <button disabled={visible === items.length} onClick={showMoreItems}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default LoadMorePagination;
