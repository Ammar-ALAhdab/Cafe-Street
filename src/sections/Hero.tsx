import coffeeBeans from "../assets/imgs/bg_img_hero.png";
import Navbar from "../components/Navbar";
import PrimaryButton from "../components/PrimaryButton";
import cart from "../assets/icons/icon-cart2.svg";
import cup from "../assets/imgs/cup.svg";
import TextBox from "../components/TextBox";
import LoadingSpinner from "../components/LoadingSpinner";

export interface Product {
  name: string;
  price: number;
  rating: number;
  image_url: string;
  description: string;
  popularity: number;
  parent_category: string;
  sub_category: string;
  id: string;
}

type ProductArray = Product[];

type propsType = {
  products: Product;
  actions: actionsType;
};

export type actionsType = {
  loading: boolean;
  error: string | unknown;
};

export interface ProductsProps {
  products: ProductArray;
}

function Hero({ products, actions }: propsType) {
  return (
    <section className="w-full bg-accents h-[1000px] sm:h-[1200px] relative xl:px-20 xs:px-10  max-xs:px-4 pt-5 overflow-hidden">
      <Navbar />
      <div className="w-full h-svh pt-[200px] relative flex items-start justify-start md:justify-between gap-6 z-20">
        <div className="w-full md:w-1/2 shrink flex flex-col items-start justify-center gap-6">
          <h1 className="text-secondary max-sm:text-[32px] max-md:text-[52px] md:text-5xl font-semibold">
            Enjoy your <span className="text-primary">coffee</span> before your
            activity
          </h1>
          <p className="text-light max-sm:text-[18px] max-md:text-[24px] md:text-[18px] md:w-[400px]">
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <div className="flex justify-between items-center gap-5 max-sm:flex-col w-fit max-sm:w-full">
            <PrimaryButton icon={cart} text="Order now" textColor="white" />
            <button className="text-primary text-xs font-bold py-[10px] px-6">
              More menu
            </button>
          </div>
        </div>
        <div className="flex-1 hidden md:flex items-center justify-center">
          <div className="md:w-[350px] md:h-[350px] lg:w-[416px] lg:h-[416px] relative rounded-full bg-secondary flex justify-center items-center">
            <img src={cup} alt="cup" className="absolute z-0" />
            {actions.loading && <LoadingSpinner />}
            {!actions.loading && !actions.error && (
              <>
                <img
                  src={products?.image_url}
                  alt={products?.description}
                  className="relative z-20 rounded-full md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
                />
                {/* For Name */}
                <div className="absolute z-20 top-10 left-[-50px]">
                  <TextBox text={products?.name} />
                </div>
                {/* For Rating */}
                <div className="absolute z-20 top-20 right-[-50px]">
                  <TextBox text={products?.rating.toString()} icon={true} />
                </div>
                {/* For Popularity */}
                <div className="absolute z-20 bottom-0 left-0">
                  <TextBox text={products?.popularity.toString() + "K"} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <img
        src={coffeeBeans}
        alt="coffee beans"
        className="absolute bottom-0 left-0 z-0"
      />
      <img
        src={coffeeBeans}
        alt="coffee beans"
        className="absolute top-0 right-0 rotate-180 z-0"
      />
    </section>
  );
}

export default Hero;
