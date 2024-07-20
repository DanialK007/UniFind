import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    (<footer className="bg-primary py-8 md:py-12 text-primary-foreground">
      <div
        className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            {/* <UniversityIcon className="w-8 h-8 text-primary-foreground" /> */}
            <img src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-university-logo-png-png-image_6855396.png" alt="" className='w-10 h-10'/>
            <span className="text-2xl text-secondary font-bold">UniFind</span>
          </Link>
          <p className="text-primary-foreground">
            Discover the perfect university for you. Search our database of thousands of institutions worldwide.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <Link
              href="/"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Home
            </Link>
            <Link
              href="/universities"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Universities
            </Link>
            <Link
              href="/blogs"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Blogs
            </Link>
            <Link
              href="/news"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Resources</h4>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Guides
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              FAQ
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Blog
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Privacy Policy
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Support</h4>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Help Center
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Feedback
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Customer Support
            </Link>
            <Link
              href="#"
              className="text-primary-foreground hover:text-secondary"
              prefetch={false}>
              Report an Issue
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-lg font-semibold">Subscribe to our newsletter</h4>
          <p className="text-primary-foreground">Get the latest updates and news from University Finder.</p>
          <form className="flex gap-2 w-full">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit" className="bg-ring/70 hover:bg-ring">Subscribe</Button>
          </form>
        </div>
      </div>
      <div
        className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 text-center text-primary-foreground">
        <p>&copy; 2024 University Finder. All rights reserved. Developed by Danial.</p>
      </div>
    </footer>)
  );
}

function FacebookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}


function InstagramIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}


function LinkedinIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>)
  );
}


function TwitterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}


function UniversityIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="10" r="1" />
      <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M6 17v.01" />
      <path d="M6 13v.01" />
      <path d="M18 17v.01" />
      <path d="M18 13v.01" />
      <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
