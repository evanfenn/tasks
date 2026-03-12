import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <label>
                Edit Mode 
                <input
                    type="checkbox"
                    role="switch"
                    checked={editMode}
                    onChange={(event)=>setEditMode(event.target.checked)}
                />
            </label>

            {editMode ? (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <label>
                        Student
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(event) => setIsStudent(event.target.checked)}
                            />
                    </label>
                </div>
            ) : (
                <p>
                    {name} is {isStudent ? "" : "not"} a student
                </p>
            )}
        </div>
    );
}
