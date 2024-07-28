// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // const socket = new WebSocket(`ws://${window.location.host}/ws/notification/`);
        const ws = new WebSocket('ws://localhost:8080/ws/notification/');

        ws.onmessage = function(event) {
            const data = JSON.parse(event.data);
            setNotifications((prevNotifications) => [data.message, ...prevNotifications]);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
