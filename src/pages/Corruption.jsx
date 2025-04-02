import React from "react";
import Page from "./Page";
import firstImage from '../static/images/corruption.jpeg';
import BackButton from "../components/BackButton";

export default class Corruption extends Page {

    static title = "Антикоррупция";
    static description = "Антикоррупционый комитет Рязанской области";
    static link = "/corruption";

    render() {
        return (<main className={'concrete-page'}>
            <h1>{Corruption.title}</h1>
            <h2>{Corruption.description}</h2>
            <div className={'images'}>
                <img src={firstImage} alt={'first-image'}/>
            </div>
	    <p>Контактный телефон: 8(4912)44-18-22</p>
            <p>Телефон горячей линии по вопросам противодействия коррупции: 8(4912)55-18-27</p>
            <p>Адрес электронной почты: akro@ryazan.gov.ru</p>
            <BackButton/>
        </main>);
    }
}