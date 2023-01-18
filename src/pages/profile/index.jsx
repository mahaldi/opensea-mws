import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from 'components';
import "swiper/css";

const Profile = () => {

	useEffect(() => {
		console.log('masuk')
	}, [])
	return (
		<>
			<Swiper slidesPerView={6} spaceBetween={16}>
				{[1,2,3,4,5,6].map(val => (
					<SwiperSlide key={val}>
							<Card />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default Profile
