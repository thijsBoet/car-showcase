

import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '@/components';

const Navbar = () => {
	return (
		<header className='w-full absolute z-10'>
			<nav className='mx-auto flex justify-between items-center sm:px-16 px-6 py-4 max-w-[1440px]'>
				<Link href='/'>
					<Image
						src='/logo.svg'
						alt='logo'
						width={118}
						height={18}
						className='object-contain'
					/>
				</Link>
				<CustomButton
					title='Sign In'
					btnType={'button'}
					containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] h-[40px]'
					handleClick={() => {}}
				/>
			</nav>
		</header>
	);
};

export default Navbar;
