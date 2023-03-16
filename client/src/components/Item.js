import React, { useContext, useEffect, useState } from 'react';
import { DefaultContext } from '../Context';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem } from '../actions/item';
import logo from '../img/logo.png';

const Item = () => {

    const navigate = useNavigate()
    const { index } = useParams();
    const { items, item, setItem, setView } = useContext(DefaultContext);

    useEffect(() => {
        if(!items) {
            getItem(index).then(res => setItem(res));
        } else {
            setItem(items[index]);
        }
    }, [])

    return (
        <section className='stone__item'>
            <img className="stone__logo" src={logo} alt="logo" onClick={() => navigate("/")}/>
            <div className="item__card">
                <div className='item__data'>
                    <h2 className="stone-gap__title">{item.name}</h2>
                    <table className="stone-gap__table">
                        <tr className="stone-gap__row">
                            <td className="stone-gap__d">Размеры:</td>
                            <td className="stone-gap__d">{item.size}</td>
                        </tr>
                        <tr className="stone-gap__row">
                            <td className="stone-gap__d">Толщина:</td>
                            <td className="stone-gap__d">{item.thick}</td>
                        </tr>
                        <tr className="stone-gap__row">
                            <td className="stone-gap__d">Производитель:</td>
                            <td className="stone-gap__d">{item.producer}</td>
                        </tr>
                    </table>
                    <b className="stone-gap__price">Цена: {item.cost} KZT</b>
                    <a className="stone-gap__buy" href='#'><span className="buy">Заказать</span></a>
                </div>
                <img className="stone-gap__image" src={item.img} onClick={() => setView(true)}/>
            </div>
        </section>
    )
}

export default Item