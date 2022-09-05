import { Button, Flex, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { DeleteIcon, EditIcon, PlusSquareIcon } from "@chakra-ui/icons";

interface FieldBaseProps {
  children: ReactNode;
  setEditing?: (value: boolean) => void;
  onDelete?: () => void;
  onAdd?: () => void;
  saveButton?: boolean;
}

export function FieldBase({
  children,
  setEditing,
  onDelete,
  onAdd,
  saveButton,
}: FieldBaseProps) {
  return (
    <Flex
      color="theme.100"
      bg="theme.600"
      p={5}
      borderRadius={5}
      mb={3}
      justify="space-between"
      align="center"
    >
      {children}
      <HStack ml={3}>
        {saveButton && (
          <Button colorScheme="blue" type="submit">
            Mentés
          </Button>
        )}
        {setEditing && (
          <Button onClick={() => setEditing(true)} colorScheme="theme">
            <EditIcon />
          </Button>
        )}
        {onDelete && (
          <Button variant="outline" onClick={onDelete} colorScheme="red">
            <DeleteIcon />
          </Button>
        )}
        {onAdd && (
          <Button onClick={onAdd} colorScheme="blue">
            <PlusSquareIcon />
          </Button>
        )}
      </HStack>
    </Flex>
  );
}
