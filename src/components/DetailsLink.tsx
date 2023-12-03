import { Link } from "react-router-dom";
import { opportunities } from "../utils/links";

interface Props {
  id: string;
}

const DetailsLink = ({ id }: Props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div>
        <Link to={`details/${id}`} className="text-blue-500 lg:hidden">
          More...
        </Link>
        <Link
          to={`${id}`}
          className="hidden text-blue-500 lg:block"
          onClick={handleClick}
        >
          More...
        </Link>
      </div>
    </div>
  );
};

export default DetailsLink;
