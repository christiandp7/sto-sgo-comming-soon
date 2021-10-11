import type { NextPage } from 'next'
import Head from 'next/head'
import { ComingSoon } from '@components/common'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Sto-Dgo</title>
				<meta
					name="description"
					content="Santo Domingo by LEBLANCSTUDIOS® & proyecto no.1991, is born out of the need to refine and share another perspective of the city."
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<ComingSoon />
		</div>
	)
}

export default Home
