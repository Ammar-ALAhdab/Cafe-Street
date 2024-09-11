import CardBox from "../components/ProductBox";
import LoadingSpinner from "../components/LoadingSpinner";
import SectionHeadingText from "../components/SectionHeadingText";
import { ProductsProps, actionsType } from "./Hero";
import useHandleResize from "../hooks/useHandlePagination";
import Pagination from "../components/Pagination";

type propsType = { actions: actionsType } & ProductsProps;

function AllProducts({ products, actions }: propsType) {
  // Use useHandleResize Custom Hook
  const { indexOfLastItem, indexOfFirstItem, nextPage, prevPage, currentPage } =
    useHandleResize();
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section
      className="w-full relative z-30 max-sm:px-4 sm:px-10 xl:px-20 py-5 mb-[100px]"
      id="products"
    >
      <SectionHeadingText text="All Product in menu" />
      <div className="grid grid-cols-1 small420:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
        {!actions.loading &&
          !actions.error &&
          currentProducts?.map((product) => {
            return (
              <div
                className="w-full flex justify-center items-center"
                key={product.id}
              >
                <CardBox product={product} />
              </div>
            );
          })}
      </div>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        disabledPrev={currentPage == 1}
        disabledNext={indexOfLastItem >= products.length}
      />
      {actions.loading && <LoadingSpinner w="60px" h="60px" />}
    </section>
  );
}

export default AllProducts;
