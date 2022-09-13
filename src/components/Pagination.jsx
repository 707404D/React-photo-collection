import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <ul className="pagination">
      {[...Array(3)].map((_, i) => (
        <li
          onClick={() => setPage(i + 1)}
          className={page === i + 1 ? "active" : ""}
          key={i}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
