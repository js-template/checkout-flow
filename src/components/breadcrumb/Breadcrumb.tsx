import React from "react";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";
import Link from "next/link";

interface BreadcrumbProps {
  name?: string;
}

export const Breadcrumb = ({ name }: BreadcrumbProps) => {
  const router = useRouter();
  const segments = router.pathname.split("/");
  const replaceName = segments[segments.length - 1]?.replace(/-/g, " ");

  return (
    <section className="py-16 font-sans text-center bg-themeSecondary100">
      {name ? (
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold capitalize">{name}</h1>
      ) : replaceName ? (
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold capitalize">{replaceName}</h1>
      ) : (
        <Skeleton height={25} width={100} />
      )}
      <div className="flex items-center  justify-center h-5 overflow-hidden gap-2 mx-auto mt-4">
        {segments?.length >= 3 &&
          segments?.map((segment, index) =>
            index < segments.length - 1 ? (
              <Link key={index} href={`/${segments?.slice(0, index + 1).join("/")}`}>
                <p className="text-base text-themeSecondary600 capitalize border-themeSecondary300 pr-2 hover:text-themePrimary700 transition duration-300 ease-in-out border-r">
                  {segment}
                </p>
              </Link>
            ) : (
              <p className="text-base text-themeSecondary600 capitalize border-themeSecondary300 ">{replaceName}</p>
            )
          )}
        {segments?.length === 2 && (
          <>
            <Link href="/">
              <p className="text-base text-themeSecondary600 capitalize border-themeSecondary300 hover:text-themePrimary700 transition duration-300 ease-in-out border-r pr-2">
                Home
              </p>
            </Link>
            <p className="text-base text-themeSecondary600 capitalize border-themeSecondary300">{replaceName}</p>
          </>
        )}
      </div>
    </section>
  );
};
