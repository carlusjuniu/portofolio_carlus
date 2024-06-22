import React from 'react'

const HeroSection = () => {
  return (
    <section class="">
        <div class="grid max-w-screen-2xl px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-l mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">hey there , my name is carlos im a frontend developer based in Lisbon,Portugal. </h1>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex">
                <img src="src\assets\carlos_midjourney.png" class="rounded-lg" alt="Me"/>
            </div>                
        </div>
    </section>
  )
}

export default HeroSection