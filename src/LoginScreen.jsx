import './App.css'
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { ImCross } from "react-icons/im";

const LoginScreen = () => {

    return (
        <div className="App">
            <div>
                <img 
                    src='src/img/logo.png'
                    width={250}
                    style={{
                        marginTop: "50px",
                        marginBottom: "30px"
                    }}
                /><br />
                <ImCross size={45} />
            </div>
            <div>
                <img
                    src='src/img/login_google.png'
                    width={300}
                    style={{
                        marginTop: "35px",
                        borderWidth: "3px",
                        borderStyle: "solid",
                        borderRadius: "40px",
                        cursor: "pointer"
                    }}
                />
            </div>
            
        </div>
    )
}

export default LoginScreen;