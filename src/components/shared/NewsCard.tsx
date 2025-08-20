import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import newsImage from '@/assets/banner.jpg'
import { Button } from '../ui/button';

const NewsCard = () => {
    return (
        <div className='border p-4 rounded-md shadow-md'>
            <Link href={'/'}>
                <Image src={newsImage} alt='news image' className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200'></Image>
            </Link>
            <div>
                <h2 className='text-xl font-semibold my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p className='mb-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facere culpa porro. Quasi numquam soluta quibusdam placeat quam similique ab alias quidem commodi, ad veritatis necessitatibus, at hic ipsum dignissimos?</p>
                <Link>
                    <Button variant='default'>Read More</Button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;