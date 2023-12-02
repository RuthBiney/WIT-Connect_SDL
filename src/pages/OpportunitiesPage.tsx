import { Outlet } from "react-router";
import OpportunityCard from "../components/OpportunityCard";

const OpportunitiesPage = () => {
  return (
    <>
      <div className="m-6 lg:grid lg:grid-cols-7 lg:gap-5">
        <div className="col-span-3">
          <OpportunityCard />
        </div>
        <div className="hidden col-span-4 lg:block ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default OpportunitiesPage;
