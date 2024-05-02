import React, {useState} from 'react'

const VerifyEmail = () => {
    return (
        <div>
            <div className="form-container">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Enter your Otp code:</label>
                        <input type="text" name="otp" id="" className="email-form" />
                    </div>
                    <input type="submit" className='vbtn' value='Send'/>
                </form>
            </div>
        </div>
    )
};

export default VerifyEmail;