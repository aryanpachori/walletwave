import express, { Request, Response } from "express";
import db from "@repo/db/client";

const app = express();
app.use(express.json());

app.post("/hdfcWebhook", async (req: Request, res: Response) => {
  const paymentInformation: {
    token: string;
    userId: string;
    amount: string;
  } = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };

 
  const amountFromFrontend = Number(paymentInformation.amount);
  const userId = Number(paymentInformation.userId);

  try {
    const userBalance = await db.balance.findFirst({
      where: {
        userId,
      },
    });

    if (!userBalance) {
      return res.status(404).json({
        message: "User balance not found",
      });
    }

    const currentBalance = userBalance.amount;

    if (currentBalance !== amountFromFrontend) {
      await db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Failure",
        },
      });
      return res.status(401).json({
        message: "Amount sent from frontend does not match the expected amount",
      });
    }

    // If validation passes, proceed with updating the database
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId,
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({
      message: "Captured",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error while processing webhook",
    });
  }
});

app.listen(3003);
