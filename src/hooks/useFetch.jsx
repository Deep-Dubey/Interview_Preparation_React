import React, { useEffect, useState } from "react";

// const useFetch = (url, option = { method: "GET" }) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const responce = await fetch(url, { ...option });
//         if (!responce.ok) {
//           throw new Error("Network Error");
//         }
//         const result = await responce.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (url) {
//       fetchData();
//     }
//   }, [url, option]);
//   return { data, loading, error };
// };

// export default useFetch;

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responce = await fetch(url);
        if (!responce.ok) {
          throw new Error("Network Error");
        }
        const result = await responce.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
