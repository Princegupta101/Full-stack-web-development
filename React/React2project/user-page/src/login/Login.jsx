 import './login.css'
 import reactLogo from '../assets/Instagram.png'  
 import { useState } from "react";

 function Login(){
    const [pagelogin , setpage] =useState(false);
    const pageChange=()=>{
        setpage(!pagelogin);
    }
    return (
        <>
            <div className="loginbox">  
                <div className='login-text'>
                <img  src={reactLogo} alt="react logo"  height={120} className='ln-logo'/>
                     <input hidden={pagelogin} type="text" name="" placeholder='Mobile Number or Email' id="" />
                    <input hidden={pagelogin} type="text" name="" placeholder='Full Name' id="" />
                    <input type="text" placeholder="Email, Moblie no.,or username"/>
                    <input type="password" placeholder="Password"/>
                    <button>{pagelogin?"login":"Signup"}</button>
                </div>   
                <div className='create-acccount'>
                {pagelogin?"Don't have account?":"have an account?"} 
                <span onClick={pageChange}>{pagelogin?"Signup":"Login"}</span>
                </div>
            </div>
        </>
    );
}
export default Login;