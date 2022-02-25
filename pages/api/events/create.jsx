import { PrismaClient } from '@prisma/client'
import { validate } from 'middlewares/validate'
import { eventSchema } from 'schemas/event'

async function createEvent(req, res) {
  if (req.method === 'POST') {
    const prisma = new PrismaClient({ log: ['query'] })

    try {
      const { event: eventData } = req.body
      const event = await prisma.event.create({
        data: {
          host_name: eventData.host_name,
          host_email: eventData.host_email,
          event_name: eventData.event_name,
          date_and_time: eventData.date_and_time,
        },
      })

      res.status(201).json({ event })
    } catch (error) {
      res.status(500).json({ error: 'Unable to save event to the database' })
    } finally {
      await prisma.$disconnect()
    }
  }
}

export default validate(eventSchema, createEvent)
