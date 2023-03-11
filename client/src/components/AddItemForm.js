import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem, editItem } from '../actions/item';
import { DefaultContext } from '../Context';

export const AddItemForm = () => {

    const navigate = useNavigate();
    const [confirmed, setConfirmed] = useState(false);
    const { item, setItem, edit, setEdit } = useContext(DefaultContext);

    const handleAdd = () => {
        if (confirmed) {
            if (edit) {
                editItem(item);
                setEdit(!edit);
                alert("Item was changed");
            } else {
                addItem(item);
                alert("Item was added");
            }
            navigate('/admin');
        } else {
            alert("Подтвердите товар!")
        }
    }

    const getBase64 = (file) => {
        var reader = new FileReader();   
        reader.readAsDataURL(file);
        reader.onload = function () {
            setItem({...item, img: reader.result});
        };
    }

    return (
        <div className="stone__form">
            <h1>Форма добавления товара</h1>
            <fieldset className="stone__option">
                <legend className="stone__form-title">Название товара</legend>
                <input value={item.name} className="stone__form-input" type="text" placeholder="Cacutta gold" onChange={event => setItem({...item, name: event.target.value})}/>
            </fieldset>
            <fieldset className="stone__option">
                <legend className="stone__form-title">Размеры</legend>
                <input value={item.size} className="stone__form-input" type="text" placeholder="1200x600 см" onChange={event => setItem({...item, size: event.target.value})}/>
            </fieldset>
            <fieldset className="stone__option">
                <legend className="stone__form-title">Толщина</legend>
                <input value={item.thick} className="stone__form-input" type="text" placeholder="1 см" onChange={event => setItem({...item, thick: event.target.value})}/>
            </fieldset>
            <fieldset className="stone__option">
                <legend className="stone__form-title">Производитель</legend>
                <input value={item.producer} className="stone__form-input" type="text" placeholder="Kazakhstan" onChange={event => setItem({...item, producer: event.target.value})}/>
            </fieldset>
            <fieldset className="stone__option">
                <legend className="stone__form-title">Фото</legend>
                <input className="stone__form-input" type="file" onChange={(event) => getBase64(event.target.files[0])}/>
                <img src={item.img} className="stone__gap-image add"/>
            </fieldset>
            <fieldset className="stone__option">
                <legend className="stone__form-title">Цена</legend>
                <input value={item.cost} className="stone__form-input" type="text" placeholder="14990 тг." onChange={event => setItem({...item, cost: event.target.value})}/>
            </fieldset>
            <fieldset className="stone__option stone__checkbox-option">
                <legend className="stone__form-title">Подтверждение:</legend>
                <input value={confirmed} className="stone__checkbox" type="checkbox" onChange={() => setConfirmed(!confirmed)}/>
            </fieldset>
            <button className="stone__form-submit" onClick={() => handleAdd()}>{edit ? "Изменить" : "Добавить"}</button>
        </div>
    )
}