import { FieldBase } from "../FieldBase";
import { DetailedFieldType } from "../../../model/Report";
import { Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface DetailedFieldProps {
  field: DetailedFieldType;
  onChange: (values: DetailedFieldType) => void;
  onDelete: () => void;
}
export function DetailedField({
  field,
  onChange,
  onDelete,
}: DetailedFieldProps) {
  const [editing, setEditing] = useState(true);
  const [data, setData] = useState(field);
  const { register, handleSubmit, setFocus } = useForm({ defaultValues: data });

  const onSubmit = (value: DetailedFieldType) => {
    setData(value);
    setEditing(false);
    onChange(value);
  };

  useEffect(() => {
    if (editing) setFocus("title");
  }, [editing, setFocus]);

  return editing ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldBase onDelete={onDelete} saveButton>
        <VStack align="flex-start">
          <Input placeholder="Megnevezés" {...register("title")} />
          <Input placeholder="Leírás" {...register("description")} />
        </VStack>
      </FieldBase>
    </form>
  ) : (
    <FieldBase onDelete={onDelete} setEditing={setEditing}>
      <VStack align="flex-start">
        <Heading fontSize="md">{data.title}</Heading>
        <Text>{data.description}</Text>
      </VStack>
    </FieldBase>
  );
}
