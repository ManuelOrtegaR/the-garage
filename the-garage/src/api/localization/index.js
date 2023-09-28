export const getDepartments = async () => {
  const departmentList = await fetch(
    'https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=distinct%20departamento',
  );
  return departmentList.json();
};

export const getCity = async (department) => {
  const cityList = await fetch(
    `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${department}`,
  );
  return cityList.json();
};
