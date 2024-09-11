type boxType = {
  img: string;
  heading: string;
  text: string;
};

type propsType = {
  box: boxType;
};

function DeliveryBox({ box }: propsType) {
  const { img, heading, text } = box;
  return (
    <div className="flex flex-col justify-center items-center max-sm:w-full max-md:h-[190px] md:w-[320px] md:h-[240px] gap-4 my-10">
      <div className="w-[160px] h-[160px]">
        <img src={img} alt="delivery" className="w-full h-full" />
      </div>
      <h3 className="text-2xl max-small420:text-xl font-semibold text-secondary">
        {heading}
      </h3>
      <p className="text-lg max-small420:text-md">{text}</p>
    </div>
  );
}

export default DeliveryBox;
