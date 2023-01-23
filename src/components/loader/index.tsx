import React, { Fragment } from "react";

export const Loader = ({ bg }: { bg?: string }) => {
  return (
    <Fragment>
      <div id="preloader" className={bg ? bg : `bg-white`}>
        <div className={`sk-three-bounce ${bg ? bg : `bg-white`}`}>
          <div className="sk-child sk-bounce1"></div>
          <div className="sk-child sk-bounce2"></div>
          <div className="sk-child sk-bounce3"></div>
        </div>
      </div>
    </Fragment>
  );
};

export const LoaderGrowing = () => {
  const itemLength = ["1", "2", "3", "4", "5"];
  return (
    <Fragment>
      <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#ffffffd0]">
        <div className={`lds-ring`} aria-labelledby="none">
          {itemLength.map((item, index) => (
            <div key={index} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export const FormLoader = ({ color }: { color?: string }) => {
  return (
    <Fragment>
      <svg
        className={`ml-2 h-5 w-5 animate-spin ${color ? color : "text-blueTwo"}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </Fragment>
  );
};
