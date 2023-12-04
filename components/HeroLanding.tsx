'use client';

import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

import TypewriterComponent from 'typewriter-effect';
import { Button } from './ui/button';

import { ParticleConstellation } from './ParticleConstellation';


export const HeroLanding = () => {
	const { isSignedIn } = useAuth();

	return (
		<>
        	<ParticleConstellation />

			<div className='relative text-white font-bold py-36 text-center space-y-5 z-[10]'>
				<div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold '>
					<h1>The AI tool for generating</h1>
                    <div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-fuchsia-500'>
                        <TypewriterComponent 
                            options={{
                                strings: [
                                    "Code.",
                                    "Conversations.",
                                    "Music.",
                                    "Videos."
                                ],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
				</div>
                <div>
                    <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
                        <Button variant='premium' className='md:text-lg pd-4 md:pd-6 rounded-full font-semibold'>
                            Start generating for free
                        </Button>
                    </Link>
                </div>
			</div>
		</>
	);
};
