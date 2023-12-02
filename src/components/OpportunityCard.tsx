import { Fragment } from "react";
import { usePosts } from "../hooks/usePosts";
import DetailsLink from "./DetailsLink";
import Spinner from "./Spinner";

const OpportunityCard = () => {
  const { posts, isLoading, error } = usePosts();
  console.log(posts);

  if (isLoading && !error) return <Spinner />;
  return (
    <div className="space-y-5">
      {posts?.map(
        ({
          id,
          title,
          company_name,
          location,
          description,
          job_preference,
        }) => (
          <Fragment key={id}>
            <section className="p-4 border-2 border-orange-500 rounded-lg md:w-11/12 md:mx-auto lg:w-full">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-orange-700">
                  {title} <span className="capitalize">({job_preference})</span>
                </h1>
                <h2 className="text-xl">{company_name}</h2>
                <p className="text-xl">{location}</p>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <p className="text-lg line-clamp-3">{description}</p>
                <div className="flex gap-5">
                  <p className="text-gray-800">Posted 5 days ago</p>
                  <DetailsLink id={String(id)} />
                </div>
              </div>
            </section>
          </Fragment>
        )
      )}
    </div>
  );
};

export default OpportunityCard;
