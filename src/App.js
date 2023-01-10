import { useEffect } from "react";
import Tab from "./Tab";
import styles from './App.module.scss';


const Tab1 = () => {
  useEffect(() => {
    // console.log("Tab1");
  }, []);

  return <div className="tab-screen">aaaaa</div>;
};
const Tab2 = () => {
  useEffect(() => {
    // console.log("Tab2");
  }, []);
  return <div className="tab-screen">bbbb</div>;
};

function App() {
  return (
    <div className="App">
      <Tab>
        <Tab1 labelType="ah1aaa" tabLabel="Category 1" />
        <Tab2 labelType="ah2" tabLabel="Category 2" />
        <Tab1 labelType="ah2" tabLabel="Category 3" />
      </Tab>
    </div>
  );
}

export default App;
