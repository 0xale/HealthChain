import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../Styles/Hero.css";

const MyGridLayout = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2 },
    { i: "b", x: 2, y: 0, w: 1, h: 3 },
    { i: "c", x: 3, y: 0, w: 4, h: 1 },
    { i: "d", x: 0, y: 2, w: 3, h: 2 },
    { i: "e", x: 3, y: 2, w: 1, h: 2 },
    { i: "f", x: 0, y: 4, w: 1, h: 2 },
    { i: "g", x: 2, y: 4, w: 3, h: 1 },
    { i: "h", x: 3, y: 4, w: 1, h: 1 },
    { i: "i", x: 0, y: 6, w: 4, h: 2 },
  ];

  const onLayoutChange = (newLayout) => {
    // Handle layout changes if needed
    console.log(newLayout);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={4} // Adjust the number of columns as needed
      rowHeight={100} // Adjust the row height as needed
      width={800} // Adjust the total width of the grid as needed
      onLayoutChange={onLayoutChange}
    >
      <div key="a" style={{ background: "lightblue" }}>
        A
      </div>
      <div key="b" style={{ background: "lightgreen" }}>
        B
      </div>
      <div key="c" style={{ background: "lightcoral" }}>
        C
      </div>
      <div key="d" style={{ background: "lightgoldenrodyellow" }}>
        D
      </div>
      <div key="e" style={{ background: "lightsalmon" }}>
        E
      </div>
      <div key="f" style={{ background: "lightpink" }}>
        F
      </div>
      <div key="g" style={{ background: "lightseagreen" }}>
        G
      </div>
      <div key="h" style={{ background: "lightsteelblue" }}>
        H
      </div>
      <div key="i" style={{ background: "lightyellow" }}>
        I
      </div>
    </GridLayout>
  );
};

export default MyGridLayout;
