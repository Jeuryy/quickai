"use client"
import { AiToolsData } from '@/assets/assets'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'
import { Alert, AlertDescription } from './ui/alert';
import { useState } from 'react';

const AiTools = () => {
    const navigate = useRouter();
    const {user} = useUser();
    const [aiToolClicked, setAiToolClicked] = useState(false)

const handleAIToolClicked = () => {
  if (user) return;

  setAiToolClicked(true);

  setTimeout(() => setAiToolClicked(false), 3000);
};

  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
      <div className='text-center'>
        <h2 className='text-slate-700 text-[42px] font-semibold'>
            Powerful AI Tools
        </h2>
        <p className='text-gray-500 max-w-lg mx-auto'>
            Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
        </p>
      </div>
      <div className='flex flex-wrap mt-10 justify-center' onClick={handleAIToolClicked}>
        {AiToolsData.map((tool, index)=> (
            <div key={index} 
                className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor pointer'
                onClick={()=> user && navigate.push(tool.path)}>
                    <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl'
                    style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}/>
                    <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                    <p className='text-gray-400 text-sm max-w-[95%]'>{tool.description}</p>
            </div>
        ))}
      </div>
      {(aiToolClicked) &&
      <Alert className='bg-primary/90 border-none text-white w-auto right-5 bottom-5 fixed'>
        <AlertDescription className=''>
            Sign in or sign up before using our AI Tools features.
        </AlertDescription>
      </Alert>}
    </div>
  )
}

export default AiTools
