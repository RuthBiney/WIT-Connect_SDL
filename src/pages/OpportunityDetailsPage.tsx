import { useNavigate, useParams } from "react-router";
import Tag from "../components/Tag";
import { Link } from "react-router-dom";
import { opportunities } from "../utils/links";
import { usePostDetails } from "../hooks/usePostDetails";
import Spinner from "../components/Spinner";

const OpportunityDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { post, isLoading, postError } = usePostDetails();

  if (isLoading && !postError) return <Spinner />;

  return (
    <>
      {!isLoading && !postError && post && (
        <div>
          <div className="p-4 mb-10 space-y-8 border rounded-lg md:p-8 md:max-w-md md:mx-auto lg:hidden">
            <section className="flex flex-col gap-2">
              <h1>Details - Opportunity {id}</h1>
              <h1 className="text-3xl font-bold text-orange-800">
                {post.title}
              </h1>
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
            <button
              className="px-4 py-3 font-bold text-white bg-orange-800 rounded-xl"
              onClick={() => navigate(-1)}
            >
              <span className="relative bottom-1">&larr;</span> Back
            </button>
          </div>
          <div className="hidden space-y-10 lg:flex lg:flex-col lg:items-center lg:mt-64">
            <h1 className="text-4xl">
              You can only access this page on Mobile
            </h1>
            <div>
              <Link
                to={`/app/${opportunities}`}
                className="px-4 py-3 text-xl font-bold text-white bg-orange-800 rounded-xl"
              >
                Go back
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OpportunityDetailsPage;
