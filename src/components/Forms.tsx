import "../App.css";
import { Button } from "../components/Button";
import ModalRender from "../components/ModalRender";
import "../components/Modal.css";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { UserLoginContext } from "../contexts/LoginUser";

function Forms() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [modalOpen, setModal] = useState(false);
    const { userData, setUserData } = useContext(UserLoginContext);

    function openModal() {
        setModal(true);
    }

    return (
        <header className="App-header">
            <div>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        label="E-mail"
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </Box>
            </div>

            <Button
                onClick={() => {
                    openModal();
                    const fetchData = async () => {
                        const response = await window
                            .fetch("http://localhost:8080/login", {
                                method: "POST",
                                headers: {
                                    "content-type":
                                        "application/json;charset=UTF-8",
                                },
                                body: JSON.stringify({
                                    email: email,
                                    password: pass,
                                }),
                            })
                            .then((response) => response.json());
                        const handledANS = JSON.stringify(response.res).replace(
                            /["]/g,
                            ""
                        );

                        // setRes(handledANS);

                        setUserData(handledANS);
                    };

                    fetchData();
                }}
            >
                Entrar
            </Button>

            {modalOpen ? (
                <ModalRender onClose={() => setModal(false)}>
                    <b>{userData}</b>
                </ModalRender>
            ) : (
                <></>
            )}
        </header>
    );
}

export default Forms;
