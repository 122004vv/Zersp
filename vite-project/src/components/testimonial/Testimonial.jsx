import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonials</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-[#500724]'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://icon-library.com/images/person-icon-gif/person-icon-gif-14.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Zersp exceeded expectations! Streamlined processes, boosted efficiency. A game-changer! Kudos to the team for innovation and user-friendly design. Impressive work!</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#500724] mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Chandra</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Product Manager</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://icon-library.com/images/person-icon-gif/person-icon-gif-14.jpg" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">A trustworthy destination for quality and an unmatched shopping experience , Overall good. The products seem to match the standards and I loved my ordered product very much.</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#500724] mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Web Developer Ravi</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI/UX Developer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://icon-library.com/images/person-icon-gif/person-icon-gif-14.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Now ,Zersp won my trust with genuine testimonials and impeccable service. A reliable partner for all my online shopping needs. Highly recommended for a seamless experience!</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#500724] mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React practitioner David</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Freelancer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial