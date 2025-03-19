import { ChevronUp } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full bg-[#232323] px-3 py-12'>
      <div className='max-w-7xl mx-auto text-white flex gap-20 lg:flex-nowrap flex-wrap'>
        
        {/* Column 1: About Us */}
        <div>
          <h4 className='font-bold mb-3 text-primary'>About Us</h4>
          <ul className='space-y-5'>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Our Foundation</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Our Team</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Trust&lsquo;s Goals & Initiatives</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Our Work & Achievements</li>
          </ul>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className='font-bold mb-3 text-primary'>Our Services</h4>
          <ul className='space-y-5'>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Homeopathy Ayurveda Help</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> BPL Patients Free Treatment</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Book A Free Consultation</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Health Awareness Campaigns</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Treatment Results & Reviews</li>
          </ul>
        </div>

        {/* Column 3: Get Involved */}
        <div>
          <h4 className='font-bold mb-3 text-primary'>Get Involved</h4>
          <ul className='space-y-5'>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Volunteering & Internships</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Corporate Partners</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Careers</li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 className='font-bold mb-3 text-primary'>Contact Us</h4>
          <ul className='space-y-5'>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Ranchi Branch</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Kolkata Branch</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Patna Branch</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Delhi Branch</li>
          </ul>
        </div>

        {/* Column 5: Support & Contribution */}
        <div>
          <h4 className='font-bold mb-3 text-primary'>How To Contribute?</h4>
          <ul className='space-y-5'>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Online Donations</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Legacy Giving</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Tax Exemption Donations FAQs</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Support Dr. Rajeev Clinic</li>
            <li className='flex items-center gap-2 cursor-pointer'><ChevronUp className='rotate-90'/> Sponsor Treatments</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
