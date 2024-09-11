import CardBox from "../components/ProductBox";
import LoadingSpinner from "../components/LoadingSpinner";
import SectionHeadingText from "../components/SectionHeadingText";
import { Product, ProductsProps, actionsType } from "./Hero";

type propsType = { actions: actionsType } & ProductsProps;

function PopularNow({ products, actions }: propsType) {
  return (
    <section className="w-full relative translate-y-[-300px] z-30 xl:px-20 xs:px-10 max-xs:px-4 py-5">
      <SectionHeadingText text="Popular Now" />
      <div className="w-full relative flex max-sm:flex-wrap items-center justify-center max-md:gap-6 md:gap-[44px] my-before-popular-box">
        {!actions.loading &&
          !actions.error &&
          products?.map((product: Product, i: number) => {
            return (
              <div
                className={`w-[300px] sm:w-1/2 md:w-1/3 xl:w-[360px] ${
                  i == 2 ? "max-md:hidden" : ""
                }`}
                key={product.id}
              >
                <CardBox product={product} />
              </div>
            );
          })}
        {actions.loading && <LoadingSpinner />}
      </div>
    </section>
  );
}

export default PopularNow;
