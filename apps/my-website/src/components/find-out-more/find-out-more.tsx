import { FiArrowDown } from 'react-icons/fi';
import './find-out-more.scss';

interface IFindOutMore {
  buttonText: string;
  onClick?: () => void;
  onRight?: boolean;
}

export const FindOutMore = (props: IFindOutMore) => {
  return (
    <div
      className={`${
        props.onRight
        ? 'wrapper-right-find-out-more'
        : 'wrapper-left-find-out-more'
      }`}
    >
      <div className="inner-container">
        <button className="small-button" onClick={props.onClick}>
          <p id="small-button-text">{props.buttonText}</p>
          <FiArrowDown id="small-icon" />
        </button>
        <div className="down-line" />
      </div>
    </div>
  );
};
