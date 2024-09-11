import PrimaryButton from "../components/PrimaryButton";

function Subscribe() {
  return (
    <section className="w-full relative xl:px-20 xs:px-10 max-xs:px-4 my-[100px] max-sm:bg-subscribeBackgroundMobile bg-cover">
      <div className="w-full h-[390px] py-[100px] relative z-30 flex flex-col justify-center items-center gap-8 sm:bg-subscribeBackground bg-cover sm:rounded-[32px]">
        <h2 className="text-[32px] max-sm:text-[24px] font-semibold text-white text-center">
          Subscribe to get 50% discount price
        </h2>
        <div className="w-[480px] max-sm:w-full h-[60px] bg-white py-2 px-4 rounded-full flex justify-between items-center">
          <input
            type="email"
            placeholder="Email address"
            className="h-full outline-none text-light font-semibold max-small420:w-[100px] sm:flex-1"
          />
          <PrimaryButton text="Order now" textColor="white" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
