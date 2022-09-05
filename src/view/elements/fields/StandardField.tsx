import { FieldBase } from "../FieldBase";
import { StandardFieldType } from "../../../model/Report";
import { Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface StandardFieldProps {
  field: StandardFieldType;
  onChange: (values: StandardFieldType) => void;
  onDelete: () => void;
}
export function StandardField({
  field,
  onChange,
  onDelete,
}: StandardFieldProps) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState(field);
  const { register, handleSubmit } = useForm({ defaultValues: data });

  const onSubmit = (value: StandardFieldType) => {
    setData(value);
    setEditing(false);
    onChange(value);
  };

  return editing ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldBase onDelete={onDelete} saveButton>
        <Input mr={2} placeholder="Megnevezés" {...register("title")} />
      </FieldBase>
    </form>
  ) : (
    <FieldBase onDelete={onDelete} setEditing={setEditing}>
      <Heading fontSize="md">{data.title}</Heading>
    </FieldBase>
  );
}
