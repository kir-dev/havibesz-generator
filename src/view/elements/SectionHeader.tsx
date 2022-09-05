import { FieldBase } from "./FieldBase";
import { Heading } from "@chakra-ui/react";

interface SectionHeaderProps {
  title: string;
  onAdd?: () => void;
}

export function SectionHeader({ title, onAdd }: SectionHeaderProps) {
  return (
    <FieldBase onAdd={onAdd}>
      <Heading fontSize="xl">{title}</Heading>
    </FieldBase>
  );
}
