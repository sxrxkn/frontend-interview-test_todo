/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import "./ModalDropdown.css";
import "../GeneralStyles.css";
import down from "../../../../assets/icons/down.svg";
import { selectAllCategories } from "../../../../store/features/categoriesSlice";

interface ModalDropdownProps {
  category: string | undefined;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ModalDropdown: React.FC<ModalDropdownProps> = ({
  category,
  setCategory,
}) => {
  const [isActive, setIsActive] = useState(false),
    options = useSelector(selectAllCategories);

  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="dropdown-label">Категория</span>
      <div className={category ? "dropdown-btn" : "dropdown-btn placeholder"}>
        {options.find((option) => option.id === category)?.name ||
          "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <ul className="dropdown-content">
          {options.map((option) => (
            <li
              className="dropdown-item"
              onClick={() => {
                setCategory(option.id);
                setIsActive(false);
              }}
              key={option.id}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ModalDropdown;
