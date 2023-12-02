import { Link } from "react-router-dom";
import { opportunities } from "../utils/links";

interface Props {
  id: string;
}

const DetailsLink = ({ id }: Props) => {
  return (
    <div>
      <div>
        <Link
          to={`/${opportunities}/details/${id}`}
          className="text-blue-500 lg:hidden"
        >
          More...
        </Link>
        <Link
          to={`/${opportunities}/${id}`}
          className="hidden text-blue-500 lg:block"
        >
          More...
        </Link>
      </div>
    </div>
  );
};

export default DetailsLink;
