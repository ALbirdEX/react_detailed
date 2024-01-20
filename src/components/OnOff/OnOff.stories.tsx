import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'On Off Switch',
    component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} OnOffHandler={callback}/>
export const OffMode = () => <OnOff on={false} OnOffHandler={callback}/>

export const SwitchMode = () => {
    const [switchOn, setSwitchOn] = useState<boolean>(true)
    return <OnOff on={switchOn}
                  OnOffHandler={setSwitchOn}/>
}