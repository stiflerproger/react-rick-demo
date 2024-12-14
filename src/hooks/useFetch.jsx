export default async function useFetch(endpoint = '', options = {}, dependencies = []) {
  const token = ''; // TODO: добавить токен авторизации
  const baseUrl = 'https://rickandmortyapi.com/api/'; // TODO: вынести в .env

  // TODO: добавить проверку на fetch на другие ресурсы, где baseUrl не будет добавляться
  // TODO: убирать trailing '/'

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }), // Добавляем токен
    ...(options.headers || {}), // Добавляем пользовательские заголовки
  };

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers,
    credentials: 'include', // Включаем cookies для сессий
  });
}