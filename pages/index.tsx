import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Loader from "../components/Loader";

const LoaderHome = () => {
  const { push } = useRouter();
  useEffect(() => {
    push(`/en`);
  }, []);
  return (
    <Loader />
  );
};

export default LoaderHome;
