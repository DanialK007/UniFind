import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { BadgeCheck, BookMinus, MapPinIcon, School2Icon } from 'lucide-react';
import classNames from 'classnames';

function UniversityGrid({ universities, title, number }) {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (id) => {
    setOpenCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  useEffect( () => {
    if (openCards) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  })

  return (
    <>
      {/* Universities */}
      <section className="py-12 px-4 md:px-6 min-h-[600px]">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {universities.slice(0, number).map((uni) => (
              <div key={uni.id} onClick={() => toggleCard(uni.id)} className='min-h-[350px] cursor-pointer'>
                <div className={classNames('bg-primary-foreground/0 duration-500 top-0 left-0 flex items-center justify-center h-full', openCards[uni.id] ? "py-20 px-4 w-full h-full fixed z-10 backdrop-blur-md bg-primary-foreground/60" : "max-h-[380px]")}>
                  <Card className={classNames("flex flex-col h-full group overflow-hidden shadow-md border-[black]/25 hover:shadow-2xl hover:translate-y-1 hover:lg:scale-105 duration-500", openCards[uni.id] ? "h-fit" : "")}>
                    <img
                      src={uni.photo}
                      width={400}
                      height={225}
                      alt={`University`}
                      loading='lazy'
                      className="rounded-t-md object-cover w-full aspect-[16/9] scale-105 group-hover:scale-100 duration-500 max-h-[300px]" />
                    <CardContent className="px-4 pt-3 flex flex-col h-full justify- between">
                      <div>
                        <h3 className="text-xl font-bold mb-2 flex">
                          <img src={uni.logo} alt="" className='w-10 h-10 p-[2px] rounded-[100%] bg-[white] ms-2 me-4 scale-150 -translate-y-5' />
                          {uni.name}
                        </h3>
                        <div className="text-muted-foreground mb-2 flex">
                          <School2Icon  className='w-8'/>
                          <div className="divide-x-2 divide-primary/40">
                            {uni.programs.map((program, index) => (
                              <span key={index} className="text-muted-foreground px-2">{program.name}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPinIcon />
                        <span>{uni.location.city}</span>
                      </div>
                      {openCards[uni.id] && (
                          <>
                            <div className='flex text-muted-foreground my-2'>
                              <BookMinus />
                              <div className='divide-x-2 divide-primary/40'>
                                {uni.programs.map((program) => (
                                  <span key={program.id} className="text-muted-foreground px-2">{program.name}</span>
                                ))}
                              </div>
                            </div>
                            <div className='text-muted-foreground mb-2 flex gap-2'>
                              <BadgeCheck />
                              Established {uni.established}
                            </div>
                            <div className='flex justify-end'>
                              <a target='_blank' href={uni.website} className='text-primary/70 font-semibold hover:underline hover:text-secondary'>Visit Website</a>
                            </div>
                          </>
                        ) }
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default UniversityGrid;
