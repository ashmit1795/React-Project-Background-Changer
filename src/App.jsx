import { useState } from 'react';

function App() {

  const [bgColor, setBgColor] = useState('white');

  /* * Things to note:
    * 1. The background color is set using inline styles.
    * 2. The buttons change the background color of the entire page.
    * 3. The buttons have different colors and text to indicate their function.
    * 4. The buttons are styled with Tailwind CSS classes for a modern look.
    * 5. The background color can be set to any valid CSS color value.
    * 6. The component is responsive and works well on different screen sizes.
    * 7. onClick attribute is used to change the background color when a button is clicked. It takes the setBgColor function as a callback to update the state. onClick={() => setBgColor("colorName")}
  */

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
      <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setBgColor("red")} className='outline-none px-4 py-1 rounded-full bg-red-500 text-white shadow-lg'>Red</button>
          <button onClick={() => setBgColor("green")} className='outline-none px-4 py-1 rounded-full bg-green-500 text-white shadow-lg'>Green</button>
          <button onClick={() => setBgColor("blue")} className='outline-none px-4 py-1 rounded-full bg-blue-500 text-white shadow-lg'>Blue</button>
          <button onClick={() => setBgColor("yellow")} className='outline-none px-4 py-1 rounded-full bg-yellow-300 text-black shadow-lg'>Yellow</button>
          <button onClick={() => setBgColor("pink")} className='outline-none px-4 py-1 rounded-full bg-pink-500 text-white shadow-lg'>Pink</button>
          <button onClick={() => setBgColor("purple")} className='outline-none px-4 py-1 rounded-full bg-purple-700 text-white shadow-lg'>Purple</button>
          <button onClick={() => setBgColor("black")} className='outline-none px-4 py-1 rounded-full bg-black text-white shadow-lg'>Black</button>
          <button onClick={() => setBgColor("white")} className='outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg'>White</button>
          <button onClick={() => setBgColor("gray")} className='outline-none px-4 py-1 rounded-full bg-gray-500 text-white shadow-lg'>Gray</button>
          <button onClick={() => setBgColor("orange")} className='outline-none px-4 py-1 rounded-full bg-orange-500 text-white shadow-lg'>Orange</button>
          <button onClick={() => setBgColor("cyan")} className='outline-none px-4 py-1 rounded-full bg-cyan-500 text-white shadow-lg'>Cyan</button>
          <button onClick={() => setBgColor("teal")} className='outline-none px-4 py-1 rounded-full bg-teal-500 text-white shadow-lg'>Teal</button>
          <button onClick={() => setBgColor("indigo")} className='outline-none px-4 py-1 rounded-full bg-indigo-500 text-white shadow-lg'>Indigo</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
