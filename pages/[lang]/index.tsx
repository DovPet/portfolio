import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import About from "../../components/sections/About";
import ContactMe from "../../components/sections/ContactMe";
import WorkExperience from "../../components/sections/WorkExperience";
import Header from "../../components/Header";
import Hero from "../../components/sections/Hero";
import Projects from "../../components/sections/Projects";
import Skills from "../../components/sections/Skills";
import {
  Country,
  Experience,
  PageInfo,
  Project,
  Section,
  Social,
  Technology,
} from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchExperience } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchCountries } from "../../utils/fetchCountries";
import Loader from "../../components/Loader";
import Testimonials from "../../components/sections/Testimonials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Technology[];
  projects: Project[];
  socials: Social[];
  countries: Country[];
  lang: string;
};

const Home = ({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  countries,
  lang,
}: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  const getSectionTitle = (sections: Section[], sectionName: string) => {
    return sections.find(x => x.title === sectionName)?.text
}
  return (
    <div className="bg-[#1f2d3d] text-white overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar min-w-[370px]">
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Head>
            <title>Dovydas Petrutis</title>
            <meta name="description" content="My Portfolio" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header socials={socials} countries={countries} lang={lang} pageInfo={pageInfo}/>

          <section id="hero" className="min-h-max pt-[210px]">
            <Hero pageInfo={pageInfo} />
          </section>

          <section id="about" className="snap-start">
            <About pageInfo={pageInfo} sectionTitle={getSectionTitle(pageInfo?.sections, "about")}/>
          </section>

          <section id="experience" className="snap-start">
            <WorkExperience experiences={experiences} sectionTitle={getSectionTitle(pageInfo?.sections, "experience")}/>
          </section>

          <section id="skills" className="snap-start">
            <Skills skills={skills} sectionTitle={getSectionTitle(pageInfo?.sections, "skills")} sectionHeader={pageInfo?.skillSectionHeader}/>
          </section>

          <section id="projects" className="snap-start">
            <Projects projects={projects} sectionTitle={getSectionTitle(pageInfo?.sections, "projects")} />
          </section>

          <section id="testimonials" className="snap-start">
            <Testimonials projects={projects} sectionTitle={getSectionTitle(pageInfo?.sections, "projects")} />
          </section>

          <section id="contact">
            <ContactMe sectionTitle={getSectionTitle(pageInfo?.sections, "contact")} sectionHeader={pageInfo?.contactSectionHeader}/>
          </section>
        </motion.div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Home;

export const getStaticPaths: GetStaticPaths = async () => {
  const countries: Country[] = await fetchCountries();
  const pathData: { params: { lang: string } }[] = [];
  countries.map((country) =>
    pathData.push({ params: { lang: country.locale } })
  );
  return {
    paths: pathData,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = (params?.lang as string) || "en";
  const pageInfo: PageInfo = await fetchPageInfo(lang);
  const experiences: Experience[] = await fetchExperience(lang);
  const skills: Technology[] = await fetchSkills(lang);
  const projects: Project[] = await fetchProjects(lang);
  const socials: Social[] = await fetchSocials(lang);
  const countries: Country[] = await fetchCountries(lang);

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      countries,
      lang,
    },
    revalidate: 10,
  };
};
