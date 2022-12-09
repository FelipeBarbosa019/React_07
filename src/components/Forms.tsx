import { ReactNode } from "react";

interface Prototype {
    children: ReactNode;
}

function Forms({ children }: Prototype) {
    return <form>{children}</form>;
}

export default Forms;
