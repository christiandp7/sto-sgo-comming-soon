import React from 'react'
import Image from 'next/image'
import s from './ComingSoon.module.css'
import { StoDgoLogo } from '@components/svg'

const ComingSoon = () => {
	return (
		<main className={s.root}>
			<div className={s.logoContainer}>
				<StoDgoLogo width="auto" height="75vh" />
			</div>
		</main>
	)
}

export default ComingSoon
