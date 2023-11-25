const Logo = () => {
  return (
    <div className="flex items-center px-6 py-2 space-x-2 border rounded-full shadow-lg bg-orange-50">
      <h2 className="text-4xl font-bold ">
        <span className="text-orange-500">WI</span>
        <span className="text-orange-900">T</span>
      </h2>
      <p className="font-semibold text-orange-900">
        <span className="text-lg font-bold text-orange-500">W</span>omen{" "}
        <span className="text-lg font-bold text-orange-500">I</span>n{" "}
        <span className="text-lg font-bold text-orange-500">T</span>ech
      </p>
    </div>
  );
};

export default Logo;
