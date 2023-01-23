import React from "react";
import { Country, State } from "country-state-city";
import { PaymentMethods } from "./PaymentMethods";
// import { BodyText } from "@jstemplate/ecommerce-ui";

interface FormValues {
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  country?: string;
  postcode?: string;
  state?: string;
}

interface CheckoutBillingsProps {
  user?: any;
}

const CheckoutBillings = ({ user }: CheckoutBillingsProps) => {
  const [country, setCountry] = React.useState(Country.getAllCountries());
  const [state, setState] = React.useState(State.getAllStates());
  const [shipingCheck, setShipingCheck] = React.useState(false);

  const [billing, setBilling] = React.useState<FormValues>({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address_1: "",
    address_2: "",
    city: "",
    country: "",
    postcode: "",
    state: "",
  });

  const [shippingDetails, setShippingDetails] = React.useState<FormValues>({
    first_name: "",
    last_name: "",
    phone: "",
    address_1: "",
    address_2: "",
    city: "",
    country: "",
    postcode: "",
    state: "",
  });

  React.useEffect(() => {
    setBilling({
      first_name: user?.billing?.first_name || "",
      last_name: user?.billing?.last_name || "",
      phone: user?.billing?.phone || "",
      email: user?.billing?.email || "",
      address_1: user?.billing?.address_1 || "",
      address_2: user?.billing?.address_2 || "",
      city: user?.billing?.city || "",
      country: user?.billing?.country || "",
      postcode: user?.billing?.postcode || "",
      state: user?.billing?.state || "",
    });
  }, [user]);

  React.useEffect(() => {
    setShippingDetails({
      first_name: user?.shipping?.first_name || "",
      last_name: user?.shipping?.last_name || "",
      phone: user?.shipping?.phone || "",
      address_1: user?.shipping?.address_1 || "",
      address_2: user?.shipping?.address_2 || "",
      city: user?.shipping?.city || "",
      country: user?.shipping?.country || "",
      postcode: user?.shipping?.postcode || "",
      state: user?.shipping?.state || "",
    });
  }, [user]);

  const handleOnChangeDetails = (e: any) => {
    const { name, value } = e.target;
    setBilling({ ...billing, [name]: value });
  };

  React.useEffect(() => {
    setState(State.getStatesOfCountry(billing.country));
  }, [billing.country]);

  const handleOnChangeShipingDetails = (e: any) => {
    if (shipingCheck) {
      const { name, value } = e.target;
      setShippingDetails({ ...shippingDetails, [name]: value });
    }
  };

  React.useEffect(() => {
    if (shipingCheck) {
      setState(State.getStatesOfCountry(shippingDetails.country));
    }
  }, [shippingDetails]);

  const handleOnChangeShipingCheck = () => {
    setShipingCheck(!shipingCheck);
  };

  return (
    <>
      <div className="w-full lg:col-span-8">
        <div className="p-2.5 bg-white rounded-2xl">
          {/* billing address form */}
          <div className="grid lg:gap-3 gap-8">
            {/* Form Title */}
            <p className="text-xl  font-medium p-2.5 bg-themeSecondary100 rounded-xl text-themeSecondary800">
              Billing Details
            </p>
            {/* Form input lists */}
            <form action="">
              <div className="w-full grid gap-5 px-2 sm:p-7">
                {/* First Name & Last Name */}
                <div className="sm:flex grid sm:gap-5 gap-8">
                  {/* First Name */}
                  <div className="sm:w-1/2 w-full">
                    <div className="relative">
                      <input
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.first_name}
                      />
                    </div>
                  </div>
                  {/* Last Name */}
                  <div className="sm:w-1/2 w-full">
                    <div className="relative">
                      <input
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.last_name}
                      />
                    </div>
                  </div>
                </div>
                {/* phone & email */}
                <div className="sm:flex grid sm:gap-5 gap-8">
                  {/* phone */}
                  <div className="sm:w-1/2 w-full">
                    <div className="relative">
                      <input
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.phone}
                      />
                    </div>
                  </div>
                  {/* Email address */}
                  <div className="sm:w-1/2 w-full">
                    <div className="relative">
                      <input
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                        type="email"
                        placeholder="Your Email Address"
                        name="email"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.email}
                      />
                    </div>
                  </div>
                </div>
                {/* Street address */}
                <div className="sm:flex grid sm:gap-5 gap-8">
                  <div className="w-full">
                    <div className="relative">
                      <input
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                        type="text"
                        placeholder="Street Address"
                        name="address_1"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.address_1}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <input
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                        type="text"
                        placeholder="Apartment/Suite/Unit Etc"
                        name="address_2"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.address_2}
                      />
                    </div>
                  </div>
                </div>
                {/* Town / City & country */}
                <div className="sm:flex grid sm:gap-5 gap-8">
                  {/* Town / City */}
                  <div className="sm:w-1/2 w-full">
                    <div className="relative">
                      <input
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                        type="text"
                        placeholder="Town/City"
                        name="city"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.city}
                      />
                    </div>
                  </div>
                  {/* country */}
                  <div className="sm:w-1/2 w-full">
                    <div className="relative">
                      <select
                        title="state"
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon"
                        name="country"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.country}
                      >
                        <option value="">Choose Country</option>
                        {country.map((item, index) => (
                          <option key={index} value={item.isoCode}>
                            {item.flag} {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {/* Postcode / ZIP & State */}
                <div className="sm:flex grid sm:gap-5 gap-8">
                  {/* Postcode / ZIP */}
                  <div className="sm:w-1/2 w-full">
                    <div className="relative">
                      <input
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                        type="text"
                        placeholder="Post Code"
                        name="postcode"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.data?.billing?.postcode}
                      />
                    </div>
                  </div>
                  {/* State */}
                  <div className="sm:w-1/2 w-full">
                    <div className="relative">
                      <select
                        title="Country"
                        className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon"
                        name="state"
                        onChange={handleOnChangeDetails}
                        defaultValue={user?.billing?.state}
                      >
                        <option value="">Choose State</option>
                        {state.map((item: any, index: any) => (
                          <option key={index} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {/* checkbox for shipping address */}
                <div className="flex gap-3">
                  <input
                    onChange={handleOnChangeShipingCheck}
                    defaultChecked={shipingCheck}
                    id="ship-checkbox"
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer accent-themePrimary700"
                  />
                  <label htmlFor="ship-checkbox" className="text-base text-themeSecondary600">
                    Ship to a different address instead of the billing address
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* shipping address form */}
          {shipingCheck && (
            <div className="grid lg:gap-3 gap-8">
              {/* Form Title */}
              <p className="text-xl font-medium p-2.5 bg-themeSecondary100 rounded-xl text-themeSecondary800">
                Shipping Details
              </p>
              {/* Form input lists */}
              <form action="">
                <div className="w-full grid gap-5 px-2 sm:p-7">
                  {/* First Name & Last Name */}
                  <div className="sm:flex grid sm:gap-5 gap-8">
                    {/* First Name */}
                    <div className="sm:w-1/2 w-full">
                      <div className="relative">
                        <input
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                          type="text"
                          placeholder="First Name"
                          name="first_name"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.shipping?.first_name}
                        />
                      </div>
                    </div>
                    {/* Last Name */}
                    <div className="sm:w-1/2 w-full">
                      <div className="relative">
                        <input
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                          type="text"
                          placeholder="Last Name"
                          name="last_name"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.shipping?.last_name}
                        />
                      </div>
                    </div>
                  </div>
                  {/* phone & email */}
                  <div className="sm:flex grid sm:gap-5 gap-8">
                    {/* phone */}
                    {/* <div className="sm:w-1/2 w-full"> */}
                    <div className="w-full">
                      <div className="relative">
                        <input
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.shipping?.phone}
                        />
                      </div>
                    </div>
                    {/* Email address */}
                    {/* <div className="sm:w-1/2 w-full">
                      <div className="relative">
                        <input
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                          type="email"
                          placeholder="Your Email Address"
                          name="email"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.data?.shipping?.email}
                        />
                      </div>
                    </div> */}
                  </div>
                  {/* Street address */}
                  <div className="sm:flex grid sm:gap-5 gap-8">
                    <div className="w-full">
                      <div className="relative">
                        <input
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                          type="text"
                          placeholder="Street Address"
                          name="address_1"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.shipping?.address_1}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative">
                        <input
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                          type="text"
                          placeholder="Apartment/Suite/Unit Etc"
                          name="address_2"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.shipping?.address_2}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Town / City & country */}
                  <div className="sm:flex grid sm:gap-5 gap-8">
                    {/* Town / City */}
                    <div className="sm:w-1/2 w-full">
                      <div className="relative">
                        <input
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                          type="text"
                          placeholder="Town/City"
                          name="city"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.shipping?.city}
                        />
                      </div>
                    </div>
                    {/* country */}
                    <div className="sm:w-1/2 w-full">
                      <div className="relative">
                        <select
                          title="state"
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon"
                          name="country"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.shipping?.country}
                        >
                          <option value="">Choose Country</option>
                          {country.map((item, index) => (
                            <option key={index} value={item.isoCode}>
                              {item.flag} {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Postcode / ZIP & State */}
                  <div className="sm:flex grid sm:gap-5 gap-8">
                    {/* Postcode / ZIP */}
                    <div className="sm:w-1/2 w-full">
                      <div className="relative">
                        <input
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                          type="text"
                          placeholder="Post Code"
                          name="postcode"
                          onChange={handleOnChangeShipingDetails}
                          defaultValue={user?.shipping?.postcode}
                        />
                      </div>
                    </div>
                    {/* State */}
                    <div className="sm:w-1/2 w-full">
                      <div className="relative">
                        <select
                          title="Country"
                          className="appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon"
                          name="state"
                          onChange={handleOnChangeShipingDetails}
                        >
                          <option value="">Choose State</option>
                          {state.map((item: any, index: any) => (
                            <option key={index} value={item.value}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
        <PaymentMethods billing={billing} shippingDetails={shippingDetails} shipingCheck={shipingCheck} />
      </div>
    </>
  );
};

export default CheckoutBillings;
