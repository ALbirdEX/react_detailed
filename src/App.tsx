import React, {useState} from 'react';
import './App.css';
import {Accordion2} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion, UncontrolledAccordion2} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledRating2} from "./components/Rating/UncontrolledRating2";
import {UncontrolledRating3} from "./components/Rating/UncontrolledRating3";
import {MySelect} from "./components/Select/MySelect";

/*function hello() {
    debugger
    alert('Hello IT-KAMASUTRA')
}*/

//hello()

function App() {
    console.log('App rendering')

    let [switchOn, setSwitchOn] = useState<boolean>(true)
    //const OnOffHandler = (value: boolean) => setClick(value)

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const onChange = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const onClick = (value: any) => alert(value)

    //MySelect
    const [title, setTitle] = useState<string>("Click")
    const onChangeTitle =(value: string) => {
        setTitle(value)
    }
    return (
        <div className={"App"}>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3} onClick={() => {
            }}/>
            <Accordion2 titleValue={'Menu controlled'}
                //setAccordionCollapsed={setAccordionCollapsed}
                        collapsed={accordionCollapsed}
                        onChange={onChange}
                        items={[
                            {title: "Viktor", value: 1},
                            {title: "Dima", value: true},
                            {title: "Ivan", value: "10"},
                            {title: "Alex", value: false},
                            {title: "I", value: ""}
                        ]}
                        onClick={onClick}/>
            {/*
            <Accordion titleValue={'Users'} collapsed={false}/>
*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledAccordion2 titleValue={'UncontrolledAccordion2'}/>
            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/* <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            UncontrolledStar
            <UncontrolledRating onChange={setRatingValue}/>
            <UncontrolledRating2/>
            <UncontrolledRating3/>
            <OnOff on={switchOn}
                   OnOffHandler={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <hr/>
            <MySelect value={title}
                      onChange={onChangeTitle}
                      item={[
                          {title: "Viktor", value: 1},
                          {title: "Dima", value: true},
                          {title: "Ivan", value: "10"},
                          {title: "Alex", value: false},
                          {title: "I", value: ""}
                      ]}/>
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