import { useState } from "react";
import "./App.scss";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Filters from "./components/Filters";
import NobelPrizeDetails from "./components/NobelPrizeDetails";

function App() {
  const [data, setData] = useState(0);
  const [currentAwardYear, setCurrentAwardYear] = useState(0);

  return (
    <div className="App m-10">
      <Row className="mb-3">
        <Col span={24}>
          <Header currentAwardYear={currentAwardYear} />
        </Col>
      </Row>
      <Row className="flex">
        <Col span={8}>
          <Filters
            data={data}
            setData={setData}
            setCurrentAwardYear={setCurrentAwardYear}
          />
        </Col>
        <Col span={16}>
          <NobelPrizeDetails data={data} setData={setData} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
