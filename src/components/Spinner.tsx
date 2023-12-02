import FadeLoader from "react-spinners/FadeLoader";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FadeLoader color="#eda844" />
    </div>
  );
};

export default Spinner;
