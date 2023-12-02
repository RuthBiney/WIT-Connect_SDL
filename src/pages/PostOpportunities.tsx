import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";

const PostOpportunities = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
    alert("Opportunity added successfully! 🎉🎊. ");
  };

  return (
    <section className="py-10 space-y-8">
      <h1 className="text-3xl font-bold text-center text-orange-500 uppercase">
        Post Opportunities
      </h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-5/6 px-6 py-8 space-y-6 border-2 shadow-lg md:w-4/6 lg:grid lg:grid-cols-4 lg:gap-4">
          <div className="lg:col-span-2 lg:self-end">
            <Input label="Title" name="title" register={register} />
          </div>
          <div className="col-span-2 lg:row-start-2">
            <Input label="Company Name" name="company" register={register} />
          </div>
          <div className="flex flex-col gap-1 lg:grid lg:row-start-5 lg:col-start-1 lg:col-span-full ">
            <label
              htmlFor="description"
              className="font-semibold text-orange-500"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={6}
              className="w-full px-4 py-2 border border-orange-900 rounded-lg"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col gap-1 lg:col-span-2">
            <label className="font-semibold text-orange-500">
              Select the opportunity type
            </label>
            <select
              {...register("opportunityType")}
              className="w-full px-4 py-3 border border-r-4 border-orange-900 rounded-xl"
            >
              <option value="permanent">Permanent</option>
              <option value="part-time">Part Time</option>
              <option value="full-time">Full Time</option>
            </select>
          </div>
          <div className="lg:col-span-2">
            <Input
              label="Location"
              name="location"
              register={register}
              placeholder="e.g., Accra , Ghana
"
            />
          </div>
          <div className="flex flex-col gap-1 lg:col-span-2">
            <label className="font-semibold text-orange-500">
              Job Preference
            </label>
            <select
              {...register("locationType")}
              className="w-full px-4 py-3 border border-r-4 border-orange-900 rounded-xl"
            >
              <option value="site">On Site</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 lg:grid lg:row-start-2 lg:col-span-2">
            <label className="font-semibold text-orange-500">
              Shift and Schedule
            </label>
            <select
              {...register("schedule")}
              className="w-full px-4 py-3 border border-r-4 border-orange-900 rounded-xl"
            >
              <option value="weekend">Weekend Availability</option>
              <option value="weekday">Weekdays Availability</option>
              <option value="holiday">Holidays</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 lg:row-start-3 lg:col-span-2">
            <label className="font-semibold text-orange-500">
              Remuneration
            </label>
            <select
              {...register("remuneration")}
              className="w-full px-4 py-3 border border-r-4 border-orange-900 rounded-xl"
            >
              <option value="unpaid"> Unpaid</option>
              <option value="stipend">Stipend</option>
              <option value="hourly">Hourly Wage</option>
              <option value="salary">Salary</option>
              <option value="commission">Commission-Based</option>
              <option value="negotiable">Negotiable</option>
            </select>
          </div>
          <div className="lg:col-span-2 lg:row-start-3 lg:col-start-1">
            <Input
              label="Application Link"
              name="link"
              register={register}
              placeholder="Enter application link here (e.g., https://www.example.com/application-form)
              "
            />
          </div>
        </div>
        <button className="px-8 py-3 mt-5 text-white bg-orange-800 border rounded-xl">
          Submit Opportunity
        </button>
      </form>
    </section>
  );
};

export default PostOpportunities;
