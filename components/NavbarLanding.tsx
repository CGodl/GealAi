'use client';

import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const font = Montserrat({
	weight: '600',
	subsets: ['latin'],
});

export const NavbarLanding = () => {
	const { isSignedIn } = useAuth();

	return (
		<nav className='p-4 bg-transparent flex items-center justify-between z-[10]'>
			<Link href='/' className='flex items-center z-[10]'>
				<div className='relative h-8 w-8 mr-4'>
                    <Image 
                        fill
                        alt='logo'
                        src='/logo.png'
                    />
                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>
                    GealAi
                </h1>
			</Link>
			<div className='flex items-center gap-x-2 z-[10]'>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant='premium' className='rounded-full'>
                        Get Started
                    </Button>
                </Link>
			</div>
		</nav>
	);
};
