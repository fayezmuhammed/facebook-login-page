import { useState } from "react";

function App(){

  return(
    <div className='min-h-screen min-w-[100vw] flex items-center justify-center'>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col pl-[20vw]">
          <h1 className='font-extrabold text-8xl text-blue-700'>facebook</h1>
          <span className="text-lg">Where people comes for interaction</span>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="border-2 shadow-lg p-4 w-[27vw]">
          <div className="flex flex-col gap-4">
            <input type="text" className="p-3 w-full border rounded-lg outline-blue-600" placeholder="Email address or Phone number" />
            <input type="text" className="p-3 w-full border rounded-lg outline-blue-600 " placeholder="password" />
            <button className="bg-blue-600 py-3 text-white text-lg rounded-md">Log In</button>
            <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" className="text-blue-700 text-center">Forgotten Password?</a>
          </div>
          <div className="h-[0.5px] w-full bg-gray-200 my-4"></div>
          <div className="flex flex-1 items-center justify-center">
          <button className="bg-green-700 p-4 text-white font-semibold text-lg rounded-md">Create new account</button>

          </div>
        </div>
      </div>
    </div>
  )
}
export default App