import React from "react";

export const Profile = () => {
  return (
    <div>
    <section className="pt-20 bg-yellow-300">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 text-center mt-20">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center flex items-center">
                    <img
                      src="https://icones.pro/wp-content/uploads/2021/06/symbole-du-monde-jaune.png" // Replace with your image URL for total number of projects
                      alt="Total Projects Icon"
                      className="h-8 w-8 mr-2"
                    />
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      22
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Total number of Projects
                    </span>
                  </div>
                  <div className="mr-4 p-3 text-center flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Checklist.svg" // Replace with your image URL for successful projects
                      alt="Successful Projects Icon"
                      className="h-8 w-8 mr-2"
                    />
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span className="text-sm text-blueGray-400">
                      No of successful projects
                    </span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Checklist.svg" // Replace with your image URL for successful projects
                      alt="Successful Projects Icon"
                      className="h-8 w-8 mr-2"
                    />
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span className="text-sm text-blueGray-400">
                      No of project ongoing
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Org name
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Org location
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aliquam delectus illo velit veritatis, sapiente quisquam
                    porro sint quae dolores ex vitae, iure officia nesciunt
                    beatae, amet labore. Asperiores, animi eos.
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="font-normal text-pink-500"
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-yellow-200 py-12 text-center">
            <p className="text-lg text-yellow-800">
            </p>
          </div>
    </section>
    <div className="bg-yellow-200 py-12 text-center">
            <p className="text-lg text-yellow-800">
            </p>
          </div>
          <div className="bg-yellow-200 py-6 text-center">
        <p className="text-lg text-yellow-800">
          Additional content or features can be displayed here.
        </p>
      </div>
          </div>
  );
};
