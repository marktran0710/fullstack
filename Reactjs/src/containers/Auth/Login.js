import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowPassword: false
        }
    }

    handleOnChangUserNameInput = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    handleOnChangPasswordInput = (event) => {
        this.setState({
            password: event.target.value,
        })

    }

    handleClickLogin = () => {
        console.log(this.state)
    }

    handleOnClickShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        let inputPassword = this.state.password;
        let isEmptyInputPassword = Object.keys(inputPassword).length === 0;
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login"><span>Login</span></div>
                        <div className=" col-12 form-group login-input">
                            <label htmlFor="">Username:</label>
                            <input className="col-12 form-control" onChange={(event) => { this.handleOnChangUserNameInput(event) }} value={this.state.username} type="text" placeholder="Enter your username" />
                        </div>
                        <div className=" col-12 form-group login-input eyes-password-input">
                            <label htmlFor="">Password:</label>
                            <input className="col-12 form-control" onChange={(event) => { this.handleOnChangPasswordInput(event) }} value={this.state.password} type={this.state.isShowPassword ? 'text' : "password"} placeholder="Enter your password" />
                            <span onClick={() => this.handleOnClickShowPassword()}>
                                {this.state.isShowPassword && isEmptyInputPassword === false ? <i className="fas fa-eye-slash icon-eyes"></i> : <i className="fas fa-eye icon-eyes"></i>}

                            </span>
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" onClick={() => this.handleClickLogin()} className="btn btn-login">Login</button>
                        </div>
                        <div className="col-12">
                            <span>Forgot your password</span>
                        </div>
                        <div className="col-12 text-center">
                            <p className="p-2">Or login with:</p>
                        </div>
                        <div className="col-12 social-login">
                            <span className="icon google"><i className="fab fa-google"></i></span>
                            <span className="icon facebook"><i className="fab fa-facebook-f"></i></span>
                            <span className="icon twitter"><i className="fab fa-twitter"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) =>
            dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
