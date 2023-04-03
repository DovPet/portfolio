import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Country, PageInfo, Social } from "../typings";
import Select from "react-select";
import { urlFor } from "../sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import { useScrollPosition } from "../hooks/useScrollPosition";

type Props = {
  socials: Social[];
  countries: Country[];
  lang: string;
  pageInfo: PageInfo;
};

type CountrySelect = {
  label: string;
  value: string;
  image: string;
};

function Header({ socials, countries, lang, pageInfo }: Props) {
  const countryOptions: CountrySelect[] = countries?.map((country) => ({
    value: country.locale,
    label: country.locale,
    image: urlFor(country?.countryImage).url(),
  }));
  const { push } = useRouter();

  const handleChange = (defaultLocale: string) => {
    push(`/${defaultLocale}`);
  };

  const customSelectStyle = {
    control: () => ({
      backgroundColor: "transparentF",
      boxShadow: "none",
    }),
    menu: (styles: any) => ({
      ...styles,
      top: 40,
      backgroundColor: "#8DB39F",
    }),
    option: (styles: any, { isFocused }) => ({
      ...styles,
      cursor: "pointer",
      backgroundColor: isFocused && "#CDB079",
    }),
    valueContainer: (styles: any) => ({
      ...styles,
      marginTop: "20px",
    }),
  };

  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`fixed flex w-full top-0 z-50 ${
        scrollPosition > 100 && "bg-[#178a5a]"
      }`}
    >
      <div
        className={`flex w-full p-5 justify-between max-w-7xl mx-auto z-20 items-center `}
      >
        <motion.div
          className="flex flex-row items-center "
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          {socials?.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
              className="headerIcon"
            />
          ))}
        </motion.div>
        <motion.div
          className="flex flex-row cursor-pointer"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Link href="#contact" scroll={false}>
            <div className="flex flex-row items-center cursor-pointer text-gray-300 headerIcon">
              <SocialIcon
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
              />
              <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                {pageInfo?.contactText}
              </p>
            </div>
          </Link>
          <div className="flex flex-row items-center pt-[2px]">
            {countryOptions && (
              <Select<CountrySelect>
                defaultValue={countryOptions.find((x) => x.value === lang)}
                onChange={(value) => handleChange(value?.value)}
                options={countryOptions}
                isSearchable={false}
                components={{ DropdownIndicator: () => null }}
                formatOptionLabel={(country) => (
                  <div>
                    <Image
                      className="justify-center items-center"
                      src={country.image}
                      alt=""
                      objectFit="contain"
                      height={20}
                      width={28}
                    />
                  </div>
                )}
                styles={customSelectStyle}
              />
            )}
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
