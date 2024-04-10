"use client";

import Box from "@/components/Box";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <SyncLoader color="#22c55e" size={40} />
    </Box>
  );
};

export default Loading;
