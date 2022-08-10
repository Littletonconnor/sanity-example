import { InferGetServerSidePropsType } from "next";
import Banner, { Props as Alert } from "src/components/banner/banner";
import Header from "src/components/header/header";
import HeroText from "src/components/hero_text/hero_text";
import sanity from "src/lib/sanity";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

function Home({ alerts }: Props) {
  return (
    <div className="mx-auto">
      <Banner
        text={alerts.text}
        callToAction={alerts.callToAction}
        style={alerts.style}
        title={alerts.title}
      />
      <Header />
      <HeroText />
    </div>
  );
}

const query = `*[_type == "alert"]`;

export async function getServerSideProps() {
  const alerts = ((await sanity.fetch(query)) as any)[0];
  return {
    props: {
      alerts,
    },
  };
}

export default Home;
