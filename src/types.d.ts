declare module "*.svg" {
  const path: string;
  export default path;
}

declare module "*/people.json" {
  type Person = {
    id: string;
    firstname: string;
    lastname: string;
    position: string;
    phone: string;
    email: string;
    managerId: string;
    manager: string;
  };
  export const people: Person[];
}
