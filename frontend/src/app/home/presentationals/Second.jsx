// Modify the Second component or its container to apply centering styles
const Second = ({ jobTitle, sourceSet, image, imageLabel }) => {
  return (
    <div className="second-container" style={{ textAlign: 'center', justifyContent: 'center' }}>
      <img src={image} alt={imageLabel} />
      <h3>{jobTitle}</h3>
    </div>
  );
};

export default Second;
