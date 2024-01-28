import Card from "@tailus-ui/Card";
import { faker } from '@faker-js/faker';
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip
} from 'recharts';
import {cn} from "@lib/utils"
import Badge from "@tailus-ui/Badge";
import { ArrowBottomLeftIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

export const StatsCard5 = ({ className = "", data=[], title="", intent="" }) => {
    const averageNew = data.reduce((sum, { New }) => sum + New, 0) / data.length;
    const totalNew = data.reduce((sum, { New }) => sum + New, 0);
    const totalOld = data.reduce((sum, { Old }) => sum + Old, 0);

    const difference = totalNew - totalOld;
    const percentageDifference = (difference / totalOld) * 100;

    return (
        <Card className={cn("w-full p-[--card-padding]", className)} variant="mixed">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm">{title}</h3>
            <div className="flex flex-col">
                <div className="mt-3 text-2xl flex gap-2 items-center text-gray-900 dark:text-white">
                    <span>{averageNew.toFixed(2)}</span>
                    <Badge className="flex gap-1 items-center h-fit" variant="soft" colorVariant={percentageDifference > 0 ? "success" : "danger"}>
                        {
                            percentageDifference > 0 ? <ArrowTopRightIcon className="size-3" /> : <ArrowBottomLeftIcon  className="size-3" />
                        }
                        {percentageDifference.toFixed(0)}%
                    </Badge>
                </div>

                <div className="mt-6 flex justify-center h-16 text-gray-200 dark:text-gray-700">
                    <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id={`colorNew4${intent}`} x1="0" y1="0" x2="0" y2="1">
                                <stop className={`text-${intent}-200 dark:text-gray-500/20`} offset="15%" stopColor="currentColor" stopOpacity={1}/>
                                <stop className="text-white dark:text-gray-950" offset="85%" stopColor="currentColor" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip cursor={{ stroke: 'currentColor', strokeWidth: 1.5 }} offset={6} wrapperClassName="text-gray-600 text-sm dark:text-gray-400 min-w-[10rem] shadow-md shadow-gray-950/5 !px-5 dark:shadow-gray-950/50 !border-gray-200 rounded-xl dark:!bg-gray-900/80 dark:!backdrop-blur-2xl dark:!border-gray-700 [&>*:where(.recharts-tooltip-label)]:!mb-2 [&>*:where(.recharts-tooltip-label)]:text-gray-500 [&>*:where(.recharts-tooltip-label)]:text-base [&>*:where(.recharts-tooltip-label)]:border-b [&>*:where(.recharts-tooltip-label)]:pb-2 [&>*:where(.recharts-tooltip-label)]:text-gray-900 dark:[&>*:where(.recharts-tooltip-label)]:border-white/10 dark:[&>*:where(.recharts-tooltip-label)]:text-white" />
                        <Area type="monotone" className={`text-${intent}-600 dark:text-${intent}-500`} dataKey="New" stroke="currentColor"  strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" fill={`url(#colorNew4${intent})`}/>
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>
        </Card>
    );
};

const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

const newUsers = months.map(month => ({
    name: month,
    New: faker.number.int({ min: 1, max: 1000 }),
    Old: faker.number.int({ min: 1, max: 1000 }),
}));

const newOrders = months.map(month => ({
    name: month,
    New: faker.number.int({ min: 1, max: 1000 }),
    Old: faker.number.int({ min: 1, max: 1000 }),
}));

const newCustomers = months.map(month => ({
    name: month,
    New: faker.number.int({ min: 1, max: 1000 }),
    Old: faker.number.int({ min: 1, max: 1000 }),
}));

const newAffiliates = months.map(month => ({
    name: month,
    New: faker.number.int({ min: 0, max: 100 }),
    Old: faker.number.int({ min: 0, max: 100 }),
}));

export const NewUsersCard = () => {
    return (
        <StatsCard5 data={newUsers} title="New users" intent="primary" />
    )
}

export const NewOrdersCard = () => {
    return (
        <StatsCard5 data={newOrders} title="New orders" intent="secondary" />
    )
}

export const NewCustomersCard = () => {
    return (
        <StatsCard5 data={newCustomers} title="New customers" intent="accent" />
    )
}

export const NewAffiliatesCard = () => {
    return (
        <StatsCard5 data={newAffiliates} title="New affiliates" intent="primary" />
    )
}

export default StatsCard5;