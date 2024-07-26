import SideNav from "@/app/ui/dashboard/sidenav";
/*The great thing about Partial Prerendering is that you don't need to change your code to use it. 
As long as you're using Suspense to wrap the dynamic parts of your route, Next.js will know which parts 
of your route are static and which are dynamic.*/

// this line of code enables partial pre rendering (dynamic and static content)
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
