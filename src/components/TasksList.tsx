import { CompletedList } from "../assets/svg/CompletedList";
import { TaskProps } from "../interfaces/interfaces";
import { ListItem } from "./ListItem";

interface TasksListProps {
  allTasks: TaskProps[];
  handleRemoveItem: (id: number) => void;
}

export function TasksList(props: TasksListProps) {
  const { allTasks, handleRemoveItem } = props;

  return (
    <div
      className='w-full h-full rounded-md bg-zinc-700 overflow-hidden 
    scrollbar-thumb-green-600 scrollbar-track-transparent scrollbar-thin'
    >
      {allTasks && allTasks.length > 0 ? (
        <ul>
          {allTasks.map((task: TaskProps) => (
            <ListItem
              key={task.id}
              task={task}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </ul>
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <CompletedList width={200} height={200} />
          <p className='text-green-500'>
            Parabéns, todas as tarefas foram completadas!
          </p>
        </div>
      )}
    </div>
  );
}
