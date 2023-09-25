const Input = ({ generatedPass }) => {
  return (
    <div>
      <input
        className="password_input"
        readOnly
        placeholder="Password Will Be Displayed Here"
        value={generatedPass}
      />
    </div>
  );
};

export default Input;
