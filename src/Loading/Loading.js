import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center mt-6">
      <RingLoader color="#F63E7B" />
    </div>
  );
};

export default Loading;
