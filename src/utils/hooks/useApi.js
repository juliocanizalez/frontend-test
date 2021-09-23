import { useState, useEffect } from 'react';

const useApi = ({ url }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      response = await response.json();
      setItems(response);
    };

    fetchData();
  }, [url]);

  return items;
};

export default useApi;
