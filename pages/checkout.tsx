import React from "react";
import { Breadcrumb } from "../src/components/breadcrumb/Breadcrumb";
import CheckoutBillings from "../src/components/CheckoutBillings";
import PaymentOrderSummary from "../src/components/PaymentOrderSummary";
import { ToastProvider } from "react-toast-notifications";

const Checkout = () => {
  return (
    <ToastProvider>
      <div className="bg-themeSecondary100 pb-14 md:pb-20 lg:pb-24">
        <Breadcrumb />
        <section className="container mx-auto px-5 sm:px-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <CheckoutBillings />
            <PaymentOrderSummary />
          </div>
        </section>
      </div>
    </ToastProvider>
  );
};

export default Checkout;
