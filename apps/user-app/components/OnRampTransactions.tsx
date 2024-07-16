import { Card } from "@repo/ui/card";
import React from "react";

type TransactionStatus = "Success" | "Failure" | "Processing";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: TransactionStatus;
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case "Success":
        return "text-green-600"; // Green color for Success
      case "Failure":
        return "text-red-600"; // Red color for Failure
      case "Processing":
        return "text-yellow-600"; // Yellow color for Processing
      default:
        return "text-gray-600"; // Default color if status is unknown
    }
  };

  return (
    <div className="max-w-xl">
      <Card title="Recent Transactions">
        <div className="pt-2">
          {transactions.map((t, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <div className={`text-sm ${getStatusColor(t.status)}`}>
                  Received INR  ({t.status})
                </div>
                <div className="text-slate-600 text-xs">
                  {t.time.toDateString()}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                + Rs {t.amount / 100}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
