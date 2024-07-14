"use server";

import { getServerSession } from "next-auth";
import db from "@repo/db/client";
import { authOptions } from "../auth";
export async function createOnRampTransactions(
  provider: string,
  amount: number
) {
  const session = await getServerSession(authOptions);

  if (!session?.user || !session.user?.id) {
    return {
      message: "Unauthorized request",
    };
  }
  const token = (Math.random() * 1000).toString();

  await db.onRampTransaction.create({
    data: {
      status: "Processing",
      token,
      provider,
      amount: amount * 100,
      startTime: new Date(),
      userId: Number(session?.user?.id),
    },
  });
  return {
    message: "done",
  };
}
