import { Sidebar } from "flowbite-react";

import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload, HiSupport } from "react-icons/hi";

//import userImg from "../assets/profile.jpg"

export const SideBar = () => {
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="" icon={HiOutlineCloudUpload}>
            uploads:
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/uploadBook" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/uploadMovie" icon={HiOutlineCloudUpload}>
            Upload Movie
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/uploadAnimanga" icon={HiOutlineCloudUpload}>
            Upload Animanga
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manageBook" icon={HiInbox}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manageMovie" icon={HiInbox}>
            Manage Movie
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manageAnimanga" icon={HiInbox}>
            Manage Animanga
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/sign-up" icon={HiArrowSmRight}>
            Sign Up
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Back Home
          </Sidebar.Item>
          
          <Sidebar.Item href="#" icon={HiSupport}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    )
}