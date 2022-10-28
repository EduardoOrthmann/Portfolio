import Head from 'next/head';
// eslint-disable-next-line import/extensions
import { useGetProfileQuery } from '../graphql/generated';

export default function Home() {
  const { data } = useGetProfileQuery();

  return (
    <div>
      <Head>
        <title>Portfólio</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{data?.profile?.name}</main>
    </div>
  );
}
