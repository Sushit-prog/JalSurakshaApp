
"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig
} from "@/components/ui/chart";

const chartData = [
  { day: "Monday", reports: 186, symptoms: 80 },
  { day: "Tuesday", reports: 305, symptoms: 200 },
  { day: "Wednesday", reports: 237, symptoms: 120 },
  { day: "Thursday", reports: 273, symptoms: 190 },
  { day: "Friday", reports: 209, symptoms: 130 },
  { day: "Saturday", reports: 214, symptoms: 140 },
  { day: "Sunday", reports: 321, symptoms: 210 },
];

const chartConfig = {
  reports: {
    label: "Reports",
    color: "hsl(var(--chart-1))",
  },
  symptoms: {
    label: "Symptoms",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ReportsChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="reports" fill="var(--color-reports)" radius={4} />
          <Bar dataKey="symptoms" fill="var(--color-symptoms)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
