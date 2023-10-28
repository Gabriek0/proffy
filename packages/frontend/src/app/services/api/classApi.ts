import { ClassApi } from '@open-api';

export const listClass = () => {
  const classApi = new ClassApi();

  const response = classApi.classControllerFind();

  return response;
};
