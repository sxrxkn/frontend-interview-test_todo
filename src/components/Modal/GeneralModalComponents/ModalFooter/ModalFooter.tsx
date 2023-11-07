import "./ModalFooter.css";
import ModalBtn from "../ModalBtn/ModalBtn";

interface ModalFooterProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string;
  size?: string;
  onSubmit: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  clearState,
  setActive,
  submitBtnText,
  size,
  onSubmit,
}) => {
  return (
    <footer className="modal__content-footer">
      <ModalBtn type="primary" size={size || ""} onClick={onSubmit}>
        {submitBtnText}
      </ModalBtn>
      <ModalBtn
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}>
        Закрыть
      </ModalBtn>
    </footer>
  );
};

export default ModalFooter;
