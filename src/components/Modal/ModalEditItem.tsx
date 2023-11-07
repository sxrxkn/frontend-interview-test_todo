/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import {
  Modal,
  ModalHeader,
  ModalRow,
  ModalInput,
  ModalTextarea,
  ModalFooter,
} from "./GeneralModalComponents";
import { tasksUpdated } from "../../store/features/tasksSlice";
import { categoriesUpdated } from "../../store/features/categoriesSlice";

interface ModalEditItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(item.name),
    [category, setCategory] = useState(item.category || ""),
    [description, setDescription] = useState(item.description);

  const handleEditCardSubmit = () => {
    isCategories
      ? dispatch(categoriesUpdated({ id: item.id, name, description }))
      : dispatch(
          tasksUpdated({
            id: item.id,
            name,
            description,
            category,
          })
        );
    setActive(false);
  };

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title={
          isCategories ? "Редактирование категории" : "Редактирование задачи"
        }
      />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          category={category}
          setCategory={setCategory}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={handleEditCardSubmit}
      />
    </Modal>
  );
};
