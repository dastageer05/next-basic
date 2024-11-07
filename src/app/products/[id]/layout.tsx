import React from "react";

// function layout({children } : children: ReactNode ) {
//   return (
//     <div>layout</div>
//   )
// }

// export default layout

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <div>
        <h2>Featured products section</h2>
      </div>
    </div>
  );
}
