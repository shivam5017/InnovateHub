import Navbar from "../components/navbar";

export default function MarketingLayout({ children }) {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <Navbar />
      {children}
    </div>
  );
}
