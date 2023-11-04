/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { Modal } from "./GeneralModalComponents/Modal";
import { ModalHeader } from "./GeneralModalComponents/ModalHeader";
import { ModalInput } from "./GeneralModalComponents/ModalInput";
import { ModalRow } from "./GeneralModalComponents/ModalRow";
import { ModalTextarea } from "./GeneralModalComponents/ModalTextarea";
import { ModalFooter } from "./GeneralModalComponents/ModalFooter";
import { tasksAdded } from "../../store/features/tasksSlice";
import { categoriesAdded } from "../../store/features/categoriesSlice";

interface ModalCreateItemProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(""),
    [category, setCategory] = useState(""),
    [description, setDescription] = useState("");

  const clearState = () => {
    setName("");
    setDescription("");
    setCategory("");
  };

  const handleCreateCardSubmit = () => {
    if (name) {
      isCategories
        ? dispatch(categoriesAdded({ id: uuidv4(), name, description }))
        : dispatch(
            tasksAdded({
              id: uuidv4(),
              name,
              description,
              category: category,
            })
          );
    }
    clearState();
    setActive(false);
  };

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title={isCategories ? "Создание категории" : "Создание задачи"}
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
        clearState={clearState}
        submitBtnText="Создать"
        size="large"
        onSubmit={handleCreateCardSubmit}
      />
    </Modal>
  );
};