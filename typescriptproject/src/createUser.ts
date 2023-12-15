
interface TechObj {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    pass: string;
    techs: Array<string | TechObj>
}

export default function createUser({name, email, pass}: CreateUserData) {
    const user = {
        name,
        email,
        pass,
    }

    return user
}