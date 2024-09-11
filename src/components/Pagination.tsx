import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

type propsType = {
  prevPage: () => void;
  nextPage: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
};

function Pagination({
  prevPage,
  nextPage,
  disabledPrev,
  disabledNext,
}: propsType) {
  return (
    <div className="w-full flex items-center justify-center gap-4 my-10 relative z-30 py-[20px]">
      <button
        onClick={prevPage}
        disabled={disabledPrev}
        className="text-primary cursor-pointer disabled:text-light disabled:cursor-not-allowed"
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2xl" />
      </button>
      <button
        onClick={nextPage}
        disabled={disabledNext}
        className="text-primary cursor-pointer disabled:text-light disabled:cursor-not-allowed"
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} size="2xl" />
      </button>
    </div>
  );
}

export default Pagination;
