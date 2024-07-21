import { deleteUser } from '@/lib/action'
import Image from 'next/image'
import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const UserListItem = ({user}) => {
    const handleDeleteAction = async () => {
        "use server";
        await deleteUser(user._id);
      }
  return (
    <li className="flex gap-4 items-center">
    <div className="relative w-20 h-20">
      <Image
        src={user?.avatar}
        alt={user?.userName}
        fill
        className="object-cover"
      />
    </div>
    <div className="">
      <h4>{user?.userName} {user?.isAdmin ? "Admin" : ""}</h4>
      <p>{user?.createdAt.slice(0, 10)}</p>
      <p>{user?.email}</p>
      <p>{user?._id}</p>
    </div>
    <form className="ms-auto" action={handleDeleteAction}>
      <button className="text-4xl text-red-700" title={`delete ${user?.title} post`}><MdDeleteForever/></button>
    </form>
  </li>
  )
}

export default UserListItem