import { toast } from 'react-hot-toast';

// Функція для обробки помилок
export const handleError = error => {
  let errorMessage = 'Сталася помилка. Спробуйте ще раз пізніше.';

  if (error.response) {
    // Сервер відповів з кодом, що не входить в діапазон 2xx
    switch (error.response.status) {
      case 400:
        errorMessage =
          'Неправильний запит. Перевірте свої дані і спробуйте ще раз.';
        break;
      case 401:
        errorMessage = 'Неавторизовано. Будь ласка, увійдіть у систему ще раз.';
        break;
      case 403:
        errorMessage = 'Вам заборонено доступ до цієї інформації.';
        break;
      case 404:
        errorMessage = 'Інформація не знайдена.';
        break;
      case 500:
        errorMessage = 'Помилка сервера. Спробуйте ще раз пізніше.';
        break;
      default:
        errorMessage = `Сталася помилка: ${error.response.statusText}.`;
    }
  } else if (error.request) {
    // Запит був зроблений, але відповідь не була отримана
    errorMessage =
      "Сервер не відповідає. Перевірте своє інтернет-з'єднання і спробуйте ще раз.";
  } else {
    // Щось сталося при налаштуванні запиту, що викликало помилку
    errorMessage = `Помилка: ${error.message}`;
  }

  toast.error(errorMessage);
  return errorMessage;
};
