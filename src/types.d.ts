type Person = {
  id: string;
  firstname: string;
  lastname: string;
  position: string;
  phone: string;
  email: string;
  photo: string;
  managerId: string;
  manager: string;
};

type People = Person[];

declare module "*.svg" {
  const path: string;
  export default path;
}

declare module "*/people.json" {
  export const people: People;
}
