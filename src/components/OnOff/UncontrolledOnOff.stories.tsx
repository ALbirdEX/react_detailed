import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('on or off clicked')

export const OnMode = () => {
  return<UncontrolledOnOff defaultOn={true} onChange={callback}/>
}
export const OffMode = () => {
  return<UncontrolledOnOff defaultOn={false} onChange={callback}/>
}