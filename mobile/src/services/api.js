import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333',
});

export default api;

/**
 * Ios com emulador: localhost
 * ios com fisico: ip da maquina
 * Android com emulador: localhost adb reverse
 * android com emulador 10.0.2.2 android studio
 * android com fisico - ip da maquina
 */