import star from "../assets/icons/akar-icons_star.png";

type TextBoxProps = {
  text?: string;
  textSize?: keyof fontSizeType;
  icon?: boolean;
};

type fontSizeType = {
  small: string;
  big: string;
};

function TextBox({ text, textSize = "big", icon = false }: TextBoxProps) {
  const fontSize: fontSizeType = {
    small: "text-sm font-bold rounded-full py-2 px-4",
    big: "text-2xl font-bold rounded-full py-3 px-8",
  };
  return (
    <div
      className={`my-glass flex items-center justify-center w-fit rounded-full ${
        textSize == "small" ? "p-1" : "p-2"
      }`}
    >
      <div
        className={`${fontSize[textSize]} bg-white text-secondary flex items-center justify-center gap-2`}
      >
        {text}
        {icon && <img src={star} alt="star icon" width={14} height={14} />}
      </div>
    </div>
  );
}

export default TextBox;
