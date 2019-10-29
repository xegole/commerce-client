import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ result: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:3001/commerces/allcommerces"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.result.map(item => (
        <li key={item.objectID}>
          <a href={item.commerceImage}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

//"http://localhost:3001/commerces/allcommerces"

export default App;
