export const fetchSystemSettings = (params: any) => {
  return request.post("/api/system-settings", params);
};
