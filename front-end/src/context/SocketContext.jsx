import { createContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { use } from "express/lib/application";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const { authUser } = useAuthContext();

    
    return (
        <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>
    )
}
