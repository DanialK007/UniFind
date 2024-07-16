import React from 'react'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'

function BlogGrid({blogs, number, title}) {
  return (
    <section className="bg-muted py-12 px-4 md:px-6 min-h-[600px]">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {blogs.slice(0, number).map((blog) => (
                <Card key={blog.id} className="flex flex-col hover:-translate-y-2 duration-300">
                  <img
                    src={blog.photo}
                    width={400}
                    height={225}
                    alt={`Blog Post`}
                    loading='lazy'
                    className="rounded-t-md object-cover w-full aspect-[16/9]" />
                  <CardContent className="p-4 flex h-full flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {blog.description}
                      </p>
                    </div>
                    <Link href="#" className="text-primary/70 font-semibold hover:underline hover:text-secondary" prefetch={false}>
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  )
}

export default BlogGrid
