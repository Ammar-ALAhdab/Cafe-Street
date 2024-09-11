import SectionHeadingText from "../components/SectionHeadingText";
import DeliveryBox from "../components/DeliveryBox";
import d1 from "../assets/imgs/delivery1.png";
import d2 from "../assets/imgs/delivery2.png";
import d3 from "../assets/imgs/delivery3.png";

const DELIVERY_BOXES = [
  {
    id: 1,
    img: d1,
    heading: "choose your coffee",
    text: "there are 20+ coffees for you",
  },
  {
    id: 2,
    img: d2,
    heading: "we delivery it to you",
    text: "Choose delivery service",
  },
  {
    id: 3,
    img: d3,
    heading: "Enjoy your coffee",
    text: "Choose delivery service",
  },
];

function Delivery() {
  return (
    <section
      className="w-full relative z-30 xl:px-20 xs:px-10 max-xs:px-4 py-5 mt-[-100px] mb-[200px]"
      id="delivery"
    >
      <SectionHeadingText text="How to use delivery service" />
      <div className="flex justify-center items-center gap-4 flex-wrap max-sm:flex-col max-sm:gap-4">
        {DELIVERY_BOXES.map((box) => {
          return <DeliveryBox box={box} key={box.id} />;
        })}
      </div>
    </section>
  );
}

export default Delivery;
