import React from 'react';
import { Button, Container, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    // Media Query
    const isMediumScreen = useMediaQuery('(max-width: 1024px)');
    const navigate = useNavigate();

    return (
        <section style={{ backgroundSize: 'cover' }} className='pt-16 bg-green-300/10'>
            <Container>
                <div className='sm:grid sm:grid-cols-2 flex flex-col gap-x-5'>
                    {/* Text */}
                    <div className='col pt-3.5 flex items-center'>
                        <div className='xl:space-y-7 lg:space-y-6 md:space-y-4 sm:space-y-4 space-y-5 w-11/12 sm:tracking-normal tracking-wide'>

                            <p className='lg:text-base md:text-sm sm:text-xs text-sm'>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;