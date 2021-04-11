import {baseUrl} from '../utils/utils';

export const handleRegistration = (password, email) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": `${password}`,
      "email": `${email}`
    })
  })
  .then((res) => {
      if (res.ok) { 
        return res.json();
      } else {
        console.log('Ошибка');
      }
  })
  .catch((err) => console.log(err));

}
