/// <reference types="react" />
interface userDataInterface {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    company: string;
}
interface cartDataInterface {
    id: number;
    title: string;
    totals: {
        total: number;
    };
    featured_image: string;
}
interface summeryDataInterface {
    total: number;
    subtotal: number;
    discount: number;
}
interface policyDataInterface {
    title: string;
    description: string;
    link: {
        title: string;
        url: string;
        target: string;
    };
}
interface signUpDataInterface {
    title: string;
}
interface companyPolicyDataInterface {
    title: string;
    companyName: string;
    link: {
        title: string;
        url: string;
        target: string;
    };
}
interface CheckOutProps {
    loading?: boolean;
    userData?: userDataInterface;
    formSubmit?: (data: any) => void;
    autoFill?: boolean;
    cartData?: cartDataInterface[];
    summeryData?: summeryDataInterface;
    policyData?: policyDataInterface;
    signUpData?: signUpDataInterface;
    companyPolicyData?: companyPolicyDataInterface;
    userLogin?: boolean;
}
export declare const CheckOut: ({ loading, userData, formSubmit, autoFill, cartData, summeryData, policyData, signUpData, companyPolicyData, userLogin, }: CheckOutProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map