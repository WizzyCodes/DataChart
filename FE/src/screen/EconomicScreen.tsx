"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { readEconomy } from "@/api/API";
import { Button } from "@/components/ui/button";

export const description = "A multiple bar chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const EconomicScreen = () => {
  const [chart, setChart] = useState("GDP");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>

        <div className="flex gap-2">
          <Button className={""} onClick={() => setChart("GDP")}>
            GDP
          </Button>
          <Button onClick={() => setChart("Capita")}>Capita</Button>
          <Button onClick={() => setChart("Annual")}>Annual</Button>
        </div>
      </CardHeader>
      {chart === "GDP" ? (
        <GDPChart />
      ) : chart === "Capita" ? (
        <CapitaChart />
      ) : chart === "Annual" ? (
        <AnnualChart />
      ) : null}
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

const GDPChart = () => {
  const [dataSet, setDataSet] = useState([]);

  const getDataSet = async () => {
    await readEconomy().then((res) => {
      setDataSet(res);
    });
  };

  useEffect(() => {
    getDataSet();
  }, []);

  let mainData = dataSet.map((props: any) => {
    return {
      year: props.Date,
      GDP: parseFloat(props?.GDP),
      perCapita: parseFloat(props[`Per Capita`]),
      annualGrowth: parseFloat(props[`Annual % Change`]),
    };
  });

  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={mainData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(6)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <ChartLegend />
          <Bar dataKey="GDP" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
};

const CapitaChart = () => {
  const [dataSet, setDataSet] = useState([]);

  const getDataSet = async () => {
    await readEconomy().then((res) => {
      setDataSet(res);
    });
  };

  useEffect(() => {
    getDataSet();
  }, []);

  let mainData = dataSet.map((props: any) => {
    return {
      year: props.Date,
      GDP: parseFloat(props?.GDP),
      perCapita: parseFloat(props[`Per Capita`]),
      annualGrowth: parseFloat(props[`Annual % Change`]),
    };
  });

  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={mainData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(6)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <ChartLegend />
          <Bar dataKey="perCapita" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
};

const AnnualChart = () => {
  const [dataSet, setDataSet] = useState([]);

  const getDataSet = async () => {
    await readEconomy().then((res) => {
      setDataSet(res);
    });
  };

  useEffect(() => {
    getDataSet();
  }, []);

  let mainData = dataSet.map((props: any) => {
    return {
      year: props.Date,
      GDP: parseFloat(props?.GDP),
      perCapita: parseFloat(props[`Per Capita`]),
      annualGrowth: parseFloat(props[`Annual % Change`]),
    };
  });

  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={mainData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(6)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <ChartLegend />
          <Bar dataKey="annualGrowth" fill="black" radius={4} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
};
