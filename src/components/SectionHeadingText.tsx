type headingProps = {
  text: string;
};

function SectionHeadingText({ text }: headingProps) {
  const arrayOfWords = text.split(" ");
  const lastWord = arrayOfWords.pop();
  const stringOfWords = arrayOfWords.join(" ");
  return (
    <h2 className="text-[32px] max-small420:text-[24px] font-semibold capitalize mb-8">
      {stringOfWords} <span className="border-b-4 border-primary">{lastWord}</span>
    </h2>
  );
}

export default SectionHeadingText;
