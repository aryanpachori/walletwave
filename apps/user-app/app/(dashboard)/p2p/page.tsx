"use client";
import { getServerSession } from "next-auth";
import { P2pTransactions } from "../../../components/P2pTransferCard";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

export default async function () {
  return (
    <div className="w-full">
      <SendCard />
    </div>
  );
}
