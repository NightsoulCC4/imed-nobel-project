import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";
import { Row, Col, Divider } from "antd";
import Header from "./components/Header";
import Filters from "./components/Filters";
import NobelPrizeDetails from "./components/NobelPrizeDetails";

function App() {
  const [data, setData] = useState(0);
  const [currentAwardYear, setCurrentAwardYear] = useState([]);

  const getData = async () => {
    await axios
      .get("https://api.nobelprize.org/2.1/nobelPrizes")
      .then((res, err) => {
        if (err) console.log(err);
        else setData(res.data);
      });
  };

  useEffect(() => {
    if (data === 0) getData();
  }, [data]);

  return (
    <div className="App m-10">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Divider orientation="left">sss</Divider>
      <Row>
        <Col>
          <Filters
            data={data}
            setData={setData}
            currentAwardYear={currentAwardYear}
            setCurrentAwardYear={setCurrentAwardYear}
          />
          <NobelPrizeDetails data={data} setData={setData} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
