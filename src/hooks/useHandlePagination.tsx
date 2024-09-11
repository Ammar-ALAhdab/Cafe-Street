import { useEffect, useState } from "react";

function useHandlePagination(filterSlider: boolean = false) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const indexOfLastItem = itemsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  // Handle Resize To control on showing items per page
  useEffect(() => {
    const handleResize = () => {
      setWindowInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowInnerWidth > 834) {
      if (filterSlider) {
        setItemsPerPage(3);
      }
      setItemsPerPage(6);
    } else if (windowInnerWidth > 420) {
      if (filterSlider) {
        setItemsPerPage(2);
      }
      setItemsPerPage(4);
    } else {
      if (filterSlider) {
        setItemsPerPage(1);
      }
      setItemsPerPage(2);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [filterSlider, windowInnerWidth]);
  return { indexOfLastItem, indexOfFirstItem, nextPage, prevPage, currentPage , setCurrentPage};
}

export default useHandlePagination;
