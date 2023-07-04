import classNames from "classnames";

type LightIsOn = {
    isOn: boolean
}

export function Light({ isOn }:LightIsOn) {
    return (
        <div 
            className={classNames("w-10 h-10", {
                "bg-black": !isOn,
                "bg-yellow-500": isOn
            })}
        />
    );
}