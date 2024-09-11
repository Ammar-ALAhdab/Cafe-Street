import SectionHeadingText from "../components/SectionHeadingText";
import aboutImg from "../assets/imgs/about_us.png";
import PrimaryButton from "../components/PrimaryButton";

function About() {
  return (
    <section
      className="w-full flex items-center justify-between relative z-30 xl:px-20 xs:px-10 max-xs:px-4 py-5 bg-aboutBackground"
      id="about"
    >
      <div className="max-md:hidden w-[360px] h-500px p-2 my-glass rounded-lg bg-[ffffff50] translate-y-[-100px]">
          <img src={aboutImg} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="max-md:w-full w-1/2 flex flex-col justify-center items-start gap-6">
        <SectionHeadingText text="About us" />
        <p className="text-2xl font-semibold w-fit md:w-[340px]">
          We provide quality coffee, and ready to deliver.
        </p>
        <p className="text-lg text-light w-full max-md:text-[20px]">
          We are a company that makes and distributes delicious drinks. our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>
        <PrimaryButton text="Get your coffee" textColor="yellow" />
      </div>
    </section>
  );
}

export default About;
