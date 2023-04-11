'use client';
import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import Loading from './Loading';

import LandingPageImage from '@/assets/landing-page.png';
import Image from 'next/image';

const LandingPage = forwardRef(function LandingPage(props, ref) {
	const pageRef = useRef(null);
	const [loaded, setLoaded] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			scrollIntoView() {
				pageRef.current.scrollIntoView();
			},
		};
	});

	return (
		<div
			className='h-screen snap-start pt-36  bg-cover bg-[0%] flex justify-center items-center  overflow-hidden relative'
			ref={pageRef}
		>
			<Image
				src={LandingPageImage}
				alt=''
				className='absolute top-0 bottom-0 h-screen min-w-[1024px] w-full pointer-events-none'
				onLoad={() => setLoaded(true)}
			/>
			<Loading loaded={loaded} />
			<div className='flex flex-row '>
				{/* <div className='w-[1000px] bg-customLightPink h-[400px]'></div> */}
				<div className='flex flex-col text-center items-center justify-center mb-24 lg:-mb-28 space-y-5 w-[calc(100vw-5vw)]'>
					<span className='text-[2.8rem] lg:text-[4rem] tracking-[0.2em] lg:tracking-wider -mr-3 leading-[3.4rem] lg:leading-none z-10'>
						YILDIZ TEKNİK ÜNİVERSİTESİ
					</span>
					<span className='text-[4.4rem] lg:text-[9rem] leading-none tracking-[0.3em] z-10 -mr-6 text-center text-customDarkPurple'>
						SKY LAB
					</span>
				</div>
				{/* <div className='flex-shrink-0 w-[700px] bg-customLightPink h-[400px]'></div> */}
			</div>
			<div className='absolute bottom-10 left-0 right-0 w-full flex justify-center items-center'>
				<a
					href='https://www.instagram.com/skylabkulubu/'
					target='_blank'
					className='text-customLightPink'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						// viewBox='0 0 24 24'
						className='fill-customLightPink'
					>
						<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
					</svg>
				</a>
			</div>
		</div>
	);
});

export default LandingPage;
