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
                <label key={color} style={{ marginRight: "10px"}}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={(event) => {setSelectedColor(event.target.value)}}
                    />
                    {color}
                </label>
            ))}

            <div data-testid="colored-box" style={{backgroundColor: selectedColor,
                padding: "10px",
                marginTop: "10px"
            }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
