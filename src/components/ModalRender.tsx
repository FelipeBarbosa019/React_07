import "./Modal.css";
import { ReactNode } from "react";

interface Prototype {
    children?: ReactNode | string;
    onClose?: () => void;
}

function ModalRender({ children, onClose }: Prototype) {
    function clickOutSide(e: any) {
        if (e.target.id === "outside") {
            onClose?.();
        }
    }

    return (
        <div
            id="outside"
            className="container_background"
            onClick={clickOutSide}
        >
            <div className="container_modal">
                <div className="container_top_modal">
                    <b className="close_modal" onClick={onClose}>
                        x
                    </b>
                </div>
                <div className="result">{children}</div>
            </div>
        </div>
    );
}

export default ModalRender;
