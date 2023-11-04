/* VENDOR */
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./GeneralModalComponents/Modal";
import { ModalHeader } from "./GeneralModalComponents/ModalHeader";
import { ModalText } from "./GeneralModalComponents/ModalText";
import { ModalFooter } from "./GeneralModalComponents/ModalFooter";
import {
  tasksRemoved,
  tasksClearedCategories,
} from "../../store/features/tasksSlice";
import { categoriesRemoved } from "../../store/features/categoriesSlice";

interface ModalRemoveItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

  const handleDeleteCardSubmit = () => {
    console.log("Delete");
    if (isCategories) {
      dispatch(categoriesRemoved(item.id));
      dispatch(tasksClearedCategories(item.id));
    } else {
      dispatch(tasksRemoved(item.id));
    }
  };

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={handleDeleteCardSubmit}
      />
    </Modal>
  );
};
