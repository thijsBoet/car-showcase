"use client"

import React from 'react';
import { CustomButton } from '@/components';
import Image from 'next/image';
import HeroImg from '@/public/hero.png';

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					Find, book, or rent a car — quickly and easily!
				</h1>

				<p className='hero__subtitle'>
					Streamline your car rental experience with our effortless
					booking process.
				</p>
				<CustomButton
					title='Explore Cars'
					containerStyles={
						'bg-primary-blue text-white rounded-full mt-10'
					}
					handleClick={handleScroll}
				/>
			</div>
			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image
						src={HeroImg}
						alt='hero'
						priority
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='object-contain'
					/>
					<div className='hero__image-overlay' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
