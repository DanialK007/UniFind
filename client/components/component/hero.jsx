"use client"
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { FilterIcon } from 'lucide-react';

function Hero({ universities, applyFilters }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [programFilter, setProgramFilter] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleLocationChange = (e) => {
      setLocationFilter(e.target.value);
    };
  
    const handleProgramChange = (e) => {
      setProgramFilter(e.target.value);
    };
  
    const handleApplyFilters = (e) => {
        e.preventDefault(); // Prevent the default form submission
        applyFilters(searchQuery, locationFilter, programFilter);
      };

  return (
    <section className="bg-primary/75 bg-cover bg-center relative pt-44 py-28 px-4 md:px-6">
        <div className='absolute w-full h-full top-0 left-0 bg-[url(https://www.brown.edu/sites/default/files/styles/ultrawide_med/public/2021-02/20181013_COMM_gigsgreen033.jpg?h=44198bf6&itok=Z9yQDrHL)] bg-cover bg-center -z-10'></div>

        <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-primary-foreground mb-4">Find the <span className="text-secondary">Perfect University </span> for You</h1>
        <p className="text-lg text-primary-foreground mb-8">
            Search for universities by location, program, and more.
        </p>
        <form
            className="bg-primary-foreground rounded-md shadow-md p-4 flex items-center gap-4"
            onSubmit={handleApplyFilters} // Attach the handler to the form's onSubmit event
        >
        <Input
            type="text"
            placeholder="Search universities..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-1 bg-transparent border-none outline-none ring-0"
        />
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
                <FilterIcon className="h-5 w-5" />
                <span>Filters</span>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4 bg-background rounded-lg shadow-xl text-foreground border z-20">
            <div className="grid gap-4">
                <div>
                <h3 className="text-sm font-medium mb-2">Location</h3>
                <Input
                    type="text"
                    placeholder="Enter a city or country"
                    value={locationFilter}
                    onChange={handleLocationChange}
                    className="bg-muted border-none focus:ring-0"
                />
                </div>
                <div>
                <h3 className="text-sm font-medium mb-2">Program</h3>
                <Input
                    type="text"
                    placeholder="Enter a program name"
                    value={programFilter}
                    onChange={handleProgramChange}
                    className="bg-muted border-none focus:ring-0"
                />
                </div>
                <Button type="submit" className="hover:bg-secondary">Search</Button>
            </div>
            </DropdownMenuContent>
        </DropdownMenu>
        <Button className="hover:bg-secondary">Search</Button>
        </form>
        </div>
    </section>
  )
}

export default Hero
