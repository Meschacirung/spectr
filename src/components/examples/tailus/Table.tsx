import { faker } from '@faker-js/faker';
import Avatar from "@tailus-ui/Avatar";
import DropdownMenu from '@tailus-ui/DropdownMenu';
import Button from '@tailus-ui/Button';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import Badge from '@tailus-ui/Badge';
import Card from '@tailus-ui/Card';
import Checkbox from '@tailus-ui/Checkbox';
import AnimatedCheckIcon from './AnimatedCheckIcon';
import { useState, useEffect } from 'react';

interface Customer {
  id: number;
  name: string;
  email: string; 
  avatarUrl: string;
  status?: string;
  date?: string;
  revenue?: string;
  orders?: string;
}

const customers: Customer[] = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatarUrl: faker.image.avatar(),
  date: faker.date.past().toLocaleDateString('en-US'),
  status : "Paid",
  revenue: `$${faker.finance.amount(100, 1000, 2)}`,
  orders: faker.number.int(20).toString(),
}));

const colors = ['primary', 'secondary', 'accent', 'danger', 'warning', 'success', 'info', 'gray'];
type Color = "primary" | "secondary" | "accent" | "danger" | "warning" | "success" | "info" | "gray"

function getRandomColor():Color {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex] as Color;
}

function getInitials(name: string): string {
  const parts = name.split(' ');
  let initials = '';
  for (let i = 0; i < Math.min(2, parts.length); i++) {
    if (parts[i].length > 0 && parts[i] !== '') {
      initials += parts[i][0];
    }
  }
  return initials.toUpperCase();
}

export const Customers = () => {
    return (
        <Card variant='mixed' className='p-[--card-padding] overflow-x-auto sm:overflow-visible'> 
          <div className="mb-6 sticky left-0">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">New Customers</h3>
                <span className="text-sm text-gray-500">More data about your customers from the last month</span>
          </div>  
          <div className="min-w-max sm:min-w-full sm:w-full py-3 bg-gray-50 dark:bg-gray-950 px-4 gap-4 flex border rounded-lg border-gray-200 dark:border-gray-800">
            <Checkbox.Root id='all-users' className='shadow-none w-[1.125rem] h-[1.125rem] dark:before:shadow-gray-950/25' >
                <Checkbox.Indicator>
                  <AnimatedCheckIcon />
                </Checkbox.Indicator>
            </Checkbox.Root>    
            <div className="flex gap-4 justify-between text-sm w-[calc(100%-1.25rem)] pr-4">
              <div className='w-3/5 flex items-center gap-4'>
                <div className="w-20 text-gray-600 dark:text-gray-400">Date</div> 
                <div className="pl-4 w-56 text-gray-600 dark:text-gray-400">Name</div> 
                <div className="pl-4 w-24 text-gray-600 dark:text-gray-400">Status</div> 
              </div>
              
              <div className="w-52 flex gap-4 justify-between items-center">
                <div className="w-20 text-center text-gray-600 dark:text-gray-400">Orders</div> 
                <div className="w-28 text-gray-600 dark:text-gray-400">Revenue</div> 
                </div>
            </div>
          </div>
        
          <div className='min-w-max sm:min-w-full sm:w-full divide-y divide-gray-200 dark:divide-gray-800'>
              {customers.map((customer) => (
                <div className="pl-4 items-center flex " key={customer.id}> 
                      <Checkbox.Root className='shadow-none w-[1.125rem] h-[1.125rem] dark:before:shadow-gray-950/25' id={customer.id.toString()}>
                          <Checkbox.Indicator>
                            <AnimatedCheckIcon />
                          </Checkbox.Indicator>
                      </Checkbox.Root>
                      <Checkbox.Label htmlFor={customer.id.toString()} className="select-none font-normal w-[calc(100%-1.25rem)] px-4 py-3 flex items-center justify-between gap-4" key={customer.id}>
                        <div className='w-3/5 flex items-center gap-4'>
                            <div className="w-24 line-clamp-1 block text-sm text-gray-600 dark:text-gray-400">{customer.date}</div>
                            <Avatar.Root isSoft size="sm" intent={getRandomColor()}>
                              <Avatar.Image src={customer.avatarUrl} alt={customer.name} />
                              <Avatar.Fallback className='text-sm'>{getInitials(customer.name)}</Avatar.Fallback>
                            </Avatar.Root>
                            <div className="w-44 line-clamp-1 text-sm font-medium text-gray-700 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">{customer.name}</div>
                            <div className="w-16 line-clamp-1 text-sm font-medium text-gray-700 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                              <Badge variant='soft' colorVariant='success' size='md' className='text-success-700 dark:bg-success-500/10 font-normal bg-opacity-30 dark:bg-opacity-20 dark:border-white/5'>{customer.status}</Badge>
                            </div>
                        </div>
                        <div className="w-56 flex gap-4 justify-end items-center">
                            <div className="w-12 line-clamp-1 block text-sm text-gray-600 dark:text-white">{customer.orders}</div>
                            <div className="w-20 line-clamp-1 block text-sm text-gray-600 dark:text-white">{customer.revenue}</div>

                            <DropdownMenu.Root modal={false}>
                              <DropdownMenu.Trigger asChild>
                                  <Button icon="only" label="More options" size="xs" variant="ghost" colorVariant="gray">
                                      <DotsVerticalIcon />
                                  </Button>
                              </DropdownMenu.Trigger>
                              <DropdownMenu.Content side="bottom" sideOffset={6} align="end">
                                  <DropdownMenu.Item>
                                      View Profile
                                  </DropdownMenu.Item>
                                  <DropdownMenu.Item>
                                      Edit
                                </DropdownMenu.Item>
                                <DropdownMenu.Item>
                                      Archive
                                  </DropdownMenu.Item>
                                  <DropdownMenu.Item intent="danger">
                                      Delete
                                  </DropdownMenu.Item>
                              </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </div>
                      </Checkbox.Label>
                </div>
              ))}
          </div> 
        </Card>
    );
};

export default Customers;