import Logo from "../Images/logo.png";

export function BrandLogo() {
  return (
    <span className="flex items-center gap-2 flex-shrink-0 mr-auto">
      <img src={Logo} className="size-20" />
    </span>
  );
}
