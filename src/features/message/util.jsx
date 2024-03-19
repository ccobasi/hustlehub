import messageJsonData from "./message.json";

const companies = messageJsonData.map((company) =>
    company.companies.map((d) => d)
  );
  //console.log(companies);

  const individual = messageJsonData.map((indiv)=> indiv.individual.map((d)=> d));
  //console.log(individual);

  export const messageData = [...companies, ...individual];

