
import { use, useState } from "react";
import type { ITechnologies } from "../types";

interface ITechnologiesProps {
    usersPromise: Promise<ITechnologies[]>;
}

const Technologies = ({ usersPromise }: ITechnologiesProps) => {
    console.log(usersPromise, "userPromise");
    const data = use(usersPromise);
    console.log(data, "data");
    const [stack, setStack] = useState<ITechnologies[]>([]);
    

const handleAddToStack = (technology: ITechnologies) => {
    setStack([...stack, technology]);
};

    return (
        <div>
            <div className='items-center justify-between gap-4 container mx-auto my-4 mb-4'>
                <h1 className='text-4xl font-bold'>Explore the <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent "> Technologies</span></h1>
                <p className="mt-4">Pick one technology per category to build your ideal stack.</p>
           <div className='grid grid-cols-12 gap-4'>

            <div className="col-span-9 rounded-md p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {data.map((technology) => (
      <div
        key={technology.id}
        className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition"
      >

        {/* Icon + Badge */}
        <div className="flex items-center justify-between">

          <img
            src={technology.icon}
            alt={technology.name}
            className="w-14 h-14 object-contain"
          />

          <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-lg font-medium text-blue-600">
            {technology.badge}
          </span>

        </div>

        {/* Technology Name */}
        <h2 className="mt-7 text-3xl font-bold text-gray-900">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="mt-4 min-h-[80px] text-lg leading-relaxed text-gray-500">
          {technology.description}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-gray-100"></div>

        {/* Category + Difficulty + Rating */}
        <div className="flex items-center justify-between">

          <span className="rounded-lg bg-gray-100 px-4 py-2 text-base text-gray-600">
            {technology.category}
          </span>

          <span className="text-base text-gray-500">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-2 text-lg font-medium text-gray-700">
            <span className="text-yellow-400">★</span>
            {technology.rating}
          </span>

        </div>

        {/* Button */}
        <button  onClick={() => handleAddToStack(technology)} className="mt-6 w-full rounded-2xl bg-[#080d1d] py-3.5 text-lg font-medium text-white transition hover:bg-gray-800">
          Add to Stack
        </button>

      </div>
    ))}

  </div>

</div>
            <div className='col-span-3 shadow-2xl py-4 p-4 '>
                <h1 className='text-3xl font-bold'>Your Stack</h1>
                <p>No technologies selected yet.</p>
                {stack.length === 0 ? (
  <div className="border border-gray-200 rounded-xl p-8 text-center shadow-md">
    Your stack is empty.
  </div>
) : (
  <div className="mt-4 space-y-3">
    {stack.map((technology) => (
      <div
        key={technology.id}
        className="flex items-center gap-3 border border-gray-200 rounded-xl p-3"
      >
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />

        <div>
          <h3 className="font-semibold">
            {technology.name}
          </h3>

          <p className="text-sm text-gray-500">
            {technology.category}
          </p>
        </div>
      </div>
    ))}
  </div>
)}
                </div>
           </div>
            </div>

        </div>
    );
};

export default Technologies;