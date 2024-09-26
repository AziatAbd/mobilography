import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  linkVideo: string;
}

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    linkVideo: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (): Partial<Record<keyof FormData, string>> => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.firstName)
      newErrors.firstName = "Имя обязательно для заполнения";
    if (!formData.lastName)
      newErrors.lastName = "Фамилия обязательна для заполнения";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Номер телефона обязателен для заполнения";
    if (!formData.linkVideo)
      newErrors.linkVideo = "Ссылка на видео обязательна для заполнения";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      await fetch(
        "http://ec2-3-127-247-177.eu-central-1.compute.amazonaws.com/api/mobilography",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        linkVideo: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      className="bg-cover bg-center py-10 h-screen"
      style={{
        backgroundImage:
          "url('https://portscaner.ru/Files/Wallpaper/2048x1152/5fc4ed06b165e.jpg')",
      }}
    >
      <div className=" backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Регистрация
        </h2>
        {submitted && (
          <p className="text-green-500 text-center mb-4">
            Вы успешно зарегистрированы!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white" htmlFor="firstName">
              Имя
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white" htmlFor="lastName">
              Фамилия
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white" htmlFor="phoneNumber">
              Номер телефона
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white" htmlFor="linkVideo">
              Ссылка на видео
            </label>
            <input
              type="url"
              id="linkVideo"
              name="linkVideo"
              value={formData.linkVideo}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.linkVideo ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.linkVideo && (
              <p className="text-red-500 text-sm">{errors.linkVideo}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
