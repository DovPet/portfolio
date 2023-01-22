import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Country, Social } from "../typings";
import Select from "react-select";
import { urlFor } from "../sanity";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  socials: Social[];
  countries: Country[];
  lang: string;
};

type CountrySelect = {
  label: string;
  value: string;
  image: string;
};

function Header({ socials, countries, lang }: Props) {
  const countryOptions: CountrySelect[] = countries?.map((country) => ({
    value: country.locale,
    label: country.locale,
    image: urlFor(country?.countryImage).url()
  }));
  const { push } = useRouter();

  const handleChange = (defaultLocale: string) => {
    push(`/${defaultLocale}`);
  };

  const customSelectStyle = {
    control: () => ({
      backgroundColor: "transparent",
      boxShadow: "none"
    }),
    menu: (styles: any) => ({
      ...styles,
      top: 40,
      backgroundColor: "transparent"
    }),
    option: (styles: any) => ({
      ...styles,
      cursor: "pointer"
    }),
    valueContainer: (styles: any) => ({
      ...styles,
      marginTop: "20px"
    })
  };

  return (
    <header className="flex sticky top-0 p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center "
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-row cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <Link href="#contact" scroll>
          <div className="flex flex-row items-center cursor-pointer text-gray-300">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              url="https://github.com/dovpet"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get in touch
            </p>
          </div>
        </Link>
        <div
          className="flex flex-row items-center">
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
    </header>
  );
}

export default Header;
