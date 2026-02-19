import Link from "next/link";

const Users = () => {


    return (
        <div>
            <ul>
                <li><Link href="/dashboard/users/1">User 1</Link></li>
            </ul>
        </div>
    )
}

export default Users;