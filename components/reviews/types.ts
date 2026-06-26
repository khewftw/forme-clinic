export type ReviewPlatformId =
  | "all"
  | "yandex"
  | "prodoctorov"
  | "google"
  | "zoon"
  | "napopravku";

export type PlatformReview = {
  id: string;
  platform: Exclude<ReviewPlatformId, "all">;
  user: string;
  avatar?: string;
  rating: number;
  date: string;
  title?: string;
  text: string;
  sourceLabel: string;
  sourceHref: string;
};

export type SurgeonReview = {
  patient: string;
  date: string;
  doctorName: string;
  doctorShort: string;
  doctorHref: string;
  department: string;
  departmentHref: string;
  image: string;
  text: string;
};
