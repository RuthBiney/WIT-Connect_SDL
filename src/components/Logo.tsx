const Logo = () => {
  return (
    <div className="flex items-center space-x-2 border rounded-full py-2 px-6 shadow-lg bg-orange-50">
      <h2 className="font-bold text-4xl ">
        <span className="text-orange-500">WI</span>
        <span className="text-orange-900">T</span>
      </h2>
      <p className="text-orange-900 font-semibold">
        <span className="text-orange-500 font-bold text-lg">W</span>omen{" "}
        <span className="text-orange-500 font-bold text-lg">I</span>n{" "}
        <span className="text-orange-500 font-bold text-lg">T</span>ech
      </p>
    </div>
  );
};

export default Logo;
