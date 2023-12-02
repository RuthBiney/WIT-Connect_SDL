import { useParams } from "react-router";
import Tag from "./Tag";
import { usePostDetails } from "../hooks/usePostDetails";
import Spinner from "./Spinner";

const OpportunityDetails = () => {
  const { id } = useParams();

  const { post, isLoading, postError } = usePostDetails();

  if (isLoading && !postError) return <Spinner />;

  return (
    <>
      {!isLoading && !postError && post && (
        <div className="px-5 py-10 space-y-10 rounded-lg bg-orange-50">
          <section className="flex flex-col gap-2">
            <h1>Details - Opportunity {id}</h1>
            <h1 className="text-3xl font-bold text-orange-800">{post.title}</h1>
            <h2 className="text-xl">{post.company_name}</h2>
            <p className="text-xl">{post.location}</p>
            <p>
              <span className="capitalize">{post.remuneration}</span>
              {" - "}
              <span className="capitalize">{post.job_preference}</span>
            </p>
          </section>
          <section className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Job description</h2>
            <p className="text-lg">{post.description}</p>
            <div className="flex gap-5">
              <Tag tag={post.opportunity_type} />
              <Tag tag={post.remuneration} />
              <Tag tag={post.job_preference} />
            </div>
          </section>
          <div className="text-center ">
            <a
              href={post.application_link}
              className="px-8 py-4 text-xl font-bold text-white bg-orange-500 rounded-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default OpportunityDetails;
