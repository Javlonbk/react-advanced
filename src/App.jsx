// import { GreenSmallButton, RedButton } from "./components/composition";
import { RedButton, RedSmallButton } from "./components/partial";
import { Recursive } from "./components/recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      <Recursive data={myNestedObject} />

      <RedButton text={"Red button"} />
      <RedSmallButton text={"Red small button"} />


    </>
  );
}

export default App;