export const fetchHelloworld = (params: any) => {
  return request.post("/api/helloworld", params);
};
