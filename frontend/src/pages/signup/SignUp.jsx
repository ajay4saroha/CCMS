import { Link } from "react-router-dom";
import { useState } from "react"
import { FaFingerprint, FaArrowLeft } from "react-icons/fa";
import useSignUp from "../../hooks/useSignUp.js";



const SignUp = () => {

  const [user, setUser] = useState({
    fullName: "",
    admissionNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    batch: "morning",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const { loading, signup } = useSignUp();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signup(user);
    setUser({...user,
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "student",
      batch: "morning",
    })
  }

  return (
    <div className="h-screen signUpBg">
      <Link to="/" className="inline-flex p-10 gap-2 text-white hover:text-blue-500 ">
        <FaArrowLeft size={25}/>
        <span >HOME</span>
      </Link>
      <div className=" p-4 flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

            <h1 className="text-3xl font-semibold text-center text-gray-300">
              Register{" "}
              <span className="text-blue-500">New User</span>
            </h1>

            <form onSubmit={handleSignUp}>

              <div>
                <label className="label p-2">
                  <span className="text-base label-text">FullName</span>
                </label>
                <input type="text" placeholder="enter full name"
                  className="w-full input input-bordered h-10"
                  value={user.fullName}
                  onChange={(e) => setUser({...user, fullName: e.target.value})}
                />
              </div>

              {user.role === "student" && (<div>
                <label className="label p-2">
                  <span className="text-base label-text">Admission Number</span>
                </label>
                <input type="text" placeholder="enter admissionNumber" className="w-full input input-bordered h-10" value={user.admissionNumber}
                  onChange={(e) => setUser({ ...user, admissionNumber: e.target.value })}
                />
              </div>)}

              {user.role !== "student" && (<div>
                <label className="label p-2">
                  <span className="text-base label-text">Email</span>
                </label>
                <input type="email" placeholder="enter email" className="w-full input input-bordered h-10" value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>)}


              {user.role !== "student" && (<div>
                <label className="label p-2">
                  <span className="text-base label-text">password</span>
                </label>
                <div className="flex items-center justify-between w-full input input-bordered h-10">
                  <input type={showPassword ? "text" : "password"} placeholder="enter password"
                    className="input-bordered " value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                  <span className="hover:text-blue-600" onClick={() => setShowPassword((prev) => !prev)}>
                    <FaFingerprint size={25} />
                  </span>
                </div>
              </div>)}

              {user.role !== "student" && (<div>
                <label className="label p-2">
                  <span className="text-base label-text"> confirm password</span>
                </label>
                <div className="flex items-center justify-between w-full input input-bordered h-10">
                  <input type={showConfirmPassword ? "text" : "password"} placeholder="confirm password"
                    className="input-bordered"
                    value={user.confirmPassword}
                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                  />
                  <span className="hover:text-blue-600" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    <FaFingerprint size={25} />
                  </span>
                </div>
              </div>)}
                
              <div>
                  <label className="label p-2">
                    <span className="text-base label-text"> Role</span>
                  </label>
                  <select className="w-full input h-10 input-bordered"
                    value={user.role}
                    onChange={(e) => setUser({...user, role: e.target.value})}
                  > 
                    <option>student</option>
                    <option>teacher</option>
                    <option>admin</option>
                  </select>
              </div>
                
                {user.role === "student" && (
                  <div>
                    <label className="label p-2">
                      <span className="text-base label-text">Batch</span>
                    </label>
                    <select className="w-full input h-10 input-bordered"
                      value={user.batch}
                      onChange={(e) => setUser({...user, batch: e.target.value})}
                    > 
                      <option>morning</option>
                      <option>mid-morning</option>
                      <option>noon</option>
                      <option>afternoon</option>
                      <option>evening</option>
                      <option>late-evening</option>
                    </select>
                  </div>
              )}
              
              <div>
                <button className="btn btn-block btn-sm mt-4 border-sky-500 bg-sky-500 text-black hover:text-white" type="submit"
                  disabled = {loading}
                >
                  {loading? <span className="loading loading-spinner" /> : "Sign Up"}
                </button>
              </div>  
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp
