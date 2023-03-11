import React, { useState } from 'react';
import { login } from '../actions/user';
import {useNavigate} from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

    const handlePress = () => {
        login(username, password).then(res => {
            if (res) {
                setTimeout(navigate, 2000, '/admin');
            } else {
                setMessage('Invalid username or password')
            }
        });
    }

    return (
        <div className="stone__form">
            <h1>Админ панель</h1>
            <fieldset className="stone__option">
                <input value={username} className="stone__form-input" type="text" placeholder='Имя пользователя' onChange={event => setUsername(event.target.value)}/>
            </fieldset>
            <fieldset className="stone__option">
                <input value={password} className="stone__form-input" type="password" placeholder='Пароль' onChange={event => setPassword(event.target.value)}/>
            </fieldset>
            {message && <p>{message}</p>}
            <button className="stone__form-submit" onClick={() => handlePress()}>Войти</button>
        </div>
    )
};