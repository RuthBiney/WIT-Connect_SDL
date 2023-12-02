export interface Post {
  id: number;
  title: string;
  company_name: string;
  location: string;
  description: string;
  opportunity_type: "part-time" | "full-time" | "permanent";
  job_preference: string;
  shift_and_schedule: string;
  remuneration: string;
  application_link: string;
}
