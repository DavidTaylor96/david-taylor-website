import './image-container.scss';

interface IImageContainerProps {
  src: string;
}
export const ImageContainer = (props: IImageContainerProps) => {
  return (
    <section className="image-container">
      <img id="image" src={props.src} alt="image of david taylor" />
    </section>
  );
};
