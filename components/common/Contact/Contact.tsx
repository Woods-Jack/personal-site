'use client';

import React, {useState} from 'react';
import { useForm } from 'react-hook-form';


type FormData = {
  name: string;
  message: string;
  email: string;
};

export const Contact = () => {
  const {register, formState: { errors }} = useForm<FormData>(); 
  const [responseMsg, setResponseMsg] = useState<string|undefined>();

  async function onSubmit(e:any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string;
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const result = await response.json();
    if (result.success) {
      setResponseMsg("Thanks for your message! If it requires a response, I will aim to get back to you in the next 3 business days.");
      e.target.reset();
    } else {
      console.log("Error", result);
      setResponseMsg("An error occurred. Please try again later or reach out to me on LinkedIn.");
    }
  }

  return(
    responseMsg ? (
      <div className='mx-auto mt-2 py-8 px-4 flex items-center bg-light rounded-2xl'>
        <p className='mb-0'>{responseMsg}</p>
      </div>
    ) : (
      <form onSubmit={onSubmit} className='w-full'>
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
              aria-label='name'
              id='name'
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
              aria-label='E-mail address' 
              id='email'
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
            aria-label='message'
            id='message'
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
  )
}