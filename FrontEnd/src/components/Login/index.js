import React from 'react'
import logo from '../../assets/logo.png'
import "./styles.css"

function Login() {
    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <div className="logo-login">
                            <img src={logo}/>
                        </div>
                        <div className="form-group mt-3">
                        <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="input-login form-control mt-1"
                                placeholder="Digite seu E-mail"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="form-group mt-3">
                        <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                className="input-senha form-control mt-1"
                                placeholder="Digite sua Senha"
                                name="password"
                            />
                        </div>
                        <button type="submit" className="btn1">
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
