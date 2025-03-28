export default function Input({ type = 'text', name, placeholder, value, onChange, required }) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 border rounded-lg focus:outline-green-500"
      />
    );
  }