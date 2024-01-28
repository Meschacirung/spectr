export type Intent = "primary" | "secondary" | "accent" | "danger" | "success" | "warning" | "info" | "gray";
export interface Person {
    name?: string,
    email?: string,
    img: string,
    intent: Intent,
    initials: string,
    role?: string
}

export const persons:Person[] = [
    {
        name: "Bernard Ngandu",
        email : "b.ngandu@tailus.io",
        img: "https://pbs.twimg.com/profile_images/1660255666617892866/aJV_B5cN_400x400.jpg",
        intent: "primary",
        initials: "BN",
        role: "Owner"
    },
    {
        name: "Glodie Lukose",
        email : "g.lukose@tailus.io",
        img: "https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg",
        intent: "secondary",
        initials: "GL",
        role: "Admin"
    },
    {
        name: "Méschac Irung",
        email : "m.irung@tailus.io",
        img: "https://pbs.twimg.com/profile_images/1671429872499978240/HnFAobz3_400x400.jpg",
        intent: "accent",
        initials: "MI",
        role: "Admin"
    },
    {
        name: "Théo Balick",
        email : "t.balick@tailus.io",
        img: "https://pbs.twimg.com/profile_images/1679957923823247360/47FJpyBb_400x400.jpg",
        intent: "gray",
        initials: "TB",
        role: "Admin"
    }
]