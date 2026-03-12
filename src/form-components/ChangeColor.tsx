import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {colors.map((color: string) => (
                <label key={color} style={{ marginRight: "12px" }}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={(event) => {
                            setSelectedColor(event.target.value);
                        }}
                    />{" "}
                    <span
                        style={{
                            backgroundColor: color,
                            padding: "2px 4px",
                        }}
                    >
                        {color}
                    </span>
                </label>
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    marginTop: "10px"
                }}
            >
                <div style={{ backgroundColor: "white", padding: "6px" }}>
                    You have chosen{" "}
                    <span
                        style={{
                            backgroundColor: selectedColor,
                            padding: "2px 4px",
                        }}
                    >
                        {selectedColor}
                    </span>.
                </div>
            </div>
        </div>
    );
}
