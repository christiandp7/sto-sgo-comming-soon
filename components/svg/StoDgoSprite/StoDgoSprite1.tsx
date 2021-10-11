import React, { FC } from 'react'

interface Props {
	width?: number | string
	height?: number | string
}

const StoDgoSprite1: FC<Props> = ({ width, height }) => {
	return (
		<svg
			width={width || 585}
			height={height || 700}
			viewBox="0 0 585 700"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M449.991 243.579a49.738 49.738 0 0 1-4.1 20.76 43.895 43.895 0 0 1-10.92 15 46.333 46.333 0 0 1-14.89 8.74 48.392 48.392 0 0 1-33.6 0 49.869 49.869 0 0 1-15.159-8.74 45.716 45.716 0 0 1-10.65-15 49.707 49.707 0 0 1-4.1-20.76v-102.7c0-8.2 1.367-15.2 4.1-21a43.257 43.257 0 0 1 10.65-14.47 46.856 46.856 0 0 1 15.159-9c10.843-4 22.757-4 33.6 0a43.696 43.696 0 0 1 14.89 9 41.622 41.622 0 0 1 10.92 14.47c2.733 5.834 4.1 12.834 4.1 21v102.7Zm-27.86-102.7c0-6.74-1.867-11.703-5.6-14.89a20.739 20.739 0 0 0-26.49 0c-3.739 3.18-5.606 8.144-5.6 14.89v102.7c0 6.733 1.867 11.694 5.6 14.88a20.743 20.743 0 0 0 26.49 0c3.733-3.18 5.6-8.14 5.6-14.88v-102.7ZM449.991 580.65a49.742 49.742 0 0 1-4.1 20.76 43.93 43.93 0 0 1-10.92 15 46.351 46.351 0 0 1-14.89 8.74 48.54 48.54 0 0 1-33.6 0 49.869 49.869 0 0 1-15.159-8.74 45.766 45.766 0 0 1-10.65-15 49.71 49.71 0 0 1-4.1-20.76V357.44c0-8.193 1.367-15.193 4.1-21a43.403 43.403 0 0 1 10.65-14.48 47.01 47.01 0 0 1 15.159-9c10.843-4 22.757-4 33.6 0a43.829 43.829 0 0 1 14.89 9 41.744 41.744 0 0 1 10.92 14.48c2.733 5.833 4.1 12.833 4.1 21v223.21Zm-27.86-223.21c0-6.74-1.867-11.7-5.6-14.88a20.739 20.739 0 0 0-26.49 0c-3.739 3.18-5.606 8.14-5.6 14.88v223.21c0 6.74 1.867 11.703 5.6 14.89a20.743 20.743 0 0 0 26.49 0c3.733-3.187 5.6-8.15 5.6-14.89V357.44ZM215.625 151H187.77v-6.3a29.823 29.823 0 0 0-4.499-16.53c-3.007-4.667-8.059-7-15.158-7a17.582 17.582 0 0 0-9.288 2.18 18.335 18.335 0 0 0-5.739 5.47 23.108 23.108 0 0 0-3 8.05 52.394 52.394 0 0 0-.82 9.43c-.027 3.191.11 6.382.41 9.56.225 2.39.921 4.711 2.05 6.83a15.169 15.169 0 0 0 4.779 5.19 43.857 43.857 0 0 0 8.599 4.37l21.306 8.46a52.72 52.72 0 0 1 14.997 8.34 35.723 35.723 0 0 1 8.999 11.06 51.56 51.56 0 0 1 4.099 14.88 147.133 147.133 0 0 1 1.09 19c.06 7.672-.762 15.325-2.45 22.81a48.124 48.124 0 0 1-7.918 17.89 39.335 39.335 0 0 1-14.998 12c-6.192 2.92-13.747 4.38-22.666 4.38a49.553 49.553 0 0 1-18.847-3.56 44.658 44.658 0 0 1-14.997-9.83 47.915 47.915 0 0 1-9.998-14.61 44.37 44.37 0 0 1-3.72-18.13v-10.38h27.896v8.74a22.79 22.79 0 0 0 4.509 13.8c3.006 4.1 8.058 6.146 15.157 6.14 4.726 0 8.412-.667 11.058-2a14.72 14.72 0 0 0 6.149-5.88 21.581 21.581 0 0 0 2.59-9.15c.28-3.547.416-7.507.41-11.88a119.15 119.15 0 0 0-.54-12.56 21.55 21.55 0 0 0-2.19-7.92 15.234 15.234 0 0 0-4.999-4.92 66.031 66.031 0 0 0-8.329-4.1l-19.936-8.19c-11.998-4.92-20.053-11.43-24.166-19.53-4.113-8.1-6.162-18.254-6.149-30.46a70.813 70.813 0 0 1 3-20.76 47.263 47.263 0 0 1 8.998-16.93 41.267 41.267 0 0 1 14.538-11.38c5.919-2.82 12.974-4.23 21.166-4.23a46.158 46.158 0 0 1 18.997 3.82 48.867 48.867 0 0 1 14.887 10.11c8.365 8.74 12.551 18.74 12.558 30l.02 13.72ZM213.469 573.28c0 18.213-4.416 31.643-13.249 40.29-8.832 8.647-21.53 12.98-38.095 13H120V311.92h44.545c15.998 0 28.15 4.37 36.455 13.11 8.306 8.74 12.449 21.12 12.429 37.14v211.11h.04Zm-27.857-211.11c0-7.64-1.55-13.557-4.649-17.75-3.1-4.193-8.756-6.287-16.968-6.28h-16.098v262.18h16.098c7.832 0 13.385-1.957 16.658-5.87 3.273-3.913 4.926-10.063 4.959-18.45V362.17ZM238.041 458.57a49.727 49.727 0 0 1 4.101-20.76 43.86 43.86 0 0 1 10.922-15 46.34 46.34 0 0 1 14.933-8.76c10.846-4 22.763-4 33.608 0a49.893 49.893 0 0 1 15.164 8.74 45.736 45.736 0 0 1 10.652 15 49.742 49.742 0 0 1 4.101 20.76v9.84h-27.906v-9.84c0-6.734-1.868-11.694-5.602-14.88a20.758 20.758 0 0 0-26.506 0c-3.734 3.18-5.601 8.14-5.601 14.88v122.1c0 6.74 1.867 11.703 5.601 14.89a20.758 20.758 0 0 0 26.506 0c3.734-3.18 5.602-8.143 5.602-14.89v-36.6H281.48v-24.58h50.012v61.18c0 8.2-1.367 15.2-4.101 21a43.276 43.276 0 0 1-10.652 14.47 46.883 46.883 0 0 1-15.164 9c-10.845 4-22.762 4-33.608 0a43.718 43.718 0 0 1-14.893-9 41.618 41.618 0 0 1-10.923-14.47c-2.733-5.833-4.1-12.833-4.1-21l-.01-122.08ZM238.594 94.99v26.219h32.19v269.03h27.86v-269.03h33.45v-26.22h-93.5Z"
				fill="#141414"
			/>
			<path
				d="M458.314 109.65a7.63 7.63 0 0 1-7.026-4.732 7.611 7.611 0 0 1 1.685-8.297 7.628 7.628 0 0 1 12.996 5.439 7.547 7.547 0 0 1-4.724 7.041 7.563 7.563 0 0 1-2.931.549Zm.07-14.55a6.95 6.95 0 0 0-6.446 4.236 6.94 6.94 0 0 0 9 9.137 6.933 6.933 0 0 0 4.34-6.373 6.847 6.847 0 0 0-4.224-6.476 6.855 6.855 0 0 0-2.67-.524Zm-.11 1.95a7.95 7.95 0 0 1 2.311.23 2.498 2.498 0 0 1 1.741 2.42 2.387 2.387 0 0 1-1.721 2.25c.601.38.881.62 1.101 1.84a8.765 8.765 0 0 0 .83 3.06h-2.701a6.997 6.997 0 0 1-.531-2.12c-.26-1.84-.32-2-1.761-2h-.4v4.11h-2.362v-9.8l3.493.01Zm-1.131 3.83h1.001c.465.057.938-.008 1.37-.19a.999.999 0 0 0 .431-.86.93.93 0 0 0-.511-.88 4.324 4.324 0 0 0-1.611-.11h-.7l.02 2.04Z"
				fill="#000"
			/>
			<path
				d="M120 645.56h2.003V652h3.185v1.72H120v-8.16ZM126.54 645.569h6.015v1.58h-4.01v1.48h3.74v1.54h-3.74v1.94h4.361v1.61H126.5l.04-8.15ZM134.219 645.57h3.16a7.87 7.87 0 0 1 2.12.19c.266.082.513.219.724.401a2.006 2.006 0 0 1 .536 2.279 1.997 1.997 0 0 1-1.59 1.09 2.53 2.53 0 0 1 1.6.69 1.8 1.8 0 0 1 .45 1.22 2.16 2.16 0 0 1-1.35 2 5.326 5.326 0 0 1-2.21.3h-3.44v-8.17Zm1.94 1.52v1.7h1.54c.46 0 1.21 0 1.21-.88s-.68-.82-1.07-.82h-1.68Zm0 3.18v2h1.42c.68 0 1.57 0 1.57-1s-.8-1-1.22-1h-1.77ZM142.509 645.56h1.999V652h3.179v1.72h-5.218l.04-8.16ZM154.216 645.569l3.003 8.15h-2.172l-.4-1.31h-3.002l-.411 1.31h-2.172l3.003-8.15h2.151Zm-1.1 1.94c-.1.41-.221.84-.331 1.26-.17.61-.49 1.57-.67 2.18h2.071l-1.07-3.44ZM158.531 645.569h2.002l1.772 3c.65 1.14.84 1.51 1.221 2.23l-.09-5.23h2.002v8.15h-2.002l-1.532-2.58a26.647 26.647 0 0 1-1.431-2.55l.06 5.13h-2.002v-8.15ZM174.094 651.86a4.321 4.321 0 0 1-1.228 1.39 3.991 3.991 0 0 1-2.276.71c-2.156 0-3.893-1.57-3.893-4.33a4.04 4.04 0 0 1 1.05-3.004 4.034 4.034 0 0 1 2.893-1.316 3.866 3.866 0 0 1 2.376.81c.439.358.8.804 1.058 1.31l-1.617.81a2 2 0 0 0-.609-.85 1.745 1.745 0 0 0-1.118-.4c-1.308 0-1.997 1.22-1.997 2.58 0 1.79.908 2.68 1.997 2.68a2 2 0 0 0 1.767-1.25l1.597.86ZM176.531 651.269c.217.262.482.479.781.64a3.347 3.347 0 0 0 1.574.39c.811 0 1.503-.38 1.503-.95s-.822-.75-1.423-.83c-.601-.08-.902-.11-1.343-.21-.441-.1-2.194-.46-2.194-2.21 0-2.11 1.873-2.73 3.286-2.73a4.954 4.954 0 0 1 3.608 1.55l-1.503 1.07a3.793 3.793 0 0 0-.812-.66 3.01 3.01 0 0 0-1.333-.35c-.801 0-1.212.46-1.212.85 0 .62.701.72 1.002.76.846.101 1.683.265 2.505.49a2.006 2.006 0 0 1 1.403 2 2.714 2.714 0 0 1-.641 1.73 3.955 3.955 0 0 1-3.067 1.09 4.348 4.348 0 0 1-3.727-1.65l1.593-.98ZM183.719 645.56H190v1.61h-2.11v6.55h-2.001v-6.55h-2.12l-.05-1.61ZM198.301 645.57v4.55a4.301 4.301 0 0 1-.481 2.31 3.662 3.662 0 0 1-3.007 1.47 4.49 4.49 0 0 1-1.904-.43c-1.574-.81-1.574-2.24-1.564-3.35v-4.55h2.065v5.08c-.03.34.021.683.15 1a1.477 1.477 0 0 0 1.323.56c1.384 0 1.384-1 1.394-1.58v-5.07l2.024.01ZM199.594 645.57h2.603a5.26 5.26 0 0 1 3.534 1 3.992 3.992 0 0 1 1.172 3c.011.531-.06 1.06-.211 1.57a3.654 3.654 0 0 1-3.884 2.58h-3.214v-8.15Zm2.062 1.72v4.79h.621c1.091 0 2.593-.08 2.593-2.42a2.618 2.618 0 0 0-.43-1.64 2.17 2.17 0 0 0-2.003-.73h-.781ZM210.156 645.569v8.15h-2v-8.15h2ZM215.635 653.999a4.339 4.339 0 0 1-2.874-1.364 4.325 4.325 0 0 1 0-5.911 4.344 4.344 0 0 1 2.874-1.365 4.43 4.43 0 0 1 1.492.25c2.494.86 2.654 3.58 2.654 4.13a4.426 4.426 0 0 1-1.542 3.41 4.005 4.005 0 0 1-2.604.85Zm1.412-6.34a2.005 2.005 0 0 0-1.432-.6c-1.232 0-2.003 1.09-2.003 2.56 0 1.94 1.092 2.661 2.003 2.661s2.003-.691 2.073-2.401a3.171 3.171 0 0 0-.681-2.27l.04.05ZM222.149 651.269c.216.262.48.479.778.64a3.323 3.323 0 0 0 1.567.39c.808 0 1.497-.38 1.497-.95s-.818-.75-1.417-.83c-.599-.08-.898-.11-1.337-.21-.439-.1-2.186-.46-2.186-2.21 0-2.11 1.866-2.73 3.273-2.73a4.915 4.915 0 0 1 3.593 1.55l-1.497 1.07a3.796 3.796 0 0 0-.808-.66 2.991 2.991 0 0 0-1.327-.35c-.799 0-1.208.46-1.208.85 0 .62.699.72.998.76a17.06 17.06 0 0 1 2.495.49 1.998 1.998 0 0 1 1.397 2 2.717 2.717 0 0 1-.639 1.73 3.927 3.927 0 0 1-3.053 1.09 4.34 4.34 0 0 1-3.713-1.65l1.587-.98ZM237.313 646.49a4.458 4.458 0 0 0-5.618-.596 4.457 4.457 0 0 0-1.806 2.394 4.457 4.457 0 0 0 .124 2.996 4.457 4.457 0 0 0 4.961 2.7 4.452 4.452 0 0 0 3.296-6.042 4.438 4.438 0 0 0-.957-1.452Zm.64 3.16a3.8 3.8 0 0 1-6.417 2.56 3.8 3.8 0 0 1-1.178-2.56 3.796 3.796 0 0 1 1.124-2.691 3.808 3.808 0 0 1 2.698-1.109 3.76 3.76 0 0 1 3.773 3.81v-.01Z"
				fill="#141414"
			/>
			<path
				d="M235.336 649.589a1.222 1.222 0 0 0 .867-1.14 1.281 1.281 0 0 0-.877-1.24 4.023 4.023 0 0 0-1.177-.12h-1.774v5h1.196v-2.09h.21c.727 0 .757.08.887 1 .036.369.126.729.269 1.07h1.376a4.45 4.45 0 0 1-.429-1.55c-.11-.61-.249-.73-.548-.93Zm-.549-.64a1.467 1.467 0 0 1-.697.09h-.519v-1h.359c.271-.046.547-.046.817 0a.487.487 0 0 1 .26.45.533.533 0 0 1-.22.51v-.05Z"
				fill="#141414"
			/>
		</svg>
	)
}

export default StoDgoSprite1
