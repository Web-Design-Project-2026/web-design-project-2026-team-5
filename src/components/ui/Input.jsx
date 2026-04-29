import "./Input.css";

function Input({ size, label, placeholder, area = "" }) {
  return (
    <div className={`input${size}`}>
      <label className={`input__label${size}`}>{label}</label>
      <input
        className={`input__field${size}${area}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
