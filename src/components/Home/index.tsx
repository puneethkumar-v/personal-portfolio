import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between">
        <div className="col-md-12">
          <h1 className="text-5xl text-white font-bold mb-3">Hey,</h1>
          <h1 className="text-3xl text-white font-bold">
            I'm <span className="text-7xl font-bold">PUNEETH KUMAR V</span>
          </h1>
        </div>
        <div className="col-md-12">
          <img src="" alt="Home screen" />
        </div>
      </div>
    </div>
  );
};

export default Home;
