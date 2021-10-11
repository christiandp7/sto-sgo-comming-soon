import React, { FC } from 'react'

interface Props {
	width?: number | string
	height?: number | string
}

const StoDgoSprite5: FC<Props> = ({ width, height }) => {
	return (
		<svg
			width={width || 1920}
			height={height || 1080}
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M880.48 631.771h-27.86v72h27.86v-72Z" fill="#00FF90" />
			<path d="M814.9 693.03h-27.86v75.48h27.86v-75.48Z" fill="#FF2A00" />
			<path d="M814.9 768.51h-27.86v48.03h27.86v-48.03Z" fill="#00CEFF" />
			<path d="M1117 482.14h-27.86v72.13H1117v-72.13Z" fill="#6F00FF" />
			<path
				d="M1102 624.3a43.855 43.855 0 0 0 10.92-15 49.71 49.71 0 0 0 4.1-20.76v-34.4h-27.86v34.38c0 6.733-1.87 11.693-5.6 14.88a19.74 19.74 0 0 1-13.25 4.78V636a49.229 49.229 0 0 0 16.8-3 46.333 46.333 0 0 0 14.89-8.7ZM966.28 343.74h-27.86v41.74h27.86v-41.74Z"
				fill="#FF2A00"
			/>
			<path d="M966.28 385.48h-27.86v28.34h27.86v-28.34Z" fill="#FFD300" />
			<path
				d="M877.46 390.15a35.907 35.907 0 0 0-9-11.06 52.761 52.761 0 0 0-15-8.34l-18.17-7.22v29.86l3.42 1.4a66.18 66.18 0 0 1 8.33 4.1 15.237 15.237 0 0 1 5 4.92 21.55 21.55 0 0 1 2.19 7.92c.307 2.86.487 6.417.54 10.67h27.85a143.962 143.962 0 0 0-1.07-17.4 51.842 51.842 0 0 0-4.09-14.85Z"
				fill="#FF00E0"
			/>
			<path d="M1117 699.97h-27.86v70.17H1117v-70.17Z" fill="#6F00FF" />
			<path d="M1117 749.12h-27.86v21.03H1117v-21.03Z" fill="#FFD300" />
		</svg>
	)
}

export default StoDgoSprite5
