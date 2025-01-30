import React from 'react';
import {
  CubeIcon,
  UserIcon,
  ShoppingCartIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { Card, Title, Text, Flex, Badge } from '@tremor/react';

interface Activity {
  id: number;
  type: 'rental' | 'product' | 'user';
  title: string;
  description: string;
  timestamp: string;
  status?: 'success' | 'pending' | 'warning';
  link: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: 'rental',
    title: 'New Rental Request',
    description: 'MacBook Pro (2023) - 15" requested by John Doe',
    timestamp: '5 minutes ago',
    status: 'pending',
    link: '/dashboard/rentals/1',
  },
  {
    id: 2,
    type: 'product',
    title: 'Product Listed',
    description: 'iPhone 13 Pro added for ₹85,000',
    timestamp: '1 hour ago',
    status: 'success',
    link: '/dashboard/products/2',
  },
  {
    id: 3,
    type: 'user',
    title: 'New User Registration',
    description: 'Sarah Smith completed profile verification',
    timestamp: '2 hours ago',
    status: 'success',
    link: '/dashboard/customers/3',
  },
  {
    id: 4,
    type: 'rental',
    title: 'Rental Completed',
    description: 'Office Desk returned - Revenue: ₹12,500',
    timestamp: '3 hours ago',
    status: 'success',
    link: '/dashboard/rentals/4',
  },
  {
    id: 5,
    type: 'product',
    title: 'Product Update',
    description: 'Tesla Model 3 price updated to ₹45,00,000',
    timestamp: '4 hours ago',
    status: 'warning',
    link: '/dashboard/products/5',
  },
];

const getIcon = (type: Activity['type']) => {
  switch (type) {
    case 'rental':
      return ShoppingCartIcon;
    case 'product':
      return CubeIcon;
    case 'user':
      return UserIcon;
    default:
      return CubeIcon;
  }
};

const getStatusColor = (status: Activity['status']) => {
  switch (status) {
    case 'success':
      return 'emerald';
    case 'pending':
      return 'yellow';
    case 'warning':
      return 'orange';
    default:
      return 'gray';
  }
};

export function ActivityFeed() {
  return (
    <Card className="mt-6">
      <Flex>
        <div>
          <Title>Recent Activity</Title>
          <Text className="mt-2">Latest updates from your rental business</Text>
        </div>
        <Badge size="xl" className="bg-primary-50 dark:bg-primary-900/30">
          <ClockIcon className="w-4 h-4 text-primary-700 dark:text-primary-300" />
          <Text className="ml-2 text-primary-700 dark:text-primary-300">Live Updates</Text>
        </Badge>
      </Flex>

      <div className="mt-6 space-y-6">
        {activities.map((activity) => {
          const Icon = getIcon(activity.type);
          const statusColor = getStatusColor(activity.status);

          return (
            <div
              key={activity.id}
              className="relative pl-8 before:absolute before:left-3 before:top-[24px] before:bottom-[-32px] before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800 last:before:bottom-0"
            >
              <div className="relative">
                <div className="absolute left-[-24px] top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center">
                  <Icon className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <Flex>
                    <div>
                      <Text className="font-medium text-gray-900 dark:text-white">
                        {activity.title}
                      </Text>
                      <Text className="mt-1 text-gray-600 dark:text-gray-400">
                        {activity.description}
                      </Text>
                    </div>
                    {activity.status && (
                      <Badge size="sm" color={statusColor}>
                        {activity.status}
                      </Badge>
                    )}
                  </Flex>
                  <Text className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                    {activity.timestamp}
                  </Text>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
