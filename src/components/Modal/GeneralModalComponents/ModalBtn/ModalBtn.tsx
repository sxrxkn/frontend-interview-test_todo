import "./ModalBtn.css";

interface ModalBtnProps {
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
}

const ModalBtn: React.FC<ModalBtnProps> = ({
  type,
  children,
  size,
  onClick,
}) => {
  const setButtonClass = () => {
    let result: string;
    if (type === "primary") {
      if (size === "large") {
        result = "modalbtn primary large";
      } else {
        result = "modalbtn primary";
      }
    } else {
      result = "modalbtn";
    }
    return result;
  };

  return (
    <button className={setButtonClass()} onClick={onClick}>
      {children}
    </button>
  );
};

export default ModalBtn;
