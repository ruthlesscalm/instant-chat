import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const JoinRoom = () => {
    const { roomId } = useParams();
    const { user, setUser } = useContext(GlobalContext);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setUser(true);
        }
    }, [setUser]);
    const handleInput = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const rawData = Object.fromEntries(form);
        const username = localStorage.getItem('username') || rawData.username;
        const password = rawData.password;

        const res = await fetch(`/api/rooms/join/${roomId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const data = await res.json();
        console.log(data);
    };
    return (
        <>
            <Header
                user={user}
                username={localStorage.getItem('username') || formData.username}
            />
            <main>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: user ? 'none' : 'block' }}>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleInput}
                            disabled={user}
                            placeholder="Pick a username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            id="password"
                            onChange={handleInput}
                            placeholder="Enter the Password"
                        />
                    </div>
                    <div>
                        <button type="submit">Join Room</button>
                    </div>
                </form>
            </main>
        </>
    );
};

export default JoinRoom;
