export default function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'jnfkerjfnernfkjenvjenvinvrddvdvkenvekvn',
                user: {
                    name: 'Gabriel',
                    email: 'gabr.jesus001@gmail.com',
                },
            });
        }, 2000);
    });
}