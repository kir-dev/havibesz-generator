import {
  CategorizedSection,
  DetailedSection,
  EventSection,
  StandardSection,
} from "../model/Report";
import { newHash } from "./hashGenerator";

export const PremadeSections: (
  | EventSection
  | StandardSection
  | DetailedSection
  | CategorizedSection
)[] = [
  { id: newHash(), title: "Személyi változások", type: "detailed", items: [] },
  {
    id: newHash(),
    title: "Szervezett közösségi események",
    type: "event",
    items: [],
  },
  { id: newHash(), title: "Szolgáltatások", type: "standard", items: [] },
  {
    id: newHash(),
    title: "Projektek",
    type: "categorized",
    items: [
      { id: newHash(), title: "Újonnan indult", type: "detailed", items: [] },
      { id: newHash(), title: "Halad", type: "detailed", items: [] },
      { id: newHash(), title: "Kész", type: "detailed", items: [] },
      { id: newHash(), title: "Áll", type: "detailed", items: [] },
    ],
  },
  { id: newHash(), title: "Oktatás", type: "event", items: [] },
  {
    id: newHash(),
    title: "Kivonulások/PR tevékenységek",
    type: "event",
    items: [],
  },
  { id: newHash(), title: "Egyéb", type: "standard", items: [] },
];
