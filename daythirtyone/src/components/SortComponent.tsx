import React, { useState, useEffect } from "react";

import type { Data } from "../types/global-types";

const SortComponent = () => {
  
  // const test_data: Array<Data> = [
  //   { name: "paul", index: 993 },
  //   { name: "peter", index: 443 },
  //   { name: "ukpong", index: 2322 },
  // ];

  const storedData: Data[] = JSON.parse(localStorage.getItem("data") ?? "[]");
  console.log(storedData);
  const [sort, setSort] = useState<string>("name");
  const [data, setData] = useState<Data[]>(storedData);

  // const handleFilter = (e: React.ChangeEvent<HTMLFormElement>) => {

  // }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
    const copy: Array<Data> = [...data];

    switch (value) {
      case "name":
        copy.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "index":
        copy.sort((a, b) => a.index - b.index);
        break;
      default:
        break;
    }
    setData(copy);
  };

  useEffect(() => {
    
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <div>
        <div className="show-data">
          {data.map((data, index) => (
            <ul key={index}>
              <li>{data.name}</li>
              <li>{data.index}</li>
            </ul>
          ))}
        </div>
        <div className="filter-section">
          <label htmlFor="sort-options">What do you want to sort by: </label>
          <br />
          <select
            name="sort-options"
            id="sort-options"
            onChange={handleSort}
            value={sort}
          >
            <option value="name">name</option>
            <option value="index">index</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SortComponent;
