type ButtonProps = {
  icon?: string;
  text?: string;
  textColor?: keyof colorsType;
};

type colorsType = {
  white: string;
  yellow: string;
};

function PrimaryButton({
  icon = "",
  text,
  textColor = "white",
}: ButtonProps) {
  const colors: colorsType = {
    white: "text-white",
    yellow: "text-yellow",
  };

  return (
    <button
      className={`flex  justify-center items-center gap-2 ${colors[textColor]} font-semibold max-xs:text-xs  text-sm bg-secondary rounded-full max-xs:py-2 max-xs:px-3 py-3 px-8`}
    >
      {text}
      {icon && <img src={icon} alt="button icon" />}
    </button>
  );
}

export default PrimaryButton;
