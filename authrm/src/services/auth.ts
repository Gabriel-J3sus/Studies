interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
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