import express, { Request, Response } from 'express'

const router = express.Router()

router.post('/register', (req: Request, res: Response) => {
    res.send('Register')
})

router.post('/login', (req: Request, res: Response) => {
    res.send('Login')
})

router.get('/logout', (req: Request, res: Response) => {
    res.send('Logout')
})

router.get('/getuser', (req: Request, res: Response) => {
    res.send('get user')
})

export default router;