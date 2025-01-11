import { useEffect, useState } from "react"


const WS_URL = 'ws://localhost:8080';

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    ws.onopen = () => {
      console.log('Connected to server');
    }
    ws.onclose = () => {
      console.log('Disconnected from server');
    }
    setSocket(ws);
    return () => {
      ws.close();
    }
  }, [])

  return socket;
}
