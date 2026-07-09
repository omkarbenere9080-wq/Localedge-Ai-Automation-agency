/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | "home"
  | "solutions"
  | "industries"
  | "products"
  | "pricing"
  | "casestudies"
  | "integrations"
  | "resources"
  | "about"
  | "contact";

export interface NavItem {
  label: string;
  pageId: PageId;
  description?: string;
  category?: "product" | "solutions" | "company" | "resources";
}

export interface WorkflowNode {
  id: string;
  type: "trigger" | "action" | "ai" | "output";
  label: string;
  icon: string;
  description: string;
  status: "idle" | "running" | "completed" | "error";
  details?: string;
}

export interface WorkflowConnection {
  fromId: string;
  toId: string;
  animated?: boolean;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  className?: string;
  gradient?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  logoUrl?: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  ctaText: string;
  popular: boolean;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  metrics: { label: string; value: string; trend?: string }[];
  accentColor: string;
  content: string;
}

export interface IntegrationApp {
  name: string;
  category: "productivity" | "database" | "communication" | "analytics" | "crm";
  description: string;
  logo: string;
  status: "connected" | "available" | "featured";
}

export interface ResourcePost {
  id: string;
  title: string;
  category: "blog" | "whitepaper" | "guide" | "release";
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
}
