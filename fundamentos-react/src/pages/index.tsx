import classNames from "classnames";
import { useState } from "react";
import { Lights } from "./components/Lights";

export default function Index() {
    const [lightsIsOn, setLightsIsOn] = useState<boolean>(false);
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <button 
                type="button" 
                onClick={() => setLightsIsOn(!lightsIsOn)}
                className={classNames("mb-4 p-4 rounded-full", lightsIsOn ? "bg-black text-white" : "bg-yellow-400")}
            >
                { lightsIsOn ? "Desligar a luz" : "Ligar a luz" }
            </button>
            <Lights isOn={lightsIsOn} />
        </div>
    );
}