import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>
                    First Post
                </title>
            </Head>
            <h1> first post </h1>
            <h2>
                <Link href='/'>
                    <a> Back to home </a>
                </Link>
            </h2>
        </Layout>
    )

}