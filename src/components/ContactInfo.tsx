/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { motion } from "framer-motion";
import { FormEvent  } from "react";
import { slideIn } from "../utils/motion";


const ContactInfo = () => {
    // const [loading, setLoading] = useState(false);
    // const [notify, setNotify] = useState(false);
    // const [name, setName] = useState('');

    const onFinish = (e: FormEvent<HTMLFormElement> | any) => {
        e.preventDefault()
        const form = e.currentTarget;

        console.log(form)
        console.log(form.elements.name.value)

        const email = form.elements.email.value;
        const name = form.elements.name.value;
        const phone = form.elements.phone.value;
        const message = form.elements.message.value;

        // setName(form.elements.name.value)

        const subject = `${name} ${email} ${phone}`

        const mailtoUrl = `mailto:${'Info@payfixy.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        // const mailtoUrl = `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoUrl;

        // Clear form input values
        // form.reset();
        form.reset()
    }
    return (
        <div>
            {/* <SlideInNotifications {...{name, notify}} /> */}
            <div className="bg-[#FAFAFA] md:bg-transparent">
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto justify-center">
                <div>
                    {/* @ts-ignore */}
                    <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='pt-8 lg:py-16 px-4'>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                        <p className="mb-4 lg:mb- font-light text-center text-gray-500 text-base">PayFixy is a revolutionary digital payment platform that enables both businesses and consumers to transact seamlessly.</p>
                        <p className="mb-2 lg:mb-16 font-light text-center text-gray-500 text-base">We are committed to providing our customers with the best possible experience.</p>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-base">Our trained sales team is available to meet your requests satisfactorily.</p>

                        <div className="flex flex-col gap-4">
                            <div>
                            <div className="text-base font-bold">Lagos Office</div>
                            <div className="text-sm font-normal">14 Idowu Taylor St Victoria Island, Lagos 106104, Lagos</div>
                            </div>
                            <div>
                            <div className="text-base font-bold">Abuja Office</div>
                            <div className="text-sm font-normal">Plot 1014m Fria Close, Wuse 2, Abuja</div>
                            </div>
                            <div>
                            <div className="text-base font-bold">Call</div>
                            <div className="text-sm font-normal">+234 903 22 93 077</div>
                            </div>
                            <div>
                            <div className="text-base font-bold">Email</div>
                            <div className="text-sm font-normal">Info@payfixy.com</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <section className="bg-white">
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <form onSubmit={onFinish} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900">Your Name</label>
                                    <input type="test" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#A73636] block w-full p-2.5 " placeholder="What's your good name?" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#A73636] block w-full p-2.5 " placeholder="name@geraldkachi.com" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-900">Your Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#A73636] block w-full p-2.5 " placeholder="Enter your phone number" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-900">Subject</label>
                                    <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm outline-none focus:ring-primary-500 focus:border-[#A73636]" placeholder="Let us know how we can help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 outline-none focus:ring-[#A73636] focus:border-[#A73636]" placeholder="Leave a comment..." required></textarea>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-[#A73636] hover:bg-[#A73636] focus:outline-none">Send message</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            </div>

            {/* <FooterTail /> */}
        </div>
    )
}

export default ContactInfo