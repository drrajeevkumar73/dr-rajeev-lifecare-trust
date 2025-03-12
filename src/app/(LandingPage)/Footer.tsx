import { ChevronUp } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full bg-[#232323] px-3 py-12'>
    <div className='max-w-7xl mx-auto text-white flex gap-20 lg:flex-nowrap flex-wrap'>
      {/* Column 1 */}
      <div>
        <h4 className='font-bold mb-3 text-primary'>Who We Are?</h4>
        <ul className='space-y-5'>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/>  About Us</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Why Children?</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Our Impact</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Our Approach</li>
        </ul>
      </div>
      {/* Column 2 */}
      <div>
        <h4 className='font-bold mb-3 text-primary'>What We Do?</h4>
        <ul className='space-y-5'>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Child Education</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Child Health & Nutrition</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Stop Child Labour</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Support Girl Child Education</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Stop Child Marriage</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Prevent Child Trafficking</li>
        </ul>
      </div>
      {/* Column 3 */}
      <div>
        <h4 className='font-bold mb-3 text-primary'>Our Campaigns</h4>
        <ul className='space-y-5'>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Yellow Fellow</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Poori Padhai Desh Ki Bhalai</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Let&lsquo;s Talk About Periods</li>
        </ul>
      </div>
      {/* Column 4 */}
      <div>
        <h4 className='font-bold mb-3 text-primary'>Get Involved</h4>
        <ul className='space-y-5'>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Volunteering & Internships</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Corporate Partners</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Careers</li>
        </ul>
      </div>
      {/* Column 5 */}
      <div>
        <h4 className='font-bold mb-3 text-primary'>How To Contribute?</h4>
        <ul className='space-y-5'>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Online Donations</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Legacy Giving</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Tax Exemption Donations FAQs</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Support PooriPadhai</li>
          <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Sponsor Education</li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
