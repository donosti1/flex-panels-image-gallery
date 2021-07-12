import React from "react";
import {Flex} from "@chakra-ui/react";

const handleClick = (event: any) => {
  event.target.classList.toggle("open");
};
const handleTransitionEnd = (event: any) => {
  if (event.propertyName.includes("flex")) {
    event.target.classList.toggle("open-active");
  }
};
const App: React.FC = () => {
  return (
    <Flex className="panels" flex={1}>
      <Flex
        className="panel panel1"
        flex={1}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
      >
        <p>Hey</p>
        <p>{`Let's`}</p>
        <p>Dance</p>
      </Flex>
      <Flex
        className="panel panel2"
        flex={1}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
      >
        <p>Give</p>
        <p>Take</p>
        <p>Receive</p>
      </Flex>
      <Flex
        className="panel panel3"
        flex={1}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
      >
        <p>Experience</p>
        <p>It</p>
        <p>Today</p>
      </Flex>
      <Flex
        className="panel panel4"
        flex={1}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
      >
        <p>Give</p>
        <p>All</p>
        <p>You can</p>
      </Flex>
      <Flex
        className="panel panel5"
        flex={1}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
      >
        <p>Life</p>
        <p>In</p>
        <p>Motion</p>
      </Flex>
    </Flex>
  );
};

export default App;
