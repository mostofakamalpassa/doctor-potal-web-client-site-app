import React from 'react';
import qutes from '../../../assets/icons/quote.svg'
import TestimonalCar from './TestimonalCar';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonial = () => {
    const reviews = [

        {
            _id: 1,
            name:'Winson Herry California',
            img:people1,
            say:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        
        {
            _id: 2,
            name:'Winson Herry California',
            img:people2,
            say:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name:'Winson Herry California',
            img:people3,
            say:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }

    ]

    return (
        <section>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h2 className="text-lg text-primary font-bold">Testimonial</h2>
                    <h1 className="text-3xl font-bold">What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-32' src={qutes} alt="" />
                </div>
            </div>

            <div className='lg:flex justify-center gap-3 my-6'>

                {
                    reviews.map(review => (<TestimonalCar review={review}></TestimonalCar>))
                }
            </div>
            
        </section>
    );
};

export default Testimonial;