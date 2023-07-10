import React from "react";
import { Button, Dropdown, Space } from "antd";

export default function Filters({ data, setData, currentAwardYear, setCurrentAwardYear }) {
    const nobelPrizes = data.nobelPrizes
    
    console.log(nobelPrizes)

    React.useEffect(() => {
        if (nobelPrizes)
            nobelPrizes.map((item, index) => {
                const { awardYear } = item;
                setCurrentAwardYear([...currentAwardYear, awardYear])
                console.log(currentAwardYear)
                return 0;
            });
    }, [nobelPrizes])
    
    console.log(currentAwardYear)

  return (
    <div className="flex justify-center items-center h-[90vh] w-[20rem] bg-yellow-400">
      <Dropdown placement="bottomLeft" className="bg-white">
        <Button>bottomLeft</Button>
      </Dropdown>
    </div>
  );
}
