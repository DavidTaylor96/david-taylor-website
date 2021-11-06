import { FiArrowDown } from 'react-icons/fi';
import './find-out-more.scss';

interface IFindOutMore {
  buttonText: string;
  onClick?: () => void;
}

export const FindOutMore = (props: IFindOutMore) => {
  return (
    <div className="find-out-more-container">
      <div>
        <button className="small-button" onClick={props.onClick}>
          <p id="small-button-text">{props.buttonText}</p>
          <FiArrowDown id="small-icon" />
        </button>
        <div className="down-line" />
      </div>
    </div>
  );
};
