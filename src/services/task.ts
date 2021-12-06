import { fetchApi } from "./api";

import type { AccordionItemsTypes } from "../types";

export const onCompleteTask = (id: string, status: boolean) => {
  return fetchApi.patch(`/tasks/${id}`, {
    completed: status,
  });
};

export const onCreateNewTask = (dto: AccordionItemsTypes) => {
  return fetchApi.post(`/tasks/new`, dto);
};

export const onFetchTasks = async (): Promise<AccordionItemsTypes[]> => {
  const result = await fetchApi.get(`/tasks/list`);
  return result?.data.tasks;
};

export const onDeleteTask = (id: string) => {
  return fetchApi.delete(`/tasks/${id}`);
};

export const onUpdateTask = (id: string, dto: AccordionItemsTypes) => {
  return fetchApi.patch(`/tasks/${id}`, dto);
};
