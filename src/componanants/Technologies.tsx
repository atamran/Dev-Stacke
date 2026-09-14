import { use, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { ITechnologies } from "../Type";

interface ITechnologiesProps {
  usersPromise: Promise<ITechnologies[]>;
}

const Technologies = ({ usersPromise }: ITechnologiesProps) => {
  console.log(usersPromise, "userPromise");

  const data = use(usersPromise);

  console.log(data, "data");

  const [stack, setStack] = useState<ITechnologies[]>([]);

  // Add technology to stack
  const handleAddToStack = (technology: ITechnologies) => {
    // Check if already added
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove technology from stack
  const handleRemoveFromStack = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((technology) => technology.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);

    toast.error("All technologies removed from your stack!");
  };

  return (
    <div>
      <div className="items-center justify-between gap-4 container mx-auto my-4 mb-4">
        <h1 className="text-4xl font-bold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="mt-4">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="grid grid-cols-12 gap-4">
          {/* Technologies Section */}
          <div className="col-span-9 rounded-md p-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.map((technology) => (
                <div
                  key={technology.id}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
                >
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-14 w-14 object-contain"
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

                  {/* Add to Stack Button */}
                  <button
                    onClick={() => handleAddToStack(technology)}
                    className="mt-6 w-full rounded-2xl bg-[#080d1d] py-3.5 text-lg font-medium text-white transition hover:bg-gray-800"
                  >
                    Add to Stack
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Your Stack Section */}
          <div className="col-span-3 py-4 p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Your Stack</h1>
            </div>

            {/* Selected Count */}
            {stack.length === 0 ? (
              <p className="mt-2 text-gray-500">
                No technologies selected yet.
              </p>
            ) : (
              <p className="mt-2 text-gray-500">
                {stack.length}{" "}
                {stack.length === 1
                  ? "Technology"
                  : "Technologies"}{" "}
                Selected
              </p>
            )}

            {/* Empty Stack */}
            {stack.length === 0 ? (
              <div className="mt-4 rounded-xl border border-gray-200 p-8 text-center shadow-md">
                Your stack is empty.
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
                  >
                    {/* Icon */}
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-10 w-10 object-contain"
                    />

                    {/* Name + Category */}
                    <div>
                      <h3 className="font-semibold">
                        {technology.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {technology.category}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() =>
                        handleRemoveFromStack(technology.id)
                      }
                      className="text-3xl text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Remove All */}
                <button
                  onClick={handleRemoveAll}
                  className="mt-6 w-full rounded-xl border border-red-300 py-3 text-lg font-semibold text-red-500 hover:bg-red-50"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};

export default Technologies;
