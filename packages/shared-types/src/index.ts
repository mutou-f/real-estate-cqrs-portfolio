export type UserRole = "APPLICANT" | "REVIEWER" | "ADMIN";

export type ApplicationStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "APPROVED"
  | "REJECTED";

export type EventType =
  | "UserRegistered"
  | "ApplicationCreated"
  | "ApplicationSubmitted"
  | "ApplicationApproved"
  | "ApplicationRejected";
