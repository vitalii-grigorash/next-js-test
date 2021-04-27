export const BASE_URL = 'http://localhost:3001';

export const sendForm = (name, number) => fetch(`${BASE_URL}/feedbackform`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, number }),
})
.then((res) => {
    if (!res.ok) {
        return res.json()
        .then((err) => {
            if (err.error) {
                throw new Error(err.error);
            } else {
                throw new Error(err.message);
            }
        });
    }
    return res.json();
})
.catch((err) => { 
    throw new Error(err.message);
});