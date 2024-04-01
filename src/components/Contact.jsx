import React from 'react'
import "./contactUs.css";

const Contact = () => {
  return (
    <div className="login-form-wrap">
    <div className="login-box">
        <div className="login-content-warp">
            <div className="profile-form">
                <img src="https://res.cloudinary.com/dzeznhbhc/image/upload/v1686724750/samples/cute-fantasy_1_jsf3ic.png" alt="women"/>
                <span className="profile-title">user login</span>
            </div>
            <form action="">
                <div className="email-input">
                    <span className="email"><i className="fa-regular fa-envelope"></i> </span>
                    <input type="text" placeholder="email address"/>
                </div>

                <div className="password-input">
                    <span className="email"><i className="fa-solid fa-lock"></i></span>
                    <input type="password" placeholder="password"/>
                </div>

                <div className="forget-link-warp">
                    <div className="checkbox">
                        <input type="checkbox"/>
                        <span>keep me signed in</span>
                    </div>
                    <div>
                        <span>forget your password</span>
                    </div>
                </div>
            </form>

            <div className="social-icon">
                <a className="social-icon-warp" href="https://www.google.com/">
                    <img src="https://res.cloudinary.com/dzeznhbhc/image/upload/v1686725283/samples/google-plus_1_dbtrqm.png" alt=""/>
                    <span>Login google</span>
                </a>
            </div>

            <div className="butn-sign">
                <button>sign in</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact