import React from 'react'

function Hero() {
  return (
    <section className="bg-primary py-20 px-4 md:px-6">
        <div className="container pt-10 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">Discover <span className="text-secondary">Top Rated </span> Universities</h1>
            <p className="text-lg text-primary-foreground mb-8">
                Search for universities by location, program, and more.
            </p>
        </div>
    </section>
  )
}

export default Hero
