import React from 'react'
import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import javascript from '../Assets/javascript.png';
import ReactImg from '../Assets/react.png';
import Tailwind from '../Assets/tailwind.png';
import Github from '../Assets/github.png';



const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300' >
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technologies I've learned.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='mx-auto w-20' src={HTML} alt="" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='mx-auto w-20' src={CSS} alt="" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='mx-auto w-20' src={javascript} alt="" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='mx-auto w-20' src={ReactImg} alt="" />
                    <p className='my-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='mx-auto w-20' src={Tailwind} alt="" />
                    <p className='my-4'>TAILWIND</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='mx-auto w-20' src={Github} alt="" />
                    <p className='my-4'>GITHUB</p>
                </div>

            </div>
        </div>

    </div> 
  )
}

export default Skills