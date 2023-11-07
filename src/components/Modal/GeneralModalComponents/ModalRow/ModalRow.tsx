import "./ModalRow.css";
import ModalInput from "../ModalInput/ModalInput";
import ModalDropdown from "../ModalDropdown/ModalDropdown";

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  category: string | undefined;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ModalRow: React.FC<ModalRowProps> = ({
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

export default ModalRow;
