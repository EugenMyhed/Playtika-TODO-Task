import actionsType from './actionsType';

export type TaskType = {
    type: string,
    text: string,
    label: string,
    isDone: boolean,
}

export const createTask = (task: TaskType) => ({
    type: actionsType.CREATE_TASK,
    task
});

export const setFilterType = (filterType: string) => ({
    type: actionsType.SET_FILTER_TYPE,
    filterType
});