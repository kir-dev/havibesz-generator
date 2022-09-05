import { Box, Button, useToast } from "@chakra-ui/react";
import { PremadeSections } from "../../utils/PremadeSections";
import { useMemo } from "react";
import { generateReport } from "../../utils/generateReport";
import { CopyIcon } from "@chakra-ui/icons";

interface ResultProps {
  data: typeof PremadeSections;
}

export function Result({ data }: ResultProps) {
  const toast = useToast();
  const generated = useMemo(() => generateReport(data), [data]);
  const copy = () => {
    navigator.clipboard
      .writeText(generated)
      .then(() => toast({ status: "success", title: "Vágólapra másolva!" }))
      .catch(() =>
        toast({ status: "error", title: "Nem sikerült vágólapra másolni!" })
      );
  };
  return (
    <Box
      bg="theme.600"
      color="theme.100"
      p={5}
      borderRadius={5}
      position="sticky"
      top={5}
    >
      <pre>{generated}</pre>
      <Button
        onClick={copy}
        colorScheme="theme"
        position="absolute"
        top={0}
        right={0}
        m={5}
      >
        <CopyIcon />
      </Button>
    </Box>
  );
}
