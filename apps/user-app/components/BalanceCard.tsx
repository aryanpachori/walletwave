import { Card } from "@repo/ui/card";

export const BalanceCard = ({ amount, locked }: { amount: number; locked: number; }) => {
    return (
        <div className="max-w-xl">
            <Card title="Balance">
                <div className="flex justify-between items-center border-b border-slate-300 pb-2 px-4">
                    <div className="text-sm">Unlocked Balance</div>
                    <div className="text-lg font-semibold">{(amount / 100).toFixed(2)} INR</div>
                </div>
                <div className="flex justify-between items-center border-b border-slate-300 py-2 px-4">
                    <div className="text-sm">Total Locked Balance</div>
                    <div className="text-lg font-semibold">{(locked / 100).toFixed(2)} INR</div>
                </div>
                <div className="flex justify-between items-center border-b border-slate-300 py-2 px-4">
                    <div className="text-sm">Total Balance</div>
                    <div className="text-lg font-semibold">{((locked + amount) / 100).toFixed(2)} INR</div>
                </div>
            </Card>
        </div>
    );
}
