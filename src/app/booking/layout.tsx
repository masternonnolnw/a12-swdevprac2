"use client";

import ReduxProvider from "@/redux/ReduxProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white min-h-[calc(100svh-60px)]">
      <ReduxProvider>
        <title>Vaccine Booking</title>
        {children}
      </ReduxProvider>
    </div>
  );
};

export default Layout;
