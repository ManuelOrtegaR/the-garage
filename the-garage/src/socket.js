import { io } from "socket.io-client";

const socket = io("https://the-garage-api.onrender.com");

socket.on("connect", () => {
  console.log("conectado to the server");
});

export default socket;
