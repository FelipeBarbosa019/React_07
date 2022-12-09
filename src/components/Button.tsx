import { ReactNode } from "react";
import ButtonCSS from "../styles";

interface Prototype {
    children?: ReactNode | string;
    onClick?: () => void;
}

export const Button = ({ children, onClick }: Prototype) => {
    return <ButtonCSS onClick={onClick}>{children}</ButtonCSS>;
};
