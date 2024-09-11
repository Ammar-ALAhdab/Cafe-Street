import { Product } from "../sections/Hero";
import cart from "../assets/icons/icon-cart2.svg";
type propsType = {
  product: Product;
};

function FilteredProductCardBox({ product }: propsType) {
  const { image_url, name, description } = product;

  return (
    <div className="relative">
      <div className="max-small420:w-[180px] small420:w-[160px] sm:w-[200px] h-[280px] border-[6px] border-[#FFD3909E]">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg w-full min-h-[80px] absolute left-5 bottom-8 bg-[#FFCB7C] border-[6px] border-[#ffd3908e]">
        <h3 className="text-lg max-md:text-md font-[500]">{name}</h3>
        <p className="text-xs">{description}</p>
        <div className="absolute top-[-21px] right-[-21px]">
          <img src={cart} alt="cart icon" width={43} height={43} />
        </div>
      </div>
    </div>
  );
}

export default FilteredProductCardBox;
