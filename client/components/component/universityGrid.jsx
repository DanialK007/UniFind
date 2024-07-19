import React from 'react'
import { Card, CardContent } from '../ui/card'
import { MapPinIcon, School2Icon } from 'lucide-react'

function UniversityGrid({universities, title, number}) {
  return (
    <>
      {/* Universities */}
      <section className="py-12 px-4 md:px-6 min-h-[600px]">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">{title}</h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {universities.slice(0, number).map((uni) => (
                <div className='min-h-[350px]'>
                  <div className='active:fixed active:z-10 bg-primary-foreground/0 active:backdrop-blur-md active:bg-primary-foreground/50 duration-300 top-0 left-0 active:w-full active:h-full flex items-center justify-center active:py-20 active:px-4'>
                    <Card key={uni.id} className="flex flex-col h-full group overflow-hidden shadow-md border-[black]/25 hover:shadow-2xl hover:translate-y-1 hover:lg:scale-105 duration-300">
                      <img
                        src={uni.photo}
                        width={400}
                        height={225}
                        alt={`University`}
                        loading='lazy'
                        className="rounded-t-md object-cover w-full aspect-[16/9] scale -105 group-hover:scale -100 duration-300" />
                      <CardContent className="px-4 pt-3 flex flex-col h-full justify- between">
                        <div>
                          <h3 className="text-xl font-bold mb-2 flex">
                            <img src={uni.logo} alt="" className='w-10 h-10 p-[2px] rounded-[100%] bg-[white] ms-2 me-4 scale-150 -translate-y-5'/>
                            {uni.name}
                          </h3>
                          <div className="text-muted-foreground mb-2 flex">
                            <School2Icon />
                            <div className="divide-x-2 divide-primary/40">
                            {uni.programs.map((program, index) => (
                              <span key={index} className="text-muted-foreground px-2">{program.name}</span>
                            ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                          <span className="text-muted-foreground">{uni.location.city}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default UniversityGrid
