import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './find-out-more.scss';

interface IFindOutMore {
  buttonText: string;
  onClick?: () => void;
  onRight?: boolean;
  id: string;
  largeScreen?: boolean;
}

export const FindOutMore = (props: IFindOutMore) => {


  return (
    <section
      className={`${
        props.onRight
          ? 'wrapper-right-find-out-more'
          : 'wrapper-left-find-out-more'
      }`}
    >
      <Link  to={props.id} smooth={true} offset={props.largeScreen ? -450 : -150} duration={1000}>
        <div className="inner-container">
          <button className="small-button" onClick={props.onClick}>
            <p id="small-button-text">{props.buttonText}</p>
            <FiArrowDown id="small-icon" className='arrow'/>
          </button>
          <div className="down-line" />
        </div>
      </Link>
    </section>
  );
};
