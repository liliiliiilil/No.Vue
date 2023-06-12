export const fetchRole = (params: any) => {
  return request.post("/api/role", params);
};
