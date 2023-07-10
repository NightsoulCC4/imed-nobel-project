import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center w-full h-[10vh] bg-yellow-400">
      <div className="text-[3rem]">Nobel Prize</div>
      {/* {props.filteryear == 0 ? (
        <></>
      ) : (
        <div>
          <div className="text-[1rem]">ประจำปี ค.ศ.{props.filteryear}</div>
        </div>
      )} */}
    </div>
  );
}
