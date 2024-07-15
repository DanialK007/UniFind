import React from 'react'

function Hero() {
  return (
    <section className="bg-primary/75 relative pt-40 py-28 px-4 md:px-6">
        <div className='absolute w-full h-full top-0 left-0 bg-[url(https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_780/dpr_2.0/element/18/184996_01.jpg)] -z-10 bg-cover bg-center'></div>

        <div className="container pt-10 mx-auto max-w-5xl text-center">
            <h1 className="text-4xl lg:text-6xl font-semibold text-primary-foreground mb-4">Discover <span className="text-secondary">Top Rated </span> Universities</h1>
            <p className="text-lg text-primary-foreground mb-8">
                Search for universities by location, program, and more.
            </p>
        </div>
    </section>
  )
}

export default Hero
