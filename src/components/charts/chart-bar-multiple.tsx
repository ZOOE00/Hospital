import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@components/ui/chart";

export const description = "Сараар харьцуулсан хүснэгт";

const chartData = [
  { month: "1-р сар", checkups: 186, hospitalizations: 80 },
  { month: "2-р сар", checkups: 305, hospitalizations: 200 },
  { month: "3-р сар", checkups: 237, hospitalizations: 120 },
  { month: "4-р сар", checkups: 173, hospitalizations: 190 },
  { month: "5-р сар", checkups: 209, hospitalizations: 130 },
  { month: "6-р сар", checkups: 214, hospitalizations: 140 },
];

const chartConfig = {
  checkups: {
    label: "Урьдчилан сэргийлэх үзлэг",
    color: "hsl(var(--primary))",
  },
  hospitalizations: {
    label: "Хэвтэн эмчилгээ",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function BarChartMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Сарын статистик</CardTitle>
        <CardDescription>2024 оны 1-р сараас 6-р сар хүртэл</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="checkups" fill="var(--color-checkups)" radius={4} />
            <Bar
              dataKey="hospitalizations"
              fill="var(--color-hospitalizations)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Энэ сард 5.2%-аар өссөн <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Сүүлийн 6 сарын нийт үзлэгийн тоо
        </div>
      </CardFooter>
    </Card>
  );
}
