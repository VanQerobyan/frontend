import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { Signup } from "../pages/auth/Signup"
import { Signin } from "../pages/auth/Signin"
import { ProfileLayout } from "../layout/ProfileLayout"
import { Profile } from "../pages/app/Profile/Profile"
import { Settings } from "../pages/app/Settings/Settings"
import { Followings } from "../pages/app/Following/Following"
import { Followers } from "../pages/app/Follower/Follower"
import { Posts } from "../pages/app/Posts/Posts"
import { Search } from "../pages/app/Search/Search"
import { ProfileUsername } from "../pages/app/Profile/components/ProfileUsername"
import { Theme } from "../pages/app/theme/Theme"
import { ChangePassword } from "../pages/app/Settings/ChangePassword/ChangePassword"
import { FollowRequest } from "../pages/app/Follower/component/FollowRequestByMe"

export const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Signup />
            },
            {
                path: "signin",
                element: <Signin />
            }
        ]
    },
    {
        path: "profile",
        element: <ProfileLayout />,
        children: [
            {
                index: true,
                element: <Profile />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "posts",
                element: <Posts />
            },
            {
                path: "follower",
                element: <Followers />
            },
            {
                path: "following",
                element: <Followings />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: ":username",
                element: <ProfileUsername />
            },
            {
                path: "settings/theme",
                element: <Theme />
            },
            {
                path: "settings/password",
                element: <ChangePassword />
            },
            {path: "follower/request", element: <FollowRequest/>},
            {path: "/profile/follower/sender/username", element: <ProfileUsername/>}
        ]
    }
])