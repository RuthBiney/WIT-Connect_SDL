import { Link } from "react-router-dom";
import { opportunities } from "../utils/links";
import DetailsLink from "./DetailsLink";

const id = "3";
const id2 = "5";

const OpportunityCard = () => {
  return (
    <div className="space-y-5">
      <section className="p-4 border-2 border-black rounded-lg md:w-11/12 md:mx-auto lg:w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Title (Remote)</h1>
          <h2 className="text-xl">Company name</h2>
          <p className="text-xl">Location</p>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-lg line-clamp-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex iusto
            consectetur voluptatibus mollitia dolore, aliquam, dolorem natus ut,
            amet qui in? Quod nulla quis error. Consequatur suscipit cumque ad
            fugit, placeat laborum aperiam vitae animi repellendus veniam totam
            temporibus corporis quaerat sint id molestias dolore doloribus odit
            ipsam a illum dolorum magni reprehenderit. Neque minus, deleniti
            dolorem architecto in earum dignissimos. Dolorem omnis ab
            cupiditate, quasi sit unde accusamus est porro ducimus facere.
            Commodi sapiente modi voluptatum nemo, id temporibus doloribus iure
            consequuntur impedit cupiditate enim incidunt laborum ex, quae totam
            officiis, iusto laboriosam quo repellendus labore alias corrupti
            tempore. Commodi quia illo nihil, exercitationem consequatur, illum
            nisi repellat esse iure voluptate odit inventore consequuntur
            dolorum earum facere qui? A eos dolore debitis iusto iure officia
            placeat itaque autem maxime sequi, cupiditate praesentium harum nisi
            eius minima, fuga assumenda delectus dicta inventore optio alias
            quos quaerat impedit vero! Voluptatem quia magnam, sit quo
            laboriosam, alias ad aut porro eum vitae totam aliquid animi
            deserunt laborum rerum architecto possimus sunt aperiam ea tenetur
            culpa veritatis iure amet asperiores? Blanditiis nulla quasi
            consequatur, reiciendis minus iste, repudiandae veritatis fugiat
            sequi adipisci aspernatur. Assumenda veritatis ea deserunt nemo
            voluptas nihil maiores at laudantium.
          </p>
          <div className="flex gap-5">
            <p className="text-gray-800">Posted 5 days ago</p>
            <DetailsLink id={id2} />
          </div>
        </div>
      </section>

      <section className="p-4 border-2 border-black rounded-lg md:w-11/12 md:mx-auto lg:w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Title (Remote)</h1>
          <h2 className="text-xl">Company name</h2>
          <p className="text-xl">Location</p>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-lg line-clamp-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex iusto
            consectetur voluptatibus mollitia dolore, aliquam, dolorem natus ut,
            amet qui in? Quod nulla quis error. Consequatur suscipit cumque ad
            fugit, placeat laborum aperiam vitae animi repellendus veniam totam
            temporibus corporis quaerat sint id molestias dolore doloribus odit
            ipsam a illum dolorum magni reprehenderit. Neque minus, deleniti
            dolorem architecto in earum dignissimos. Dolorem omnis ab
            cupiditate, quasi sit unde accusamus est porro ducimus facere.
            Commodi sapiente modi voluptatum nemo, id temporibus doloribus iure
            consequuntur impedit cupiditate enim incidunt laborum ex, quae totam
            officiis, iusto laboriosam quo repellendus labore alias corrupti
            tempore. Commodi quia illo nihil, exercitationem consequatur, illum
            nisi repellat esse iure voluptate odit inventore consequuntur
            dolorum earum facere qui? A eos dolore debitis iusto iure officia
            placeat itaque autem maxime sequi, cupiditate praesentium harum nisi
            eius minima, fuga assumenda delectus dicta inventore optio alias
            quos quaerat impedit vero! Voluptatem quia magnam, sit quo
            laboriosam, alias ad aut porro eum vitae totam aliquid animi
            deserunt laborum rerum architecto possimus sunt aperiam ea tenetur
            culpa veritatis iure amet asperiores? Blanditiis nulla quasi
            consequatur, reiciendis minus iste, repudiandae veritatis fugiat
            sequi adipisci aspernatur. Assumenda veritatis ea deserunt nemo
            voluptas nihil maiores at laudantium.
          </p>
          <div className="flex gap-5">
            <p className="text-gray-800">Posted 5 days ago</p>
            <DetailsLink id={id} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpportunityCard;
