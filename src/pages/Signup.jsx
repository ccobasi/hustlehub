// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles/register.css'
import ChevronLeft from '../assets/akar-icons-chevron-left-nea.png';
import Profile from '../assets/profile2-1.png';
import MailOutline from '../assets/mail-outline-1-9jk.png';
import CheckedUserMale from '../assets/checked-user-male.png';
import Rectangle from '../assets/rectangle-72.png';
import PasswordDot from '../assets/password6-1-dot.png';
import Eye1 from '../assets/eye-zLN.png';
import PasswordCgv from '../assets/password6-1-cgv.png';
import Eye2 from '../assets/eye-jci.png';
import Apple from '../assets/cib-apple.png';
import Google from '../assets/flat-color-icons-google-FUz.png';
import Facebook from '../assets/ion-logo-facebook-kuc.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="register-7qY">
      <div className="auto-group-djjk-2xW">
        
        
      </div>
      <Link to="/"><img className="akar-icons-chevron-left-3Ci" src={ChevronLeft} alt="Chevron Left" /></Link>
      <div className="auto-group-ewjl-NVt">
        <div className="group-46-Uop">
          <p className="headline-RDG">Registration </p>
          <p className="headline-HmG">Let’s Register. Apply to jobs!</p>
        </div>
        <div className="auto-group-bu1x-cYe">
          <img className="profile2-1-9oU" src={Profile} alt="Profile" />
          <div className="group-59-szN">Full Name</div>
        </div>
        <div className="group-48-VF4">
          <img className="mail-outline-1-cKg" src={MailOutline} alt="Mail Outline" />
          <p className="e-mail-j9Q">E-mail</p>
        </div>
        <div className="group-60-dEn">
          <img className="checked-user-male-MAn" src={CheckedUserMale} alt="Checked User Male" />
          <p className="choose-role-UWJ">Choose Role</p>
          <img className="rectangle-72-yhx" src={Rectangle} alt="Rectangle" />
        </div>
        <div className="group-47-t4E">
          <img className="password6-1-18r" src={PasswordDot} alt="Password" />
          <p className="password-vWi">Password</p>
          <img className="eye-qdg" src={Eye1} alt="Eye" />
        </div>
        <div className="group-58-Z3t">
          <img className="password6-1-Gyt" src={PasswordCgv} alt="Password" />
          <p className="confirm-password-QKQ">Confirm Password</p>
          <img className="eye-WtE" src={Eye2} alt="Eye" />
        </div>
        <div className="button-2bg">Register</div>
        <div className="group-52-JJJ">
          <div className="line-182-2zz"></div>
          <p className="or-continue-with-NJA">Or continue with</p>
          <div className="line-183-hbL"></div>
        </div>
        <div className="group-57-ErA">
          <div className="group-56-9TL">
            <img className="cib-apple-HpS" src={Apple} alt="Apple" />
          </div>
          <div className="group-55-Pca">
            <img className="flat-color-icons-google-LGv" src={Google} alt="Google" />
          </div>
          <div className="group-54-2vS">
            <img className="ion-logo-facebook-LAS" src={Facebook} alt="Facebook" />
          </div>
        </div>
        <p className="have-an-account-log-in-yUJ">
          <span className="have-an-account-log-in-yUJ-sub-0">Have</span>
          <span className="have-an-account-log-in-yUJ-sub-1"> </span>
          <span className="have-an-account-log-in-yUJ-sub-2">an account? </span>
          <span className="have-an-account-log-in-yUJ-sub-3">Log in</span>
        </p>
        <div className="home-indicator-BMQ"></div>
      </div>
    </div>
  );
};

export default Signup;
