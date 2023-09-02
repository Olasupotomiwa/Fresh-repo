import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (apiEndpoint) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0); 

  useEffect(() => {
    const fetchFunction = async (page) => {
      try {
        const response = await axios.get(apiEndpoint);
        const data = response.data;

        const startIndex = (page - 1) * 20;
        const endIndex = startIndex + 20;

        const pageData = data.slice(startIndex, endIndex);

        return pageData;
      } catch (error) {
        setError(error);
        setIsLoading(false); // Set isLoading to false on error
        throw new Error("Failed to tasks. ");
      }
    };

    const fetchData = async () => {
      try {
        const pageData = await fetchFunction(currentPage);
        setData(pageData);

        const totalItems = (await axios.get(apiEndpoint)).data.length;
        const itemsPerPage = 20;
        const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(calculatedTotalPages); // Set totalPages

        setIsLoading(false);

        return { data: pageData, totalPages: calculatedTotalPages };
      } catch (error) {
        setError(error);
        setIsLoading(false); // Set isLoading to false on error
      }
    };

    fetchData();
  }, [currentPage, apiEndpoint]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return { data, isLoading, error, handlePageChange, totalPages, currentPage };
};

export { useFetch };
