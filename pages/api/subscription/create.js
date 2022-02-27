import { PrismaClient } from '@prisma/client'
import { validate } from 'middlewares/validate'
import { backenSubscriptionSchema } from 'schemas/subscription'

async function createEvent(req, res) {
  if (req.method === 'POST') {
    const prisma = new PrismaClient({ log: ['query'] })

    try {
      const { subscription: subscriptionData } = req.body
      const subscription = await prisma.subscription.create({
        data: {
          email: subscriptionData.email,
        },
      })

      res.status(201).json({ subscription })
    } catch (error) {
      res.status(500).json({ error: 'Unable to subscribe for new events' })
    } finally {
      await prisma.$disconnect()
    }
  }
}

export default validate(backenSubscriptionSchema, createEvent)
