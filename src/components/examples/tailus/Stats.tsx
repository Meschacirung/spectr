import Card from "@tailus-ui/Card";
import { faker } from '@faker-js/faker';
import {Tooltip, XAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';
import {cn} from "@lib/utils"
import Tabs from "@tailus-ui/Tabs";
import { useEffect, useRef, useState } from "react";
import Badge from "@tailus-ui/Badge";
import { ArrowBottomLeftIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

const data = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map(month => ({
  name: month,
  New: faker.number.int({ min: -50, max: 199 }),
  Old: faker.number.int({ min: -50, max: 199 }),
}));

const newOrders = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map(month => ({
  name: month,
  New: faker.number.int({ min: 50, max: 99 }),
  Old: faker.number.int({ min: 50, max: 99 }),
}));

const conversions = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map(month => ({
  name: month,
  New: faker.number.int({ min: 50, max: 99 }),
  Old: faker.number.int({ min: 50, max: 99 }),
}));

const averageNew = data.reduce((sum, { New }) => sum + New, 0) / data.length;
const totalNew = data.reduce((sum, { New }) => sum + New, 0);
const totalOld = data.reduce((sum, { Old }) => sum + Old, 0);

const difference = totalNew - totalOld;
const percentageDifference = (difference / totalOld) * 100;
export type TabsAppProps = "total-orders" | "new-orders" | "conversions"

export const StatsCard = ({ className = "", isNeutral = false }) => {
    const [state, setState] = useState<TabsAppProps>("total-orders");
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef.current) {
            spanRef.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);


    return (
        <Card className={cn("w-full p-[--card-padding]",  className)} variant="mixed">
            <Tabs.Root variant="bottomIndicator" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
                <Tabs.List className="overflow-x-auto sm:overflow-visible  mb-[--card-padding] border-b-0 gap-1 p-1 border border-gray-200 dark:border-gray-800 rounded-lg">
                    <Tabs.Indicator ref={spanRef} className="-top-px bg-primary-600 dark:bg-primary-500"/>
                    <Tabs.Trigger className="min-w-max h-fit py-6 w-1/3 px-8 rounded text-left hover:bg-gray-100 dark:hover:bg-gray-950/50" value="total-orders" id="total-orders">
                        <div>
                            <h3 className="text-gray-600 dark:text-gray-400 text-sm">Total Orders</h3>
                            <div className="mt-3 text-2xl flex gap-2 items-center font-medium text-gray-900 dark:text-white">
                                <span>{totalNew.toFixed()}</span>
                                <Badge className="flex gap-1 items-center h-fit bg-opacity-50 dark:bg-opacity-50 font-normal" variant="soft" colorVariant={percentageDifference > 0 ? "success" : "danger"}>
                                    {
                                        percentageDifference > 0 ? <ArrowTopRightIcon className="size-3" /> : <ArrowBottomLeftIcon  className="size-3" />
                                    }
                                    {percentageDifference.toFixed(0)}%
                                </Badge>
                            </div>
                        </div>
                    </Tabs.Trigger>
                    <span className="border-r -my-1 border-gray-200 dark:border-gray-800"></span>
                    <Tabs.Trigger className="min-w-max h-fit py-6 w-1/3 px-8 rounded text-left hover:bg-gray-100 dark:hover:bg-gray-950/50" value="new-orders" id="new-orders">
                        <div>
                            <h3 className="text-gray-600 dark:text-gray-400 text-sm">New Orders</h3>
                            <div className="mt-3 text-2xl flex gap-2 items-center font-medium text-gray-900 dark:text-white">
                                <span>{averageNew.toFixed()}</span>
                                <Badge className="flex gap-1 items-center h-fit" variant="soft" colorVariant={percentageDifference > 0 ? "success" : "danger"}>
                                    {
                                        percentageDifference > 0 ? <ArrowTopRightIcon className="size-3" /> : <ArrowBottomLeftIcon  className="size-3" />
                                    }
                                    {percentageDifference.toFixed(0)}%
                                </Badge>
                            </div>
                        </div>
                    </Tabs.Trigger>
                    <span className="border-r -my-1 border-gray-200 dark:border-gray-800"></span>
                    <Tabs.Trigger className="min-w-max h-fit py-6 w-1/3 px-8 rounded text-left hover:bg-gray-100 dark:hover:bg-gray-950/50" value="conversions" id="conversions">
                        <div>
                            <h3 className="text-gray-600 dark:text-gray-400 text-sm">Conversions</h3>
                            <div className="mt-3 text-2xl flex gap-2 items-center font-medium text-gray-900 dark:text-white">
                                <span>{averageNew.toFixed(2)}</span>
                                <Badge className="flex gap-1 items-center h-fit" variant="soft" colorVariant={percentageDifference > 0 ? "success" : "danger"}>
                                    {
                                        percentageDifference > 0 ? <ArrowTopRightIcon className="size-3" /> : <ArrowBottomLeftIcon  className="size-3" />
                                    }
                                    {percentageDifference.toFixed(0)}%
                                </Badge>
                            </div>
                        </div>
                    </Tabs.Trigger>
                </Tabs.List>
                <div className={cn("flex justify-center h-72 text-gray-200 dark:text-gray-700", isNeutral && "h-80")}>
                    <Tabs.Content value="total-orders" className="flex-1 w-full">  
                        <Chart data={data} isNeutral={isNeutral} />
                    </Tabs.Content>   
                    <Tabs.Content value="new-orders" className="flex-1 w-full">  
                        <Chart data={newOrders} isNeutral={isNeutral} />
                    </Tabs.Content>  
                    <Tabs.Content value="conversions" className="flex-1 w-full">  
                        <Chart data={conversions} isNeutral={isNeutral} />
                    </Tabs.Content>      
                </div>
            </Tabs.Root>
        </Card>
    );
};

export default StatsCard;

interface ChartProps {
    data: any;
    isNeutral?: boolean;
}

const Chart = ({ data, isNeutral = false }: ChartProps) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorOld" x1="0" y1="0" x2="0" y2="1">
                        <stop className={isNeutral ? "text-gray-200 dark:text-transparent" : "text-accent-200 dark:text-accent-950/20"} offset="5%" stopColor="currentColor" stopOpacity={0.8} />
                        <stop className="text-white dark:text-gray-950" offset="95%" stopColor="currentColor" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                        <stop className={isNeutral ? "text-gray-200 dark:text-white/10" : "text-primary-200 dark:text-primary-950/50"} offset="5%" stopColor="currentColor" stopOpacity={0.8} />
                        <stop className="text-white dark:text-gray-950" offset="95%" stopColor="currentColor" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    stroke="currentColor"
                    className="text-gray-500"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip cursor={{ stroke: 'currentColor', strokeWidth: 1.5 }} offset={6} wrapperClassName="text-gray-600 text-sm dark:text-gray-400 min-w-[10rem] shadow-md shadow-gray-950/5 !px-5 dark:shadow-gray-950/50 !border-gray-200 rounded-xl dark:!bg-gray-900/80 dark:!backdrop-blur-2xl dark:!border-gray-700 [&>*:where(.recharts-tooltip-label)]:!mb-2 [&>*:where(.recharts-tooltip-label)]:text-gray-500 [&>*:where(.recharts-tooltip-label)]:text-base [&>*:where(.recharts-tooltip-label)]:border-b [&>*:where(.recharts-tooltip-label)]:pb-2 [&>*:where(.recharts-tooltip-label)]:text-gray-900 dark:[&>*:where(.recharts-tooltip-label)]:border-white/10 dark:[&>*:where(.recharts-tooltip-label)]:text-white" />
                <CartesianGrid vertical={false} strokeDasharray={3} className="text-[--ui-light-border-color] dark:text-[--ui-dark-border-color]" stroke="currentColor" />
                <Area
                    className={isNeutral ? "text-gray-300 dark:text-white/20" : "text-accent-500"}
                    dataKey="Old"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    fill="url(#colorOld)"
                />
                <Area
                    className={isNeutral ? "text-gray-600 dark:text-white" : "text-primary-600 dark:text-primary-500"}
                    dataKey="New"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    fill="url(#colorNew)"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}