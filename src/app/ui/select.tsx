"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

// const _options = { next: { revalidate: 60 } };

// const POST_QUERY_COUNT = (sortFilter: string, destinationFilter: string) =>
//   defineQuery(`
//   count(
//     *[_type == "post"
//     ${sortFilter ? `&& type == "${typeFilter}"` : ""}
//     ${destinationFilter ? `&& destination == "${destinationFilter}"` : ""}
//     ]
//   )
// `);

export default function Select({ options }: { options: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    if (value !== 0) {
      router.push(pathname + "?" + createQueryString(name, value));
    }
    if (value == 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      router.push(pathname + "?" + params.toString());
    }
  }

  //   const [length, setLength] = React.useState(0);
  const sortFilter = searchParams.get("sort") || "";

  const categoryFilter = searchParams.get("category") || "";

  React.useEffect(() => {
    async function fetchData() {
      //   const postsLength =
      //       await client.fetch(
      //           POST_QUERY_COUNT(sortFilter, destinationFilter),
      //           {},
      //           _options
      //         )
      //   setLength(postsLength);
    }
    fetchData();
  }, [sortFilter, categoryFilter]);

  return (
    <>
      <div className="flex gap-4">
        <select
          value={sortFilter || 0}
          onChange={handleChange}
          name="sort"
          className="border border-solid py-1 px-1"
        >
          <option value={0}>price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

        <select
          onChange={handleChange}
          name="category"
          className="border border-solid"
          value={categoryFilter || 0}
        >
          <option value={0}>Categories</option>
          {options?.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
