import Lottie from "lottie-react";
import regAni from "../../../public/Animation/Animation4.json"
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const Registation = () => {

    const auth = getAuth();
    const navigate = useNavigate();

// input vlue state start
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// input value state end

// error message start
const [fullNameError, setFullNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
// error message end

// input function value handling state start
const handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameError("");
};
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
    
   if (fullName === ""){
    setFullNameError("Pleace Enter Your Name");
   }
   else if (email === ""){
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
    createUserWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
        updateProfile(auth.currentUser,{
        displayName: fullName, 
        photoURL: "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg"
    })
        toast.success("Registration Successfull");
        navigate('/login');
    // ...
  })
  .catch((error) => {
    console.log(error);
    // ..
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
            <p className="main_p text-center">Free register and you can enjoy it</p>
                
                <div className="ipt">
                <form noValidate onSubmit={handleSubmit}>
                <input onChange={handleFullName} type="text" placeholder="Enter Your Name" />
                <p className="erros_text">{fullNameError}</p>
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
                <button className="button_v1">Registation</button>
                </form>
                {/* <p>Already have a account? Please <Link to="/login">login</Link></p> */}
                <p className=" text-base mt-[20px] text-left">Already have a account? Please 
                <Link to='/login' className="text-primary font-bold px-1 cursor-pointer">Login</Link></p>
                 
            </div>
            </div>
        <div className="right">
             <Lottie className="Animaton" animationData={regAni}></Lottie>
        </div>
    </div>
           
    </div>
    );
};

export default Registation;