import { useEffect, useState } from "react"

function App() {
  
  return (
    <>
      <div className="bg-black h-screen">
        <div className="p-3">
          <h1 className="text-white text-5xl max-w-[25ch] font-inter">
            Greetings User! Welcome to todox
          </h1>
          <div className="flex justify-around items-center">
            <div className="text-white font-inter text-3xl">
              Tasklist
            </div>
            <div>
              <button className="text-white bg-gray-800 px-4 py-2 rounded-sm">
                Create New +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
