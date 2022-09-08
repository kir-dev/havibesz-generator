import { FieldBase } from "../FieldBase";
import { EventFieldType } from "../../../model/Report";
import { Checkbox, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface EventFieldProps {
  field: EventFieldType;
  onChange: (values: EventFieldType) => void;
  onDelete: () => void;
}
export function EventField({ field, onChange, onDelete }: EventFieldProps) {
  const [editing, setEditing] = useState(true);
  const [data, setData] = useState(field);
  const { register, handleSubmit, setFocus } = useForm({ defaultValues: data });

  const onSubmit = (value: EventFieldType) => {
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
          <Input type="date" placeholder="Dátum" {...register("date")} />
          <Input
            type="number"
            placeholder="Résztvevők"
            {...register("attendees.amount")}
          />
          <Checkbox
            type="number"
            placeholder="Körülbelül"
            {...register("attendees.approximated")}
          >
            Körülbelül
          </Checkbox>
        </VStack>
      </FieldBase>
    </form>
  ) : (
    <FieldBase onDelete={onDelete} setEditing={setEditing}>
      <VStack align="flex-start">
        <Heading fontSize="md">{data.title}</Heading>
        <Text>{new Date(data.date)?.toLocaleDateString("hu-HU")}</Text>
        {data.attendees && (
          <Text>
            {data.attendees.approximated ? "~" : ""}
            {data.attendees.amount}fő
          </Text>
        )}
      </VStack>
    </FieldBase>
  );
}
