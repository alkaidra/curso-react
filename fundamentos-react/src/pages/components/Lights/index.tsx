import { Light } from "./light";

type LightIsOn = {
    isOn: boolean
}

export function Lights({ isOn }:LightIsOn) {
    return (
        <div className="flex gap-4">
            <Light isOn={ isOn }/>
            <Light isOn={ isOn }/>
            <Light isOn={ isOn }/>
        </div>
    );
}