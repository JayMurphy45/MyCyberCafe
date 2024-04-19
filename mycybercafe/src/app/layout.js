export const metadata = {
  title: "MyCyberCafe",
  description: "A Screen time web monitoring application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
