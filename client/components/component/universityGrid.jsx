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
                <Card key={uni.id} className="flex flex-col group overflow-hidden shadow-md border-[black]/25 hover:shadow-2xl hover:translate-y-1 hover:scale-105 duration-300">
                  <img
                    src={uni.photo}
                    width={400}
                    height={225}
                    alt={`University`}
                    loading='lazy'
                    className="rounded-t-md object-cover w-full aspect-[16/9] scale-105 group-hover:scale-100 duration-300" />
                  <CardContent className="p-4 flex flex-col h-full justify- between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                      <div className="text-muted-foreground mb-2 flex">
                        <School2Icon />
                        <div className="divide-x-2 divide-primary/40">
                          {uni.programs.map((program) => (
                            <span className="text-muted-foreground px-2">{program.name}</span>
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
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default UniversityGrid
