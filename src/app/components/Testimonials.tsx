"use client";
import Image from "next/image";
import deno2 from "../assets/About/deno2.jpg"
import joel from "../assets/About/joel.jpg"
import { Avatar, Blockquote } from "flowbite-react";


const TestimonialsLayout = ()=> {
    return (
        <div className="container grid lg:grid-cols-6 gap-4">
            {/* Innocent */}
            <figure className="mx-auto max-w-screen-md text-center">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                Deno is a very creative, go-getter, and well-behaved student. 
                He does enjoy working with his classmates and works well on his project.
                I will be very delighted to see him get hired as a developer.
                </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <Image
                    className="mx-auto mb-3 h-12 w-20 rounded-full text-gray-400 dark:text-gray-600"
                    src={joel}
                    alt="joel"
                    />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Joel Tshimanga Mukanya</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO JT Devs</cite>
                </div>
            </figcaption>
            </figure>
            {/* Joel */}
            <figure className="mx-auto max-w-screen-md text-center">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS application.
                </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                            <Image
                    className="mx-auto mb-3 h-16 w-16 rounded-full text-gray-400 dark:text-gray-600"
                    src={deno2}
                    alt="deno2"
                    />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                </div>
            </figcaption>
            </figure>
            {/* Kim-Lee */}
            <figure className="mx-auto max-w-screen-md text-center">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS application.
                </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                            <Image
                    className="mx-auto mb-3 h-16 w-16 rounded-full text-gray-400 dark:text-gray-600"
                    src={deno2}
                    alt="deno2"
                    />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                </div>
            </figcaption>
            </figure>
            {/* Robbert */}
            <figure className="mx-auto max-w-screen-md text-center">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS application.
                </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                            <Image
                    className="mx-auto mb-3 h-16 w-16 rounded-full text-gray-400 dark:text-gray-600"
                    src={deno2}
                    alt="deno2"
                    />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                </div>
            </figcaption>
            </figure>
            {/* Niek */}
            <figure className="mx-auto max-w-screen-md text-center">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS application.
                </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                            <Image
                    className="mx-auto mb-3 h-16 w-16 rounded-full text-gray-400 dark:text-gray-600"
                    src={deno2}
                    alt="deno2"
                    />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                </div>
            </figcaption>
            </figure>
            {/* Umayar */}
            <figure className="mx-auto max-w-screen-md text-center">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS application.
                </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                            <Image
                    className="mx-auto mb-3 h-16 w-16 rounded-full text-gray-400 dark:text-gray-600"
                    src={deno2}
                    alt="deno2"
                    />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                </div>
            </figcaption>
            </figure>
        </div>
    )
}

export default TestimonialsLayout