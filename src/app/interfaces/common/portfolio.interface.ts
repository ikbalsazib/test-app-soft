/* eslint-disable prettier/prettier */
import { Technology } from "./technology.interface";
import {PortfolioCategory} from "./portfolio-category.interface";
export interface Portfolio {
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  isHtml?: boolean;
  websiteUrl?:string;
  solution?: string;
  images?: string[];
  impact?: string;
  slug:string;
  features?:string[];
  technologies?: Technology[];
  projectHighlights?:string[];
  createdAt?: Date;
  updatedAt?: Date;
  portfolioCategory?:PortfolioCategory;
}
