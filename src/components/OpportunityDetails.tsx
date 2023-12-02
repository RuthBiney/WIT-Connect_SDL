import { useParams } from "react-router";
import Tag from "./Tag";

const OpportunityDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-4 space-y-10 border rounded-lg">
      <section className="flex flex-col gap-2">
        <h1>Details - Opportunity {id}</h1>
        <h1 className="text-3xl font-bold">Title</h1>
        <h2 className="text-xl">Company name</h2>
        <p className="text-xl">Location</p>
        <p>Salary - Remote</p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Job description</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex iusto
          consectetur voluptatibus mollitia dolore, aliquam, dolorem natus ut,
          amet qui in? Quod nulla quis error. Consequatur suscipit cumque ad
          fugit, placeat laborum aperiam vitae animi repellendus veniam totam
          temporibus corporis quaerat sint id molestias dolore doloribus odit
          ipsam a illum dolorum magni reprehenderit. Neque minus, deleniti
          dolorem architecto in earum dignissimos. Dolorem omnis ab cupiditate,
          quasi sit unde accusamus est porro ducimus facere. Commodi sapiente
          modi voluptatum nemo, id temporibus doloribus iure consequuntur
          impedit cupiditate enim incidunt laborum ex, quae totam officiis,
          iusto laboriosam quo repellendus labore alias corrupti tempore.
          Commodi quia illo nihil, exercitationem consequatur, illum nisi
          repellat esse iure voluptate odit inventore consequuntur dolorum earum
          facere qui? A eos dolore debitis iusto iure officia placeat itaque
          autem maxime sequi, cupiditate praesentium harum nisi eius minima,
          fuga assumenda delectus dicta inventore optio alias quos quaerat
          impedit vero! Voluptatem quia magnam, sit quo laboriosam, alias ad aut
          porro eum vitae totam aliquid animi deserunt laborum rerum architecto
          possimus sunt aperiam ea tenetur culpa veritatis iure amet asperiores?
          Blanditiis nulla quasi consequatur, reiciendis minus iste, repudiandae
          veritatis fugiat sequi adipisci aspernatur. Assumenda veritatis ea
          deserunt nemo voluptas nihil maiores at laudantium.
        </p>
        <div className="flex gap-5">
          <Tag tag="Part Time" />
          <Tag tag="$1000" />
          <Tag tag="On Site" />
        </div>
      </section>
      <div className="text-center ">
        <a
          href="https://www.google.com/"
          className="px-8 py-4 text-xl font-bold text-white bg-orange-500 rounded-lg"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default OpportunityDetails;
