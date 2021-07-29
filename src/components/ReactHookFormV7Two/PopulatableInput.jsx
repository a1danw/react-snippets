export const PopulatableInput = ({ label, ...props }) => {
  return (
    <>
      <label htmlFor="">
        <input {...props} />
      </label>
      <button>Copy from default</button>
    </>
  );
};
