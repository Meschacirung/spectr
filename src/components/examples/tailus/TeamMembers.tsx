import React from "react";
import Button from "@tailus-ui/Button"
import Form from "@tailus-ui/Form";
import Select from "@tailus-ui/Select";
import Avatar from "@tailus-ui/Avatar";
import DropdownMenu from "@tailus-ui/DropdownMenu";
import * as HoverCard from "@radix-ui/react-hover-card"
import { Profile } from "./Profile";
import { persons, type Person } from "./persons";
import { CaretSortIcon, DotsVerticalIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import Card from "@tailus-ui/Card";

export default () => {
    return (
        <Card variant="mixed">
            <div className="mb-2 text-xl font-medium text-gray-950 dark:text-white">Your team</div>
            <p className="mt-0 mb-8 text-gray-700 dark:text-gray-300">Invite your team to collaborate on "Tailus"</p>
            <Form.Root>
                <div className="flex">
                    <div className="relative w-full">
                        <Form.Field name="email" className="space-y-2">
                            <Form.Control asChild>
                                <Form.Input
                                    variant="outlined"
                                    placeholder="Email"
                                    size="lg"
                                    type="email"
                                        required
                                        className="shadow-sm shadow-gray-950/5"
                                    />
                            </Form.Control>
                            <Form.Message intent="warning" match="valueMissing">
                                Please enter your email
                            </Form.Message>
                            <Form.Message intent="danger" match="typeMismatch">
                                Please provide a valid email
                            </Form.Message>
                        </Form.Field>
                        <div className="absolute top-1 my-auto right-1">
                            <Select.Root defaultValue="admin">
                                <Select.Trigger size="sm" softVariant className="bg-transparent dark:bg-transparent" aria-label="role" placeholder="Select a role">
                                    <CaretSortIcon className="size-1.5 text-gray-500 dark:text-gray-500" />
                                </Select.Trigger>
                                <Select.Content position="popper" align="center">
                                    <Select.Item value="admin">Admin</Select.Item>
                                    <Select.Item value="member">Member</Select.Item>
                                </Select.Content>
                            </Select.Root>
                        </div>
                    </div>
                    <Form.Submit asChild>
                        <Button label="Invite" size="lg" className="ml-2" />
                    </Form.Submit>
                </div>
            </Form.Root>
                
            <div className="mt-6 overflow-x-auto">
                <div className="mb-4 font-medium text-gray-950 dark:text-white">Team members </div>
                <div className="min-w-max">
                    {persons.map((person, index) => (
                        <Member key={index} {...person} />
                    ))}
                </div>
            </div>
        </Card>
    )
};

const Member: React.FC<Person> = ({ img, name="", email, role, intent }) => {

    const initials = name.split(' ').map(word => word[0]).join('');

    return (
        <div className="min-w-max flex gap-4 items-center group">
            <Avatar.Root isSoft intent={intent} size="md">
                <Avatar.Image src={img} width={120} height={120}></Avatar.Image>
                <Avatar.Fallback>{initials}</Avatar.Fallback>
            </Avatar.Root>
            <div className="w-[calc(100%-4rem)] py-2 group-last:pb-0 group-last:border-none border-b border-[--ui-light-border-color] dark:border-[--field-dark-border-color] flex gap-4 items-center">
                <div className="w-2/3">
                    <HoverCard.Root>
                        <HoverCard.Trigger href="#" className="font-medium text-sm text-gray-900 dark:text-white hover:underline cursor-pointer">
                            {name}
                        </HoverCard.Trigger>
                        <HoverCard.Content side="top" sideOffset={5} align="start">
                            <Profile />
                        </HoverCard.Content>
                    </HoverCard.Root>
                    <span className="text-sm line-clamp-1 text-gray-600 dark:text-gray-400">{email}</span>
                </div>
                <div className="justify-end flex items-center gap-4 ml-auto">
                    <div>
                        {
                            role !== "Owner" ? (
                                <Select.Root defaultValue={role}>
                                    <Select.Trigger className="shadow-sm shadow-gray-950/5" size="xs" aria-label="role" placeholder="Select a role">
                                        <CaretSortIcon className="size-1.5 text-gray-500 dark:text-gray-500" />
                                    </Select.Trigger>
                                    <Select.Content sideOffset={6} avoidCollisions position="popper" align="center" className="relative z-10">
                                        <Select.Item value="Admin">Admin</Select.Item>
                                        <Select.Item value="Member">Member</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            ) : (
                                    <span className="text-xs text-gray-700 dark:text-white">Owner</span>
                            )
                        }
                    </div>
                    <div className="ml-auto">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <Button icon="only" label="More options" size="xs" variant="ghost" colorVariant="gray">
                                    <DotsVerticalIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content sideOffset={6} align="end" className="min-w-fit">
                                <DropdownMenu.Item>
                                    <Pencil1Icon /> Edit
                                </DropdownMenu.Item>
                                <DropdownMenu.Item intent="danger">
                                    <TrashIcon />Remove
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                </div>
            </div>
        </div>
    )
}