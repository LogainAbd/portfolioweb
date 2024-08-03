'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import for the Player component
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status == 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };

  const socials = [
    { icon: 'github-icon.svg', path: 'https://github.com/LogainAbd' },
    { icon: 'linkedin-icon.svg', path: 'https://www.linkedin.com/in/logain-abdelhafiz/' },
    { icon: 'reddit-icon.svg', path: 'https://www.reddit.com/user/Foreign_Animal1562/' },
    { icon: 'instagram-icon.svg', path: 'https://www.instagram.com/login.logain/' },
    { icon: 'twitter-icon.svg', path: 'https://x.com/Logain_Abd' },
    { icon: 'youtube-icon.svg', path: 'https://www.youtube.com/channel/UC-5l50bWFsQuP1S9_qJWrCw' },
  ];

  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-10'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 '></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <Player
          autoplay
          loop
          src="/animation/robot-animation.json" // Adjust the path to your JSON file
          style={{ height: '300px', width: '300px' }} // Adjusted size for bigger display
          className="relative z-10"
        />
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I'm currently looking for new opportunities, my inbox is always open. 
          Whenever you have a question, or just want to say hi, 
          I will try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          {socials.map((social, index) => (
            <Link key={index} href={social.path} target='_blank'>
              <img
                src={`/icons/${social.icon}`}
                alt={social.path.split('/')[2]}
                className='w-6 h-6 hover:brightness-200'
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
              Your Email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              placeholder='logan@google.com'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              placeholder='Just saying hi'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
            />
          </div>
          <button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '>
            Send Message
          </button>
          {emailSubmitted && <p className='text-green-500 text-sm mt-2'>Email sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
