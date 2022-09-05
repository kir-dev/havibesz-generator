import { PremadeSections } from "./PremadeSections";
import {
  CategorizedSection,
  DetailedSection,
  EventSection,
  StandardSection,
} from "../model/Report";

export function generateReport(data: typeof PremadeSections) {
  return identArray(data.map(sectionLines).flatMap((str) => str)).join("\n");
}

function sectionLines(
  section: CategorizedSection | DetailedSection | EventSection | StandardSection
) {
  let lines: string[] = [];
  lines.push("*" + section.title);
  if (section.type !== "categorized" && section.items.length === 0) {
    lines.push(identLineEnd("-"));
  }

  switch (section.type) {
    case "categorized":
      section.items.forEach((item) => {
        lines = lines.concat(identArray(sectionLines(item)));
      });
      break;
    case "detailed":
      section.items.forEach((item) => {
        lines.push(identLineEnd(`${item.title} - ${item.description}`));
      });
      break;
    case "event":
      section.items.forEach((item) => {
        lines.push(identLineEnd(item.title));
        lines.push(
          identLine(
            identLineEnd(new Date(item.date)?.toLocaleDateString("hu-HU"))
          )
        );
        if (item.description) {
          lines.push(identLine(identLineEnd(item.description)));
        }
        if (item.attendees) {
          lines.push(
            identLine(
              identLineEnd(
                `${item.attendees.approximated ? "~" : ""}${
                  item.attendees.amount
                } fő`
              )
            )
          );
        }
      });
      break;
    case "standard":
      section.items.forEach((item) => {
        lines.push(identLineEnd(item.title));
      });
      break;
  }
  return lines;
}

function identArray(lines: string[]) {
  return lines.map(identLine);
}

function identLine(str: string) {
  return "  " + str;
}

function identLineEnd(str: string) {
  return "  *" + str;
}
