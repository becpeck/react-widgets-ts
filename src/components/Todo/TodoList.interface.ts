import React from "react";


export interface Task {
    id: string;
    text: string;
    completed: boolean;
    editOn: boolean;
}
  
interface TaskProps {
    toggleComplete: (id: Task['id']) => void;
    removeTask: (id: Task['id']) => void;
    toggleEditOn: (id: Task['id']) => void;
    handleChange: (id: Task['id']) => React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: (id: Task['id']) => React.FormEventHandler<HTMLFormElement>;
}

export interface TaskItemProps extends TaskProps {
    task: Task;
}
  
export interface TaskItemListProps extends TaskProps {
    tasks: Task[];
}

export interface TaskInputProps {
    value: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

export interface TaskButtonProps {
    tasks: Task[];
    checkAll: () => void;
    uncheckAll: () => void;
    removeAll: () => void;
}

export interface SortToggleProps {
    sortOn: boolean;
    toggleSort: React.ChangeEventHandler<HTMLInputElement>;
}