import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import prisma from '../../../lib/prisma'

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options = {
  theme: null,
  providers: [
    Providers.Credentials({
      name: "Name and Password",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "taro" },
        password: { label: "Password", type: "password" },
      },
      authorize: async credentials => {
        const user = prisma.user.findUnique({
          where: {name: credentials.name}
        })
        if (user && credentials.password == process.env.SUPER_PASSWORD) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],
  session: {
    jwt: true, 
    maxAge: 60 * 60
  },
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
}