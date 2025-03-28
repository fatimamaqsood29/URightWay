'use client';
import Button from '@/app/ui/Button';
import Input from '@/app/ui/Input';
export default function AuthForm({
  title,
  description,
  formData,
  setFormData,
  classes,
  onSubmit,
  userType
}) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: URL.createObjectURL(file) });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="text-gray-600 mb-4">Auth [{userType}]</div>

        <h2 className="text-xl font-bold text-center mb-6">{title}</h2>
        <p className="text-gray-500 text-center mb-8">{description}</p>

        <div className="flex flex-col items-center">
          <img
            src={formData.photo || "/default-avatar.png"}
            alt="Profile"
            className="w-28 h-28 object-cover rounded-full mb-4"
          />
          <label className="text-sm font-semibold text-green-600 cursor-pointer mb-6">
            <input type="file" className="hidden" onChange={handlePhotoChange} />
            Upload Photo
          </label>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            name="pin"
            placeholder="Create Pin"
            value={formData.pin}
            onChange={handleChange}
            required
          />

          <Input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-green-500"
          >
            <option value="">Select Class</option>
            {classes.map((cls, index) => (
              <option key={index} value={cls}>
                {cls}
              </option>
            ))}
          </select>

          <Button type="submit">
            Proceed to Payment
          </Button>
        </form>
      </div>
    </div>
  );
}