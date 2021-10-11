import React from 'react'
import Image from 'next/image'
import s from './ComingSoon.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { EffectFade } from 'swiper'
import {
	StoDgoLogo,
	StoDgoSprite1,
	StoDgoSprite2,
	StoDgoSprite3,
	StoDgoSprite4,
	StoDgoSprite5,
	StoDgoSprite6,
} from '@components/svg'

SwiperCore.use([Autoplay])

const ComingSoon = () => {
	return (
		<main className={s.root}>
			{/* <div className={s.logoContainer}>
				<StoDgoLogo width="auto" height="75vh" />
			</div> */}
			<Swiper
				modules={[EffectFade]}
				effect="fade"
				centeredSlides={true}
				autoplay={{
					delay: 1200,
					disableOnInteraction: false,
				}}>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite1 width="auto" height="90vh" />
				</SwiperSlide>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite2 width="auto" height="90vh" />
				</SwiperSlide>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite3 width="auto" height="90vh" />
				</SwiperSlide>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite4 width="auto" height="90vh" />
				</SwiperSlide>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite5 width="auto" height="90vh" />
				</SwiperSlide>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite6 width="auto" height="90vh" />
				</SwiperSlide>
			</Swiper>
		</main>
	)
}

export default ComingSoon
