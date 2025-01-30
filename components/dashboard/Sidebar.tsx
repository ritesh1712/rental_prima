import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';
import {
  HomeIcon,
  CubeIcon,
  UserGroupIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
  KeyIcon,
  BellIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const productCategories = [
  { name: 'Electronics', icon: ComputerDesktopIcon, href: '/dashboard/products/electronics' },
  { name: 'Furniture', icon: BuildingStorefrontIcon, href: '/dashboard/products/furniture' },
  { name: 'Vehicles', icon: TruckIcon, href: '/dashboard/products/vehicles' },
];

const mainNavigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { name: 'Rentals', icon: CubeIcon, href: '/dashboard/rentals' },
  { name: 'Customers', icon: UserGroupIcon, href: '/dashboard/customers' },
  { name: 'Payments', icon: CreditCardIcon, href: '/dashboard/payments' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '/dashboard/settings' },
];

const userAccountOptions = [
  { name: 'Profile Settings', href: '/dashboard/account/profile', icon: UserCircleIcon },
  { name: 'Change Password', href: '/dashboard/account/password', icon: KeyIcon },
  { name: 'Notifications', href: '/dashboard/account/notifications', icon: BellIcon },
  { name: 'Security', href: '/dashboard/account/security', icon: ShieldCheckIcon },
];

export function Sidebar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isProductsOpen, setIsProductsOpen] = useState(true);

  const isActive = (href: string) => router.pathname === href;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-800">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Rental Prima</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {mainNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
              isActive(item.href)
                ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-100'
                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}

        {/* Products Dropdown */}
        <div>
          <button
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <CubeIcon className="w-5 h-5 mr-3" />
              Products
            </div>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform duration-200 ${
                isProductsOpen ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {isProductsOpen && (
            <div className="pl-10 mt-1 space-y-1">
              {productCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                    isActive(category.href)
                      ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-100'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-3" />
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* User Profile */}
      <div className="flex flex-col p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
            <span className="text-primary-700 dark:text-primary-300 font-medium">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>
        </div>

        {/* User Account Management */}
        <div className="space-y-1">
          {userAccountOptions.map((option) => (
            <Link
              key={option.name}
              href={option.href}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md group"
            >
              <option.icon className="mr-3 h-5 w-5" />
              {option.name}
            </Link>
          ))}

          {/* Logout Button */}
          <button
            onClick={logout}
            className="flex items-center px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md group"
          >
            <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
