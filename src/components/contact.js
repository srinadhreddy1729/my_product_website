function Contact()
{


  const clearForm=(e)=>
    {
      console.log(e)
      
    }
  
    return <section id="contact">
 
<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
</div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">
  I'm a freelance web developer dedicated to creating high-quality, user-friendly web applications. Whether you need a new site, an update to an existing one, or custom features, I'm here to help bring your vision to life. Let’s connect and discuss your project!
</p>

  </div>
  <form action="https://formspree.io/f/xkgnnrnb" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onClick={clearForm}>
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
        </div>
      </div>
      <div>
        <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
        </div>
      </div>
    
      <div className="sm:col-span-2">
        <label for="phonenumber" className="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
        <div className="mt-2.5">
          <input type="phonenumber" name="phonenumber" id="phonenumber" autocomplete="phonenumber" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required></textarea>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Let's talk</button>
    </div>
  </form>
</div>

    </section>
}

export default Contact;