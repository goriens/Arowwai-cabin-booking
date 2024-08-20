import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid h-full grid-cols-[16rem_1fr] f-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
