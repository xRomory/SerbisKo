export const buildEditPayload = (original: Record<string, any>, edited: Record<string, any>) => {
  const payload: Record<string, any> = {};
  for(const key in edited) {
    if(
      edited[key] !== original[key] &&
      edited[key] !== ""
    ) {
      payload[key] = edited[key];
    }
  }
  return payload;
};