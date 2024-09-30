import React, { PropsWithChildren } from "react";
import Headers from "./_components/header/header";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div id="root-layout">
      <Headers />
      {children}
    </div>
  );
}

export default RootLayout;
