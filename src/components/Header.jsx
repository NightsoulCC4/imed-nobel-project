import React from "react";

export default function Header({ currentAwardYear }) {
  return (
    <div className="flex flex-col justify-center items-center max-w-full h-[10vh] bg-yellow-400 border-2 border-black m-auto">
      <div className="w-fit text-center">
        <h1 className="text-[3rem] text-center">Nobel Prize</h1>
        {currentAwardYear !== 0 ? (
          <h2 className="text-[1rem] text-center">
            ประจำปี ค.ศ. {currentAwardYear}
          </h2>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
