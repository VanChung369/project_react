import { createContext } from 'react';
import { io } from 'socket.io-client';

const { REACT_APP_API_URL } = process.env;

export const socket = io('http://localhost:9000');
export const SocketContext = createContext(socket);
