import Link from 'next/link';

const Header: React.FC = () => (
    <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">My App</Link>
            <nav className="flex space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/posts" className="hover:underline">posts</Link>
                <Link href="/users" className="hover:underline">Users</Link>
            </nav>
        </div>
    </header>
);

export default Header;