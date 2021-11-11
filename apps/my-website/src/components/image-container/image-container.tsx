import './image-container.scss';

interface IImageContainerProps {
  src: string;
  noHeightOrWidth?: boolean;
}
export const ImageContainer = (props: IImageContainerProps) => {
  return (
    <section className="image-container">
      <img style={{
        height: `${props.noHeightOrWidth ? 'inherent' : '30em'}`,
        width: `${props.noHeightOrWidth ? 'inherent' : '30em'}`,
      }} src={props.src} alt="image of david taylor" />
    </section>
  );
};
