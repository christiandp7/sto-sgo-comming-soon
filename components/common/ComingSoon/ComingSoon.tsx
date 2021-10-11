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
					delay: 1500,
					disableOnInteraction: false,
				}}>
				<SwiperSlide>
					<StoDgoSprite1 width="100%" height="auto" />
				</SwiperSlide>
				<SwiperSlide>
					<StoDgoSprite2 width="100%" height="auto" />
				</SwiperSlide>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite3 width="100%" height="auto" />
				</SwiperSlide>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite4 width="100%" height="auto" />
				</SwiperSlide>
				<SwiperSlide>
					<StoDgoSprite5 width="100%" height="auto" />
				</SwiperSlide>
				<SwiperSlide className={s.slide}>
					<StoDgoSprite6 width="100%" height="auto" />
				</SwiperSlide>
			</Swiper>
		</main>
	)
}

export default ComingSoon
