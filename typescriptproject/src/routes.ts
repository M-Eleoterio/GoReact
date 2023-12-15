import { Request, Response } from "express"
import createUser from "./createUser"

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        email: 'miguel@gmail.com',
        pass: '123456',
        techs: [
            'React',
            'NodeJS', 
            'TypeScript',
            {title: 'JavaScript', experience: 100}
        ]
    })

    return res.json({ message: "Hello World!" })
}