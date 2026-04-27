import "./Input.css";

function Input({ label, placeholder }) {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__field" placeholder={placeholder} />
    </div>
  );
}

export default Input;
