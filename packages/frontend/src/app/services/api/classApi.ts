import { ClassApi } from '@open-api';

export const listClassApi = async () => {
  const classApi = new ClassApi({
    basePath: 'http://localhost:3000',
    isJsonMime: (mime: string) => {
      if (mime === 'json') {
        return true;
      }

      return false;
    },
  });

  const response = await classApi.classControllerFind();

  return response.data.classes;
};
