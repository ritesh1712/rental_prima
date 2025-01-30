import React from 'react';
import { Card, Text, Metric, Flex, ProgressBar } from '@tremor/react';
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  CubeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid';

interface MetricCardProps {
  title: string;
  metric: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  trend: {
    value: string;
    direction: 'up' | 'down';
  };
  progress: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  metric,
  icon: Icon,
  trend,
  progress,
}) => {
  const TrendIcon = trend.direction === 'up' ? ArrowUpIcon : ArrowDownIcon;
  const trendColor = trend.direction === 'up' ? 'emerald' : 'red';

  return (
    <Card className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0 transform -skew-y-12 bg-gradient-to-r from-current to-transparent" />
      </div>

      <div className="relative">
        {/* Header */}
        <Flex>
          <div
            className={`p-2 rounded-lg bg-${trendColor}-100 dark:bg-${trendColor}-900/30`}
          >
            <Icon className={`w-5 h-5 text-${trendColor}-600 dark:text-${trendColor}-400`} />
          </div>
          <Text className="truncate">{title}</Text>
        </Flex>

        {/* Metric */}
        <div className="mt-4">
          <Metric>{metric}</Metric>
        </div>

        {/* Trend */}
        <Flex className="mt-4 space-x-2">
          <Flex className="space-x-1">
            <TrendIcon
              className={`w-4 h-4 text-${trendColor}-600 dark:text-${trendColor}-400`}
            />
            <Text className={`text-${trendColor}-600 dark:text-${trendColor}-400`}>
              {trend.value}
            </Text>
          </Flex>
          <Text>vs last month</Text>
        </Flex>

        {/* Progress */}
        <div className="mt-3">
          <Flex className="space-x-2">
            <Text>{progress}%</Text>
            <Text>of target</Text>
          </Flex>
          <ProgressBar
            value={progress}
            color={trendColor}
            className="mt-2"
            showAnimation={true}
          />
        </div>
      </div>
    </Card>
  );
};

const metrics = [
  {
    title: 'Total Rentals',
    metric: '1,234',
    icon: ShoppingCartIcon,
    trend: {
      value: '12%',
      direction: 'up' as const,
    },
    progress: 75,
  },
  {
    title: 'Total Products',
    metric: '856',
    icon: CubeIcon,
    trend: {
      value: '8%',
      direction: 'up' as const,
    },
    progress: 82,
  },
  {
    title: 'Monthly Revenue',
    metric: '₹3,48,234',
    icon: CurrencyDollarIcon,
    trend: {
      value: '15%',
      direction: 'up' as const,
    },
    progress: 90,
  },
  {
    title: 'Active Users',
    metric: '324',
    icon: UserGroupIcon,
    trend: {
      value: '4%',
      direction: 'down' as const,
    },
    progress: 68,
  },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        // <MetricCard key={metric.title} {...metric} />
        <div></div>
      ))}
    </div>
  );
}
