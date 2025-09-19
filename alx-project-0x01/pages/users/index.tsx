import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
    users: UserProps[];
}

const UserPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">Users</h1>

                <div className="grid grid-cols-3 gap-4">
                    {users.map((user) => (
                        <UserCard key={user.id} {...user}/>
                    ))}
                </div>
            </main>
        </div>
    )
}


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {
            users,
        },
    };
}

export default UserPage;