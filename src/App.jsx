import { useState } from 'react'

function App() {
  const [color, setColor] = useState("grey")
  return (
    <>
    <div className='w-full h-screen duration-150' style = {{backgroundColor: color}}>
      <div className='fixed inset-x-0 flex flex-wrap justify-center px-2 top-20'>
        <div className='flex flex-wrap justify-center gap-5 p-8 bg-white shadow-2xl rounded-2xl'>
          <button
          onClick={() => setColor("red")} 
          className='px-5 py-2 shadow-lg rounded-2xl outine-none' style={{backgroundColor:"red"}}>
            Red
          </button>
          <button 
          onClick={() => setColor("blue")}
          className='px-5 py-2 shadow-lg rounded-2xl outine-none' style={{backgroundColor:"blue"}}>
            Blue
          </button>
          <button 
          onClick={() => setColor("violet")}
          className='px-5 py-2 shadow-lg rounded-2xl outine-none' style={{backgroundColor:"violet"}}>
            Violet
          </button>
          <button 
          onClick={() => setColor("lavender")}
          className='px-5 py-2 shadow-lg rounded-2xl outine-none' style={{backgroundColor:"lavender"}}>
            Lavender
          </button>
          <button 
          onClick={() => setColor("orange")}
          className='px-5 py-2 shadow-lg rounded-2xl outine-none' style={{backgroundColor:"orange"}}>
            Orange
          </button>
          <button 
          onClick={() => setColor("pink")}
          className='px-5 py-2 shadow-lg rounded-2xl outine-none' style={{backgroundColor:"pink"}}>
            Pink
          </button>
          <button 
          onClick={() => setColor("maroon")}
          className='px-5 py-2 shadow-lg rounded-2xl outine-none' style={{backgroundColor:"maroon"}}>
            Maroon
          </button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default App
