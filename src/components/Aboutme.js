import React from 'react';
import provider from '../assets/provider.jpg'; 
import '../components/aboutme.css'

function Aboutme() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-4">
            <div className="w-full md:w-1/2 animate-fadeIn">
                <h1 className="text-5xl font-bold text-gray-800 mb-4 transition duration-500 ease-in-out">
                    Welcome to My Freelancing Portfolio
                </h1>
                <p className="text-lg text-gray-600 mb-8 transition duration-500 ease-in-out delay-100">
                    I am a Freelance Full Stack Web and Mobile Developer
                </p>
                <p className="text-gray-700 mb-8 transition duration-500 ease-in-out delay-200">
                    With a passion for creating innovative solutions, I specialize in delivering user-friendly web and mobile applications that meet your needs.
                </p>
                <a 
                    href="#contact" 
                    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-500 ease-in-out delay-300">
                    Get in Touch
                </a>
                <a 
                    href="#service" 
                    className=" m-2 inline-block border hover:border-indigo-700 text-black p-4 rounded-lg text-black px-6 py-3 rounded-lg hover:bg-white-700 transition duration-500 ease-in-out delay-300">
                    Our Services
                </a>
            </div>
            <div className="w-full md:w-1/2 animate-slideIn mt-2">
                <img src={provider} alt="Freelancing" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
}

export default Aboutme;
