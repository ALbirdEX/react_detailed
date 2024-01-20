import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: 'Rating stories',
    component: Rating
}

const onChangeHandler = action('onClick')

export const EmptyRating =() => {
    return <Rating value={0}
                   onClick={onChangeHandler}/>
}
export const Rating1 =() => {
    return <Rating value={1}
                   onClick={() => {}}/>

}
export const Rating2 =() => {
    return <Rating value={2}
                   onClick={() => {}}/>
}
export const Rating3 =() => {
    return <Rating value={3}
                   onClick={() => {}}/>
}
export const Rating4 =() => {
    return <Rating value={4}
                   onClick={() => {}}/>
}
export const Rating5 =() => {
    return <Rating value={5}
                   onClick={() => {}}/>
}
export const ChangeRating =() => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value={rating}
                   onClick={setRating}/>
}


