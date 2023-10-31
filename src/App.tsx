import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion, UncontrolledAccordion2} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledRating2} from "./components/Rating/UncontrolledRating2";

/*function hello() {
    debugger
    alert('Hello IT-KAMASUTRA')
}*/

//hello()

function App() {
    console.log('App rendering')

    let[click, setClick]=useState<boolean>(true)

    const OnOffHandler = (value: boolean) => {
         return setClick(value)
    }

    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledAccordion2 titleValue={'UncontrolledAccordion2'}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            UncontrolledStar
            <UncontrolledRating/>
            <UncontrolledRating2/>
            <OnOff on={click}
                   OnOffHandler={OnOffHandler}/>
            <UncontrolledOnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>  //фрагмен, JSX элемент но не превращается в разметку
}

export default App;