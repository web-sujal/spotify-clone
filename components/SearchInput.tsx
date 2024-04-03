"use client";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 1000);

  return <div>SearchInput</div>;
};

export default SearchInput;
