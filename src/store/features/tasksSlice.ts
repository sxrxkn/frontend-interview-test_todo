/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* APPLICATION */
import { RootState } from "../store";

export interface TasksState {
  id: string;
  name: string;
  description: string;
  category: string;
}

const initialState: TasksState[] = [
  {
    id: "dcf6c7ea-56fe-4e36-960b-686ebf86d651",
    name: "Задача",
    description: "Описание может быть длинным",
    category: "d485a644-5a24-4f55-b3f7-a083338be879",
  },
  {
    id: "8c90d466-4d2b-4813-a5b4-110b014bf7f2",
    name: "Задача2",
    description: "Описание может быть длинным",
    category: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
  },
  {
    id: "5a034ea1-6159-4805-a4be-e8c160d8ef10",
    name: "Задача3",
    description: "Описание может быть длинным",
    category: "",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    tasksAdded: (state, action: PayloadAction<TasksState>) => {
      state.push(action.payload);
    },
    tasksUpdated: (state, action: PayloadAction<TasksState>) => {
      const { id, name, description, category } = action.payload;
      const existingTask = state.find((task) => task.id === id);

      if (existingTask) {
        existingTask.name = name;
        existingTask.description = description;
        existingTask.category = category;
      }
    },
    tasksRemoved: (state, action: PayloadAction<string>) => {
      const removeTaskId = action.payload;
      return state.filter((task) => task.id !== removeTaskId);
    },

    tasksClearedCategories: (state, action: PayloadAction<string>) => {
      const removeCategoryId = action.payload;
      return state.map((task) => {
        if (task.category === removeCategoryId)
          return { ...task, category: "" };
        else return task;
      });
    },
  },
});

export const {
  tasksAdded,
  tasksUpdated,
  tasksRemoved,
  tasksClearedCategories,
} = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
