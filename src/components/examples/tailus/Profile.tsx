import Card from "@tailus-ui/Card";
import Avatar from "@tailus-ui/Avatar";
import { faker } from '@faker-js/faker';
import Button from "@tailus-ui/Button";

interface User {
    name: string;
    avatarUrl: string;
    bio: string;
    about : string
}

const user: User = {
    name: faker.person.fullName(),
    avatarUrl: faker.image.avatar(),
    bio: faker.person.bio(),
    about : faker.lorem.lines(2)
};

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

export const Profile = () => {
      
  return (
    <Card className="max-w-sm w-full" variant="outlined" padding={8}>
        <div className="flex gap-4">
            <Avatar.Root size="lg" isSoft intent={getRandomColor()}>
                <Avatar.Image src={user.avatarUrl} alt={user.name} />
                <Avatar.Fallback>
                    {getInitials(user.name)}
                </Avatar.Fallback>
            </Avatar.Root>
            <div className="w-[calc(100%-4rem)]">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{user.name}</h3>
                <span className="line-clamp-1 text-gray-600 dark:text-gray-400">{user.bio}</span>
                <p className="line-clamp-3 mb-6 mt-4 text-gray-700 dark:text-gray-300">{user.about}</p>
                <div className="flex gap-4">
                    <Button className="w-full" size="sm" variant="soft" label="Connect" />
                    <Button className="w-full" size="sm" label="Follow" />
                </div>
            </div>
        </div>
    </Card>
  );
};

export default Profile;