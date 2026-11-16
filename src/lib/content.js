// Content publishing rules.
//
// Anything not yet verified by the owner is either omitted or shown only in
// development through <DevPlaceholder>, which renders nothing in production
// builds. This keeps placeholders from ever being published as real content.

export const IS_DEVELOPMENT = process.env.NODE_ENV !== "production";

// Keeps entries that have every required field filled in.
export function withRequiredFields(items, fields) {
  return items.filter((item) =>
    fields.every((field) => {
      const value = item[field];
      return Array.isArray(value) ? value.length > 0 : Boolean(value);
    }),
  );
}
