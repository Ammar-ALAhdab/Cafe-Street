import { Product } from "../sections/Hero";
import cart from "../assets/icons/icon-cart2.svg";
import TextBox from "./TextBox";

type propsType = {
  product: Product;
};

function CardBox({ product }: propsType) {
  const { id, image_url, name, popularity, sub_category, rating } = product;
  return (
    <div className="w-full xl:w-[360px] rounded-lg my-glass p-2" key={id}>
      <div className="bg-white min-h-[320px] rounded-lg p-4 h-full flex flex-col justify-center items-center gap-4">
        <div className="w-full  h-[175px] md:h-[226px] relative">
          <div className="absolute top-1 left-1">
            <TextBox text={rating.toString()} textSize="small" icon />
          </div>
          <img
            src={image_url}
            alt={name}
            className="rounded-lg w-full h-full"
          />
        </div>
        <div className="w-full flex items-center justify-between text-2xl font-semibold max-md:text-lg">
          <h3>{name}</h3>
          <span>{popularity + "K"}</span>
        </div>
        <div className="w-full flex items-center justify-between text-2xl font-semibold max-md:text-lg">
          <button className="text-base max-md:text-sm text-primary py-2 px-4 max-md:py-1 max-md:px-2 border-2 border-primary rounded-xl">
            {sub_category}
          </button>
          <img src={cart} alt="cart icon" width={42} height={42} />
        </div>
      </div>
    </div>
  );
}

export default CardBox;
