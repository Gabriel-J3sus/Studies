import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.GitHub({
            clientId: "",
            clientSecret: ""
        }),
        Providers.Twitter({
            clientId: "",
            clientSecret: ""
        }),
        Providers.Email({
            server: {
                host: "",
                port: "",
                auth: {
                    user: "",
                    pass: "",
                }
            },
            from: "",
        })
    ]
}