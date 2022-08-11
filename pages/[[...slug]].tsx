import { GetStaticPaths, GetStaticProps } from 'next';

interface PageProps {
  slug: string;
  date: string;
}

function Page(props: PageProps) {
  return (
    <div>
      We are on - {props.slug}
      <div>{props.date}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      slug: context.params?.slug || '',
      date: new Date().toISOString(),
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default Page;
