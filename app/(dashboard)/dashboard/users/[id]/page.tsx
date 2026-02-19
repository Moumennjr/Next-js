const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div>
            This is user details page for user with id: {id}
        </div>
    )
}

export default UserDetails;