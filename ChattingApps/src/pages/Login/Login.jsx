import Lottie from "lottie-react";
import logAni from "../../../public/Animation/Animation3.json"
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../Slices/UserSlices";


const Login = () => {

const auth = getAuth();
const navigate = useNavigate();
const dispatch = useDispatch();
// input vlue state start
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// input value state end

// error message start
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
// error message end

// input function value handling state start
const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
};
const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
};
// input function value handling state end

// show password state start
const [showPassword, setShowPassword] = useState(false);
// show password state end

// regex start
const emailRegex =/^\S+@\S+\.\S+$/;
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)(?!.*\s).{6,}/;


// form submit start
const handleSubmit = (e) => {
    e.preventDefault()
    
  if (email === ""){
    setEmailError("Pleace Enter Your Email");
   }
//  email regex 
   else if(!emailRegex.test(email)) {
    setEmailError("Pleace Enter Valid Email");
   }
  
// password regex 
 else if (password === ""){
    setPasswordError("Pleace Enter Your Password");
   }
  else if(!passwordRegex.test(password)){
    setPasswordError("Pleace Enter Valid Password");
   
}
   else{
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    toast.success("Login Successfull");
    dispatch(userLoginInfo(user));
    localStorage.setItem("user", JSON.stringfy());
    navigate("/header");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    });

   }
   
}


// form submit end

// regex end


return (
    <div id="registation">
        <div className="main">
            <div className="left">
            <h1 className="main_heading text-center">Free Chat bangladesh</h1>
            <p className="main_p text-center mt-[5px]">Log in and you can enjoy it</p>
                
                <div className="ipt">
                <form noValidate onSubmit={handleSubmit}>
                <input onChange={handleEmail} type="email" placeholder="Enter Your E-mail" />
                <p className="erros_text">{emailError}</p>
                
                <div className="relative">
                <input onChange={handlePassword} type={showPassword ? "text" : "password"} placeholder="Enter Your Password" />
                {
                    showPassword?
                    <AiOutlineEye onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3 cursor-pointer text-primary text-xl"></AiOutlineEye>
                    :
                    <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3 cursor-pointer text-primary text-xl"></AiOutlineEyeInvisible>
                }
                </div>
                
                <p className="erros_text">{passwordError}</p>
                <button className="button_v1">Login</button>
                </form>
                {/* <p>Already have a account? Please <Link to="/login">login</Link></p> */}
                <p className=" text-base mt-[20px] text-left">Don't have a account? Please 
                <Link to="/registation" className="text-primary font-bold px-1 cursor-pointer">Registation</Link></p>
                 
            </div>
            </div>
        <div className="right">
             <Lottie className="Animaton" animationData={logAni}></Lottie>
        </div>
    </div>
           
    </div>
    );
};

export default Login;