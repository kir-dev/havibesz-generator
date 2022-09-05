import { Box } from "@chakra-ui/react";

import { HasChildren } from "../../utils/HasChildren";

export function GroupBox({ children }: HasChildren) {
  return (
    <Box pl={10} w="100%" boxSizing="border-box">
      {children}
    </Box>
  );
}
