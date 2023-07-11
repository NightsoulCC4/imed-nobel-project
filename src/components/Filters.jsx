import React from "react";
import { Button, Select } from "antd";
import axios from "axios";

export default function Filters({ data, setData, setCurrentAwardYear }) {
  const years = React.useRef(new Date().getFullYear());
  years.first = 1901;

  const [currentYear, setCurrentYear] = React.useState(1901);
  const [sumPrizeAmount, setSumPrizeAmount] = React.useState(0);

  let awardYear = [];
  let awardYearSorted;

  if (years.first !== undefined)
    for (let i = years.first; i <= years.current; i++) awardYear.push(i);

  if (awardYear[0])
    awardYearSorted = awardYear.map((item, index) => {
      return { index: index, value: item, label: item };
    });

  const getData = async (year) => {
    await axios
      .get("https://api.nobelprize.org/2.1/nobelPrizes")
      .then((res, err) => {
        if (err) console.error(err);
        else {
          const filteredData = res.data.nobelPrizes;
          const dataByAwardYear = filteredData.filter((element) => {
            return element.awardYear === year.toString();
          });

          const sumPrizeAmountByAwardYear = dataByAwardYear.reduce(
            (acc, obj) => acc + obj.prizeAmount,
            0
          );
          setData(dataByAwardYear);
          setCurrentAwardYear(currentYear);
          setSumPrizeAmount(sumPrizeAmountByAwardYear);
        }
      });
  };

  console.log(data);

  return (
    <div className="flex flex-col gap-3 justify-center items-center bg-yellow-400 border-black border-2 max-w-full h-[83vh] ">
      <div className="flex gap-3 justify-center items-center mx-5">
        <Select
          onChange={(value) => setCurrentYear(value)}
          options={awardYearSorted}
          defaultValue={1901}
        ></Select>
        <Button className="bg-white" onClick={() => getData(currentYear)}>
          Apply Filter
          {}
        </Button>
      </div>

      {data === 0 ? (
        <></>
      ) : (
        <div className="">
          Prize Amount: {sumPrizeAmount}
        </div>
      )}
    </div>
  );
}
