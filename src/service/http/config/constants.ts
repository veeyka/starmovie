const METHODS = ["get", "post", "delete", "patch", "put"] as const;




export type TMethods = typeof METHODS[number];
export { METHODS };
