import DashboardSkeleton from "../../ui/skeletons";

// The fact that this file is inside of (overview) folders means that the loading will only affect
// page.tsx , and not customers or invoices views
// page.tsx is the main page for /dashboard

// The loading will be displayed while "async/await" (dynamic rendering) content is pending on the page.tsx file
// it will display until EVERY await is still peding , once every single one is done then it will be displayed

export default function Loading() {
  return <DashboardSkeleton />;
}
