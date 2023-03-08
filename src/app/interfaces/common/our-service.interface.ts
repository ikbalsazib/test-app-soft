import { Technology } from "./technology.interface";

/* eslint-disable prettier/prettier */
export interface OurService {
  _id?: string;
  name?: string;
  image?: string;
  shortDescription?: string;
  description?: string;
  offeredServices?: string[];
  technologies?: Technology[];
  industries?: string[];
  slug: string;
  reasonsToChoose?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
