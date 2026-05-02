import { useState } from 'react';

const Main = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        roomId: '',
    });
    const [joinRoom, setJoinRoom] = useState(false);
    const handleInput = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <main>
            <div>
                <button
                    type="button"
                    onClick={() => setJoinRoom((prev) => !prev)}
                >
                    Toggle
                </button>
            </div>
            <form>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleInput}
                        placeholder="Pick a username"
                    />
                </div>
                <div style={{ display: joinRoom ? 'none' : 'block' }}>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInput}
                        placeholder="Enter the password"
                        disabled={joinRoom}
                    />
                </div>
                <div style={{ display: joinRoom ? 'block' : 'none' }}>
                    <label htmlFor="roomId">RoomId: </label>
                    <input
                        type="text"
                        name="roomId"
                        id="roomId"
                        value={formData.roomId}
                        onChange={handleInput}
                        placeholder="Enter Room Id"
                        disabled={!joinRoom}
                    />
                </div>
                <div>
                    <button type="submit">
                        {joinRoom ? 'Join the Room' : 'Create a Room'}
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Main;
