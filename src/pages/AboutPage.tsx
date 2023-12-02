const AboutPage = () => {
  return (
    <div className="px-5 pt-5 pb-16 bg-gray-100 lg:w-5/6 lg:mx-auto">
      <section className="flex flex-col gap-5 mb-6">
        <h1 className="text-3xl font-bold text-center text-orange-800 lg:text-3xl md:mb-4">
          About Us
        </h1>
        <h2 className="text-2xl font-semibold text-orange-500 lg:text-3xl">
          Empowering Women in Technology
        </h2>
        <p className="lg:text-lg">
          At WIT Connect, we believe in a future where the tech industry is as
          diverse as the world we live in. Our mission is to amplify the
          presence and opportunities for women in technology, starting with
          accessible and inclusive pathways into this vibrant sector.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:text-xl">
        <article className="p-4 space-y-4 bg-orange-200 border md:col-span-2 lg:px-10">
          <h2 className="text-xl font-bold lg:text-xl">Our Mission</h2>
          <p className="">
            WIT Connect is more than an app; it's a movement. We strive to
            create direct channels for women to engage in technology roles,
            beginning with volunteer opportunities. Our goal is not just
            technological parity but fostering gender equality, empowerment, and
            community building within the tech landscape.
          </p>
        </article>
        <article className="p-4 space-y-4 bg-orange-200 border">
          <h2 className="text-xl font-bold lg:text-xl">The Challenge</h2>
          <p>
            Despite the tech sector's growth, women remain significantly
            underrepresented, especially in fields like cloud computing,
            engineering, data, and AI. Our challenge is two-pronged:
          </p>
          <ol>
            <li>
              Creating Access: We aim to establish direct pathways for women to
              step into tech roles.
            </li>
            <li>
              Breaking Perceptions: We work to dismantle the barriers of
              awareness and confidence that many women face in pursuing tech
              careers.
            </li>
          </ol>
        </article>
        <article className="p-4 space-y-4 bg-orange-200 border">
          <h2 className="text-xl font-bold lg:text-xl">
            Collaboration and Research
          </h2>
          <p>
            Our approach is informed by thorough research and active
            collaborations
          </p>
          <ul>
            <li>Surveys to understand barriers women face in tech.</li>
            <li>Partnerships with tech organizations and local initiatives.</li>
            <li>Insights from the ALU community and beyond.</li>
          </ul>
        </article>
        <article className="p-4 space-y-4 bg-orange-200 border md:col-span-2 lg:px-10">
          <h2 className="text-xl font-bold lg:text-xl ">
            Ensuring User Engagement and Safety
          </h2>
          <p>
            At WIT Connect, user safety and confidence are paramount. We employ
            stringent verification processes and foster safe communication
            channels. By addressing skill gaps and awareness, we ensure our
            users feel ready and equipped to explore tech opportunities.
          </p>
        </article>
      </section>
      <section className="flex flex-col gap-4 mx-auto mt-10 md:w-3/5 ">
        <h2 className="text-3xl font-bold text-center text-orange-500">
          Join the Movement
        </h2>
        <p className="font-semibold">
          Ready to shape the future of tech? Whether you're looking to step into
          a tech role or support women in tech, WIT Connect is your platform.
        </p>
        <p className="p-4 italic font-bold text-center bg-gray-200 border rounded-full lg:text-xl">
          <span className="text-orange-800">Explore.</span>{" "}
          <span className="text-orange-600">Connect.</span>{" "}
          <span className="text-orange-800">Empower.</span>
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
