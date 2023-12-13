'use client';

import React, {useState} from 'react';
import { useForm } from 'react-hook-form'; 
import sendEmail from '@/utils/sendEmail';

type FormData = {
  name: string;
  message: string;
  email: string;
};

export const Contact = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<FormData>(); 
  const [responseMsg, setResponseMsg] = useState<string|undefined>()
  const onSubmit = async (data: FormData) => {
    const responseMessage = await sendEmail(data);
    setResponseMsg(responseMessage);
  };
  return(
    responseMsg ? <p>{responseMsg}</p> :
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className='flex flex-col md:flex-row mb-4 justify-stretch space-y-4 md:space-y-0 md:space-x-6'>
        <div className='flex flex-col justify-stretch md:w-1/2'>
          <div className='flex justify-between items-end'>
            <label htmlFor="name" className='mb-3 block'>Name</label>
            {errors.name && (
              <p className='text-red-500 italic text-base'>{errors.name.message}</p>
            )}
          </div>
          <input 
            type="text" 
            placeholder='Full Name' 
            className=' rounded-md border-2 border-white bg-white py-3 px-6 outline-none focus:border-[#175873] text-[#0C1446]'
            {...register('name', {required: 'Name is required'})}
          />
        </div>
        <div className='flex flex-col justify-stretch md:w-1/2'>
        <div className='flex justify-between items-end'>
            <label htmlFor="email" className='mb-3 block'>E-Mail</label>
            {errors.email && (
              <p className='text-red-500 italic text-base'>{errors.email.message}</p>
            )}
          </div>
          <input 
            type="text" 
            placeholder='example@domain.com' 
            className=' rounded-md border-2 border-white bg-white py-3 px-6 outline-none focus:border-[#175873] text-[#0C1446]'
            {...register('email', 
              {
                required: 'E-Mail is required', 
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                  message: 'Please enter a valid E-Mail address'
                }
              },
            )}
          />
        </div>
      </div>
      <div className='flex flex-col mb-6 justify-stretch'>
        <div className='flex justify-between items-end'>
          <label htmlFor="message" className='mb-3 block'>Message</label>
          {errors.message && (
            <p className='text-red-500 italic text-base'>{errors.message.message}</p>
          )}
        </div>
        <textarea
          rows={4}
          placeholder='Add your message here...' 
          className=' rounded-md border-2 border-white bg-white py-3 px-6 outline-none focus:border-[#175873] resize-none text-[#0C1446]'
          {...register('message', {required: 'Add your message here before submitting'})}
        />
      </div>
      <div>
        <button className='hover:shadow-form rounded-xl bg-[#175873] hover:bg-[#ff709c] focus:bg-[#ff709c] light-text py-2 px-8 w-full md:w-max font-semibold outline-none'>
          Submit
        </button>
      </div>
    </form>
  )
}