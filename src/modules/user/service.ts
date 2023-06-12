export const fetchUser = (params: any) => {
  return request.post("/api/user", params);
};
