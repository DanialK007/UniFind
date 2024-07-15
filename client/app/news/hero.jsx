import React from 'react'

function Hero() {
  return (
    <section className="bg-primary/75 relative pt-40 py-28 px-4 md:px-6">
        <div className='absolute w-full h-full top-0 left-0 bg-[url(https://news.stonybrook.edu/wp-content/uploads/2018/08/Student-Beauty-Shot-reduced.jpg)] -z-10 bg-cover bg-center'></div>

        <div className="container pt-10 mx-auto max-w-5xl text-center">
            <h1 className="text-4xl lg:text-7xl font-semibold text-primary-foreground mb-4"><span className="text-secondary">Latest</span> News</h1>
            <p className="text-lg text-primary-foreground mb-8">
                Gain knowledge, research and development of your journey.
            </p>
        </div>
    </section>
  )
}

export default Hero
