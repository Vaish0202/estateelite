import React from 'react'
import ContactForm from '../components/ContactForm';
export default function About() {
  return (
    <>
      <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Estate Elite</h1>
      <p className='mb-4 text-slate-700'>Estate Elite is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>

      <h2 className='text-3xl font-bold mb-4 text-slate-800'>Contact Us</h2>
        <p className='mb-4 text-slate-700'>We'd love to hear from you. Contact us using the information below:</p>
        <ul className='mb-4'>
          <li className='text-slate-700'>
            <strong>Address:</strong> 123 Main Street, Pune, Maharastra, 412105
          </li>
          <li className='text-slate-700'>
            <strong>Phone:</strong> (555) 123-4567
          </li>
          <li className='text-slate-700'>
            <strong>Email:</strong> info@estateelite.com
          </li>
        </ul>
        <p className='mb-4 text-slate-700'>Alternatively, you can use the contact form below to send us a message:</p>
        {/* Add your contact form component here */}
        <ContactForm />
    </div>
    </>
  )
}
