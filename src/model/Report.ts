export type ReportSection = {
  title: string;
  type: "event" | "standard" | "detailed" | "categorized";
  // items: T[];
} & HasId;

export interface EventSection extends ReportSection {
  type: "event";
  items: EventFieldType[];
}
export interface StandardSection extends ReportSection {
  type: "standard";
  items: StandardFieldType[];
}
export interface DetailedSection extends ReportSection {
  type: "detailed";
  items: DetailedFieldType[];
}
export interface CategorizedSection extends ReportSection {
  type: "categorized";
  items: (
    | CategorizedSection
    | EventSection
    | StandardSection
    | DetailedSection
  )[];
}

export interface StandardFieldType extends HasId {
  title: string;
}

export interface DetailedFieldType extends HasId {
  title: string;
  description: string;
}

export interface EventFieldType extends HasId {
  date: string;
  title: string;
  description?: string;
  attendees?: AttendeesData;
}

export type AttendeesData = {
  amount: number;
  approximated?: boolean;
};

type HasId = {
  id: string;
};
