import React from 'react';

function Contact(){
    return(
        <section className=' flex flex-col item-center justify-center text-center'>
            <div className="container mx-auto">
                {/* <h1 className='mb-20'>This Site is under construction</h1>
                <h3 className='mb-12'>Please Feel free to Test Apps</h3> */}

                <h1 className='mb-20'>Feel free to Test Apps under Apps</h1>
                <h3 className='mb-12'>This Site is under construction</h3>
            
                <div className='text-left max-w-[50%] mx-auto'>
                    <ul>
                        <li>A personal portfolio using <strong>React.Js, Node.js, Express.js, 
                Tailwind Css, Sass, Material UI</strong></li>
                        <li className='mt-5 mb-2'><strong>API integration: </strong></li>
                        <li>Fetch live price of BTC in different currency</li>
                        <li>Fetch current weather of any city around the world</li>
                        <li>Fetch News from Tech Crunch</li>
                        <li className='mt-5 mb-2'><strong>AWS MongoDB + REST API + MVC :</strong></li>
                        <li>To Do List App </li>
                        <li className='mt-5 mb-2'><strong>Others</strong></li>
                        <li> Note Keeper App</li>
                        <li>Deployment of Server and Frontend in Heroku, a cloud application platform</li>
                    </ul>
                </div>
            </div>
       
        </section>
        
    );
}

export default Contact;