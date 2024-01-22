import { useState } from 'react';
import './App.css';
import { BsArrowLeftShort } from "react-icons/bs";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex'>
        <div className={`bg-dark_purple h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} relative`}>
          <BsArrowLeftShort
            className='bg-white text-dark_purple text-3xl rounded-full absolute -right-3 top-8 border border-dark_purple cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='p-7'>
          <h2 className='text-2xl font-semibold'> Home sidebar </h2>
        </div>
      </div>
    </>
  );
}

export default App;
