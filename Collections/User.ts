import { CollectionConfig } from "payload/types";

export const users: CollectionConfig = {
    slug: "users",
    auth: true,
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'role',
            defaultValue: 'user',
            admin: {
                condition: (data) => data.role === 'admin'
            },
            type: "select",
            options: [
                {label: "Admin", value: "admin"},
                {label: "User", value: "user"},
            ]
        },
    ],
};
