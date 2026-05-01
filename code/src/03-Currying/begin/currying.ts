export const normalizePhoneNumber = (s: string) =>
  s.trim().replace(/^0/, "")

export const convertToInternational = (countryCode: string, digits: string) =>
  `+${countryCode}${digits}`

type ToPhoneNumber = (countryCode: string) => (digits: string) => string;

export const toInternationalPhoneNumber: ToPhoneNumber = (countryCode) => (digits) => `+${countryCode}${digits}`
