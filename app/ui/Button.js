export default function Button({ children, type = 'button', onClick }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
      >
        {children}
      </button>
    );
  }