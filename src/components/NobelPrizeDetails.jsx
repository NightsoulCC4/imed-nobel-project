import React from "react";
import { Table } from "antd";

export default function NobelPrizeDetails(props) {
  const data = props.data;

  let formattedData, columns;

  if (data !== 0) {
    formattedData = data.flatMap((item, index) => {
      const { categoryFullName, awardYear } = item;
      return item.laureates.map((subitem) => ({
        index: index + 1,
        ชื่อรางวัล: categoryFullName.en,
        ปีที่ได้รับรางวัล: awardYear,
        ผู้ได้รับรางวัล: subitem.knownName?.en || subitem.orgName?.en,
        แรงบันดาลใจ: subitem.motivation.en,
      }));
    });
  }

  if (formattedData !== undefined && data.length !== 0) {
    columns = Object.keys(formattedData[0]).map((key) => ({
      title: key,
      dataIndex: key,
      key: key,
      render: (text, record, index) => (
        <span key={index}>
          {index > 0 &&
          Object.keys(formattedData[index - 1]).some(
            (prevKey) => formattedData[index - 1][prevKey] === text
          ) &&
          (key === "ปีที่ได้รับรางวัล" ||
            key === "ชื่อรางวัล" ||
            key === "index") &&
          index > 0 &&
          formattedData[index - 1].index === record.index ? null : (
            <span>{text}</span>
          )}
        </span>
      ),
    }));
  }

  return (
    <div className="border-black bg-yellow-400 border-2 max-w-full h-[83vh] flex justify-center items-center">
      {formattedData && formattedData.length !== 0 ? (
        <Table columns={columns} dataSource={formattedData} />
      ) : (
        <h1 className="text-red-600 text-center text-8xl">No-Data</h1>
      )}
    </div>
  );
}
