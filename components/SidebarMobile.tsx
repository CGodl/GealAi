'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';

interface SidebarMobileProps {
	apiLimitCount: number
	isPro: boolean
}

const SidebarMobile = ({ apiLimitCount, isPro}: SidebarMobileProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) return null;

	return (
		<Sheet >
			<SheetTrigger>
				<Button variant='ghost' size='icon' className='md:hidden'>
					<Menu />
				</Button>
			</SheetTrigger>
            <SheetContent side='left' className="p-0 text-white">
                <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
            </SheetContent>
		</Sheet>
	);
};

export default SidebarMobile;
