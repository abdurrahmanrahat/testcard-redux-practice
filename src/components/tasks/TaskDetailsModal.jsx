import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);

  const task = tasks.find((task) => task.id === id);
//   console.log(task, tasks, id);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      <p>{task?.description}</p>
    </Modal>
  );
};

export default TaskDetailsModal;
