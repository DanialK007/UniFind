import React from 'react'

function Hero() {
  return (
    <section className="bg-primary/75 relative pt-40 py-28 px-4 md:px-6">
        <div className='absolute w-full h-full top-0 left-0 bg-[url(https://constructor.tech/sites/default/files/2024-05/DALL%C2%B7E%202024-05-08%2016.57.51%20-%20A%20high%20angle%20view%20of%20a%20male%20student%20studying%20on%20his%20laptop%20in%20a%20classroom.%20The%20student%2C%20with%20dark%20hair%20and%20wearing%20a%20blue%20t-shirt%2C%20is%20seated%20at%20a%20wood.webp)] -z-10 bg-cover bg-center'></div>

        <div className="container pt-10 mx-auto max-w-5xl text-center">
            <h1 className="text-4xl lg:text-6xl font-semibold text-primary-foreground mb-4">Discover Our <span className="text-secondary">Latest</span> Blogs</h1>
            <p className="text-lg text-primary-foreground mb-8">
                Gain knowledge, research and development of your journey.
            </p>
        </div>
    </section>
  )
}

export default Hero
