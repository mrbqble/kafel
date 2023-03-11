import { deleteItem, getItems } from '../actions/item';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
import { DefaultContext } from '../Context';

const Admin = () => {

    const navigate = useNavigate();
    const { items, setItems, setItem, setEdit } = useContext(DefaultContext);
    const [search, setSearch] = useState("");
    
    const arraySF = items?.filter(item => item.name.split(' ').filter(word => word.substring(0, search.length).toLowerCase() === search.toLowerCase()).length > 0);

    useEffect(() => {
        getItems().then(res => setItems(res));
    }, [])

    const handleEdit = (index) => {
        setEdit(true);
        setItem(arraySF[index]);
        navigate('/addItem');
    }

    const handleAdd = () => {
        setItem({});
        navigate('/addItem');
    }

    const handleDelete = (_id) => {
        deleteItem(_id).then(res => getItems().then(res => setItems(res)));
        alert("Item was deleted");
    }

    return (
        <section className="stone__gaps admin">
            <a className="stone-gap__buy" onClick={() => handleAdd()}><span className="buy">Добавить товар</span></a>
            <input className="stone__form-input" type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Поиск"/>
            <table className='admin__table'>
                <tr className='admin__table-row'>
                    <th>Название</th>
                    <th>Размеры</th>
                    <th>Толщина</th>
                    <th>Производитель</th>
                    <th>Цена</th>
                    <th>Фото</th>
                    <th></th>
                    <th></th>
                </tr>
                {arraySF?.map((item, index) =>
                    <tr className="stone-gap__row admin__table-row" key={index}>
                        <td className="stone-gap__d">{item.name}</td>
                        <td className="stone-gap__d">{item.size}</td>
                        <td className="stone-gap__d">{item.thick}</td>
                        <td className="stone-gap__d">{item.producer}</td>
                        <td className="stone-gap__d">{item.cost}</td>
                        <td className="stone-gap__d">
                            <img className="stone-gap__image timg" src={item.img}/>
                        </td>
                        <td className="stone-gap__d">
                            <a onClick={() => handleEdit(index)} className="stone-gap__buy">Изменить</a>
                        </td>
                        <td className="stone-gap__d">
                            <a onClick={() => handleDelete(item._id)} className="stone-gap__buy">Удалить</a>
                        </td>
                    </tr>
                )}
            </table>
        </section>
    )
}

export default Admin