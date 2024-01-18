export const Button = ({ children, ...props }: any) => {
    return (
        <button
            {...props}
            className="size-10 bg-white flex items-center rounded-lg shadow shadow-gray-950/5 dark:shadow-inner dark:shadow-white/5 justify-center group relative before:absolute before:inset-0 before:rounded-[7px] before:border-t before:border-white/20 before:bg-gradient-to-b before:from-gray-50 dark:before:from-white/5 dark:ring ring-gray-50 border dark:ring-gray-950/25 dark:bg-gray-900 dark:border-gray-800 hover:before:from-gray-100 dark:hover:before:from-white/10"
        >
            {children}
        </button>
    );
}