-- CreateTable
CREATE TABLE "Event" (
    "event_id" TEXT NOT NULL,
    "host_name" VARCHAR(100) NOT NULL,
    "host_email" VARCHAR(100) NOT NULL,
    "event_name" VARCHAR(150) NOT NULL,
    "date_and_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("event_id")
);
