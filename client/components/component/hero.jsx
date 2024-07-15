import React from 'react'
import { Input } from '../ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { FilterIcon } from 'lucide-react'

function Hero() {
  return (
    <section className="bg-primary py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-primary-foreground mb-4">Find the <span className="text-secondary">Perfect University </span> for You</h1>
        <p className="text-lg text-primary-foreground mb-8">
            Search for universities by location, program, and more.
        </p>
        <form
            className="bg-primary-foreground rounded-md shadow-md p-4 flex items-center gap-4">
            <Input
            type="text"
            placeholder="Search universities..."
            className="flex-1 bg-transparent border-none outline-none ring-0" />
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                <FilterIcon className="h-5 w-5" />
                <span>Filters</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4 bg-background text-foreground shadow-md">
                <div className="grid gap-4">
                <div>
                    <h3 className="text-sm font-medium mb-2">Location</h3>
                    <Input
                    type="text"
                    placeholder="Enter a city or country"
                    className="bg-muted border-none focus:ring-0" />
                </div>
                <div>
                    <h3 className="text-sm font-medium mb-2">Program</h3>
                    <Input
                    type="text"
                    placeholder="Enter a program name"
                    className="bg-muted border-none focus:ring-0" />
                </div>
                <div>
                    <h3 className="text-sm font-medium mb-2">Tuition</h3>
                    <div className="flex items-center gap-2">
                    <Input
                        type="number"
                        placeholder="Min"
                        className="bg-muted border-none focus:ring-0 w-full" />
                    <span>-</span>
                    <Input
                        type="number"
                        placeholder="Max"
                        className="bg-muted border-none focus:ring-0 w-full" />
                    </div>
                </div>
                <Button>Apply Filters</Button>
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
