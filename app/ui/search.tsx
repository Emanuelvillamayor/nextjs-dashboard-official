"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(); // get url params
  const pathname = usePathname(); // get the current pathname of the url
  const { replace } = useRouter(); // enables navigation between routs inside of client components

  const handleSearch = useDebouncedCallback((term: string) => {
    // URLSearchParams is a Web API that provides utility methods for manipulating the URL query parameters
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // very time the url changes update the number of the page parameter since it restarts
    if (term) {
      // if input have text then add the url param "query"
      params.set("query", term);
    } else {
      // if input is empty delete query params
      params.delete("query");
    }
    // update the current route to have the new query params
    replace(`${pathname}?${params.toString()}`);
  }, 300); // with useDebouncedCallbackthis function will be called after 300ms , it will reduce the number of calls

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()} // if the url have a default query param that will be defaulted to the input
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
