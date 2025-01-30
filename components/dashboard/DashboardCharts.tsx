import React from 'react';
import {
  Card,
  Title,
  Text,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  AreaChart,
  BarChart,
  DonutChart,
  Flex,
} from '@tremor/react';

interface CustomLegendProps {
  categories: string[];
  colors: string[];
}

const CustomLegend: React.FC<CustomLegendProps> = ({ categories, colors }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {categories.map((category, index) => (
        <div 
          key={category} 
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: `var(--${colors[index]}-500)` }}
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {category}
          </span>
        </div>
      ))}
    </div>
  );
};

const revenueData = [
  { date: 'Jan', revenue: 230000, target: 250000 },
  { date: 'Feb', revenue: 320000, target: 300000 },
  { date: 'Mar', revenue: 280000, target: 300000 },
  { date: 'Apr', revenue: 410000, target: 350000 },
  { date: 'May', revenue: 380000, target: 350000 },
  { date: 'Jun', revenue: 460000, target: 400000 },
];

const categoryData = [
  { name: 'Electronics', value: 40, color: 'indigo' },
  { name: 'Furniture', value: 30, color: 'cyan' },
  { name: 'Vehicles', value: 20, color: 'pink' },
  { name: 'Others', value: 10, color: 'amber' },
];

const rentalActivityData = [
  { category: 'Electronics', rentals: 145, growth: '+12%' },
  { category: 'Furniture', rentals: 96, growth: '+8%' },
  { category: 'Vehicles', rentals: 78, growth: '+5%' },
  { category: 'Others', rentals: 34, growth: '+2%' },
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Revenue Trend */}
      <Card>
        <div className="mb-4">
          <Flex>
            <div>
              <Title>Revenue Trend</Title>
              <Text className="mt-2">Monthly revenue and target comparison</Text>
            </div>
            <TabGroup>
              <TabList variant="solid">
                <Tab>6M</Tab>
                <Tab>YTD</Tab>
                <Tab>1Y</Tab>
              </TabList>
            </TabGroup>
          </Flex>
        </div>
        {/* <AreaChart
          className="h-72 mt-4"
          data={revenueData}
          index="date"
          categories={['revenue', 'target']}
          colors={['indigo', 'gray']}
          valueFormatter={(number: number) => `₹${(number/1000).toFixed(0)}K`}
          showLegend={false}
          showGridLines={false}
          curveType="natural"
          yAxisWidth={80}
          marginTop={20}
          tooltip={{ show: true }}
          onValueChange={(v) => {
            if (v) console.log(v);
          }}
        /> */}
        <div className="mt-6">
          <CustomLegend
            categories={['Actual Revenue', 'Target Revenue']}
            colors={['indigo', 'gray']}
          />
        </div>
      </Card>

      {/* Category Distribution */}
      <Card>
        <Title>Product Category Distribution</Title>
        <Text className="mt-2">Distribution of products across categories</Text>
        <DonutChart
          className="h-72 mt-4"
          data={categoryData}
          category="value"
          index="name"
          colors={['indigo', 'cyan', 'pink', 'amber']}
          valueFormatter={(number: number) => `${number}%`}
          showLabel={true}
          showTooltip={true}
          showAnimation={true}
        />
        <div className="mt-6">
          <CustomLegend
            categories={categoryData.map(item => item.name)}
            colors={categoryData.map(item => item.color)}
          />
        </div>
      </Card>

      {/* Rental Activity */}
      <Card className="lg:col-span-2">
        <Title>Rental Activity by Category</Title>
        <Text className="mt-2">Number of active rentals per category with growth</Text>
        <div className="mt-6">
          {/* <BarChart
            className="h-72 mt-4"
            data={rentalActivityData}
            index="category"
            categories={['rentals']}
            colors={['indigo']}
            valueFormatter={(number: number) => number.toString()}
            showLegend={false}
            showGridLines={false}
            tooltip={{ show: true }}
          /> */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {rentalActivityData.map((item) => (
              <div key={item.category} className="text-center">
                <Text className="text-sm font-medium">{item.category}</Text>
                <Text className="text-xs text-emerald-600 dark:text-emerald-400">
                  {item.growth}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
