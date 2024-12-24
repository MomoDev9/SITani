import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseTheme from "../UseTheme";

export default function Switcher() {
    const [colorTheme, setTheme] = UseTheme();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
        console.log(checked);
    };

    return (
        <>
            <div>
                <DarkModeSwitch
                    checked={darkSide}
                    onChange={toggleDarkMode}
                    size={48}
                    sunColor="#F28C38"
                    moonColor="#C3C1A1"
                />
            </div>
        </>
    );
}
