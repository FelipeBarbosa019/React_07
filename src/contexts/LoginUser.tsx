import { createContext, useState } from "react";

interface UserContextProps {
    userData: string;
    setUserData: React.Dispatch<React.SetStateAction<string>>;
}

interface IProps {
    children: React.ReactNode;
}

export const UserLoginContext = createContext<UserContextProps>(
    {} as UserContextProps
);

export const UserLoginProvide = ({ children }: IProps) => {
    const [userData, setUserData] = useState<string>(
        "Problema na conexão com a API"
    );

    return (
        <UserLoginContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserLoginContext.Provider>
    );
};
