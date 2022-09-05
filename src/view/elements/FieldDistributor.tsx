import {
  CategorizedSection,
  DetailedFieldType,
  DetailedSection,
  EventFieldType,
  EventSection,
  StandardFieldType,
  StandardSection,
} from "../../model/Report";
import { EventField } from "./fields/EventField";
import { DetailedField } from "./fields/DetailedField";
import { StandardField } from "./fields/StandardField";
import { GroupBox } from "./GroupBox";
import { SectionHeader } from "./SectionHeader";
import { newHash } from "../../utils/hashGenerator";

interface FieldDistributorProps {
  section:
    | EventSection
    | StandardSection
    | DetailedSection
    | CategorizedSection;
  onChange: (
    section:
      | EventSection
      | StandardSection
      | DetailedSection
      | CategorizedSection
  ) => void;
}
export function FieldDistributorWrapper({
  section,
  onChange,
}: FieldDistributorProps) {
  const addItem = () => {
    let newItem;
    switch (section.type) {
      case "standard":
        newItem = { id: newHash(), title: "" } as StandardFieldType;
        onChange({ ...section, items: [...section.items, newItem] });
        break;
      case "event":
        newItem = {
          id: newHash(),
          title: "",
          date: new Date().toISOString(),
          description: "",
          attendees: { approximated: false, amount: 0 },
        } as EventFieldType;
        onChange({ ...section, items: [...section.items, newItem] });
        break;
      case "detailed":
        newItem = {
          id: newHash(),
          title: "",
          description: "",
        } as DetailedFieldType;
        onChange({ ...section, items: [...section.items, newItem] });
        break;
    }
  };
  return (
    <>
      <SectionHeader
        title={section.title}
        onAdd={section.type !== "categorized" ? addItem : undefined}
      />
      <GroupBox>{FieldDistributor({ section, onChange })}</GroupBox>
    </>
  );
}

export function FieldDistributor({ section, onChange }: FieldDistributorProps) {
  const changeItem = (index: number, value: typeof section.items[number]) => {
    let newItems = [...section.items];
    newItems[index] = value;
    switch (section.type) {
      case "standard":
        onChange({ ...section, items: newItems as StandardFieldType[] });
        break;
      case "event":
        onChange({ ...section, items: newItems as EventFieldType[] });
        break;
      case "detailed":
        onChange({ ...section, items: newItems as DetailedFieldType[] });
        break;
      case "categorized":
        onChange({
          ...section,
          items: newItems as CategorizedSection[],
        });
        break;
    }
  };

  const removeItem = (id: string) => {
    onChange({
      ...section,
      items: section.items.filter((item) => item.id !== id),
    } as typeof section);
  };

  switch (section.type) {
    case "categorized":
      return section.items.map((item, index) => (
        <FieldDistributorWrapper
          onChange={(value) => changeItem(index, value)}
          section={item}
          key={index}
        />
      ));
    case "detailed":
      return section.items.map((item, index) => (
        <DetailedField
          key={index}
          field={item}
          onDelete={() => {
            removeItem(item.id);
          }}
          onChange={(value) => changeItem(index, value)}
        />
      ));
    case "event":
      return section.items.map((item, index) => (
        <EventField
          field={item}
          key={index}
          onDelete={() => {
            removeItem(item.id);
          }}
          onChange={(value) => changeItem(index, value)}
        />
      ));
    case "standard":
      return section.items.map((item, index) => (
        <StandardField
          field={item}
          key={index}
          onDelete={() => {
            removeItem(item.id);
          }}
          onChange={(value) => changeItem(index, value)}
        />
      ));
  }
}
