import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

const callbak = action('rating clicked, changed inside component')

export const EmptyRating = () => {return<UncontrolledRating defaultValue = {0} onChange={callbak}/>}
export const Rating1 = () => {return<UncontrolledRating defaultValue = {1} onChange={callbak}/>}
export const Rating2 = () => {return<UncontrolledRating defaultValue = {2} onChange={callbak}/>}
export const Rating3 = () => {return<UncontrolledRating defaultValue = {3} onChange={callbak}/>}
export const Rating4 = () => {return<UncontrolledRating defaultValue = {4} onChange={callbak}/>}
export const Rating5 = () => {return<UncontrolledRating defaultValue = {5} onChange={callbak}/>}