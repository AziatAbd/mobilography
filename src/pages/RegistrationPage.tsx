import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  linkVideo: string;
  general?: string;
}

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    linkVideo: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
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
      try {
        const response = await fetch(
          "https://itfest.peaksoft.house/api/mobilography",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.statusText}`);
        }

        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          linkVideo: "",
        });

        navigate("/");
      } catch (error) {
        setErrors({
          general: "Не удалось отправить данные, попробуйте снова.",
        });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center py-10"
      style={{
        backgroundImage:
          "url('https://portscaner.ru/Files/Wallpaper/2048x1152/5fc4ed06b165e.jpg')",
      }}
    >
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold">Регистрация</h2>
        {submitted && (
          <p className="mb-4 text-center text-green-500">
            Вы успешно зарегистрированы!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block" htmlFor="firstName">
              Имя
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Ivan"
              className={`mt-1 w-full border p-2 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="lastName">
              Фамилия
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Ivanov"
              className={`mt-1 w-full border p-2 ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="phoneNumber">
              Номер телефона
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="996700100200"
              className={`mt-1 w-full border p-2 ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="linkVideo">
              Ссылка на видео
            </label>
            <input
              type="url"
              id="linkVideo"
              name="linkVideo"
              value={formData.linkVideo}
              onChange={handleChange}
              placeholder="Ссылка на ваше видео"
              className={`mt-1 w-full border p-2 ${
                errors.linkVideo ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.linkVideo && (
              <p className="text-sm text-red-500">{errors.linkVideo}</p>
            )}
          </div>
          <button
            type="submit"
            className="mb-4 w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-blue-600"
          >
            Зарегистрироваться
          </button>

          <button
            className="w-full rounded border border-blue-500 bg-inherit px-4 py-2 font-semibold transition duration-200 hover:bg-blue-600 hover:text-white"
            onClick={() => navigate("/")}
          >
            На главную
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
