export const fetchSystem = (params: any) => {
  return request.post("/api/system", params);
};
