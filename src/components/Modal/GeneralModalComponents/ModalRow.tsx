import { ModalInput } from "./ModalInput";
import { ModalDropdown } from "./ModalDropdown";

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  category: string | undefined;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  category,
  setCategory,
}) => {
  return (
    <div className="modal__content_row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown category={category} setCategory={setCategory} />
    </div>
  );
};
