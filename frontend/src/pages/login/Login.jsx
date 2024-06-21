import { useState } from 'react';
import { FaFingerprint } from "react-icons/fa";
import useLogin from '../../hooks/useLogin.js';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");
    const [admissionNumber, setAdmissionNumber] = useState("");

    const {loading, login} = useLogin();

  const handleLogin = async (e) => { 
      e.preventDefault();
      await login({ email, password, admissionNumber, role});
  }


  return (
    <div className='p-4 flex items-center justify-center h-screen signUpBg'>
        <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                Login{" "}
                <span className="text-blue-500"></span>
                </h1>

                <form onSubmit={handleLogin}>

                      {role === "student" && (<div>
                          <label className="label p-2">
                              <span className="text-base label-text">Admission Number</span>
                          </label>
                          <input type="text" placeholder="enter Admission Number"
                              className="w-full input input-bordered h-10"
                              value={admissionNumber}
                              onChange={(e) => setAdmissionNumber(e.target.value)}
                          />
                      </div>)}


                      {role !== "student" && (<div>
                          <label className="label p-2">
                              <span className="text-base label-text">Email</span>
                          </label>
                          <input type="email" placeholder="enter email"
                              className="w-full input input-bordered h-10"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                          />
                      </div>)}


                      {role !== "student" && (<div>
                          <label className="label p-2">
                              <span className="text-base label-text">password</span>
                          </label>
                          <div className="flex items-center justify-between w-full input input-bordered h-10">
                              <input type={showPassword ? "text" : "password"}
                                  placeholder="enter password"
                                  className="input-bordered"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                              />
                              <span className="hover:text-blue-600" onClick={() => setShowPassword((prev) => !prev)}>
                                  <FaFingerprint size={25} />
                              </span>
                          </div>
                      </div>)}

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text"> Role</span>
                        </label>
                        <select className="w-full input h-10 input-bordered"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        > 
                            <option>student</option>
                            <option>teacher</option>
                            <option>admin</option>
                        </select>
                    </div>

                    <div>
                        <button type='submit'
                        className="btn btn-block btn-sm mt-4 border-sky-500 bg-sky-500 text-black hover:bg-blue-600"
                        disabled = {loading}
                        >
                        {loading ? <span className='loading loading-spinner'/>:"Login"}
                        </button>
                    </div>

                </form>

            </div>

        </div>
    </div>
  )
}

export default Login


