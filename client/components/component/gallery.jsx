"use client"
import { FaceIcon } from '@radix-ui/react-icons';
import { ArrowBigLeft, ArrowBigLeftIcon, ArrowBigRight, ArrowBigRightIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Gallery = ({ imageGallery }) => {
    const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
    const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
    const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
    //   const imageGallery = [
    //     {photo: "https://strategyfirst.edu.mm/frontend/home_image/mdy_campus.jpg", alt: "SFU"},
    //     {photo: "https://strategyfirst.edu.mm/frontend/home_image/mdy_campus.jpg", alt: "SFU"},
    //     {photo: "https://strategyfirst.edu.mm/frontend/home_image/mdy_campus.jpg", alt: "SFU"},
    //     {photo: "https://strategyfirst.edu.mm/frontend/home_image/mdy_campus.jpg", alt: "SFU"},
    //     {photo: "https://strategyfirst.edu.mm/frontend/home_image/mdy_campus.jpg", alt: "SFU"},
    //   ];

    const imageGalleryOpen = (index) => {
        setImageGalleryImageIndex(index);
        setImageGalleryActiveUrl(imageGallery[index].photo);
        setImageGalleryOpened(true);
    };

    const imageGalleryClose = () => {
        setImageGalleryOpened(false);
        setTimeout(() => setImageGalleryActiveUrl(null), 300);
    };

    const imageGalleryNext = () => {
        const nextIndex = imageGalleryImageIndex === imageGallery.length - 1 ? 0 : imageGalleryImageIndex + 1;
        setImageGalleryImageIndex(nextIndex);
        setImageGalleryActiveUrl(imageGallery[nextIndex].photo);
    };

    const imageGalleryPrev = () => {
        const prevIndex = imageGalleryImageIndex === 0 ? imageGallery.length - 1 : imageGalleryImageIndex - 1;
        setImageGalleryImageIndex(prevIndex);
        setImageGalleryActiveUrl(imageGallery[prevIndex].photo);
    };

    useEffect(() => {
        if (imageGalleryOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [imageGalleryOpened]);

    return (
        <div className="w-full min-h-full select-none p-6 bg-muted">
            <div className='text-2xl font-semibold lg:text-3xl pt-8'>Gallery</div>

            {/* Gallery */}
            <div className="mx-auto py-8">
                <ul id="gallery" className="grid grid-cols-3 gap-2 lg:gap-5 lg:grid-cols-5">
                    {imageGallery.slice(0,15).map((image, index) => (
                        <li key={index} className='hover:scale-110 overflow-hidden group duration-300 rounded-lg hover:z-10'>
                            <img
                                onClick={() => imageGalleryOpen(index)}
                                src={image.photo}
                                alt={image.alt}
                                className="object-cover w-full aspect-square group-hover:scale-100 scale-110 duration-300 bg-gray-200 rounded cursor-zoom-in"
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Modal */}
            {imageGalleryOpened && (
                <>
                    <div
                        className="fixed inset-0 z-40 flex items-center justify-center cursor-zoom-out w-full h-full backdrop-blur-lg bg-primary-foreground/50 lg:bg-primary-foreground/10"
                    >
                        {/* Navigation Arrows */}
                        <button onClick={imageGalleryPrev} className="h-full group w-16 flex items-center justify-center z-50 left-0">
                            <ArrowLeft className='group-hover:scale-150 duration-100' />
                        </button>
                        <div className='flex-grow' onClick={imageGalleryClose}>
                            <img
                                className="object-contain w-full h-screen cursor-zoom-out modalImage max-h-[90vh]"
                                src={imageGalleryActiveUrl}
                                alt=""
                            />
                        </div>
                        <button onClick={imageGalleryNext} className="h-full group w-16 flex items-center justify-center z-50 right-0">
                            <ArrowRight className='group-hover:scale-150 duration-100' />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Gallery;
