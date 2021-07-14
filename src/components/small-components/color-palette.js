import React from "react";

export default function ColorPalette(props) {
  const { colors = [] } = props;

  return (
    <div className="color-palette">
      <h3 className="centered-text">COLOR PALETTE</h3>
      <div className="colors">
        {colors.map((color) => {
          const style = { "--color-palette": color.color };
          return <div key={color.color} data-color-name={color.name} style={style} />;
        })}
      </div>
    </div>
  );
}
