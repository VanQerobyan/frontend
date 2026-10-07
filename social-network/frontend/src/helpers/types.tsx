export type SignUpData = {
    firstName: string
    lastName: string
    username: string
    password: string
}

export type SignInCredentials = {
    username: string
    password: string
}

export type ThemeMode = "dark" | "light" | "system"

export type ResolvedTheme = "dark" | "light"

export type ProfileType = {
    id: number
    firstName: string
    lastName: string
    username: string
    avatar: string
    bio: string
    followers: Follower[]
    followings: Following[]
    posts: Post[]
    isAccountPrivate: boolean
    theme: ThemeMode
}

export type Follower = {
    sender: Omit<ProfileType, "followers" | "followings" | "posts">
}

export type Following = {
    receiver: Omit<ProfileType, "followers" | "followings" | "posts">
}

export type ProfileContextType = {
    profile: ProfileType
    setProfile: (profile: ProfileType) => void
    reloadUser: () => void
    theme: ThemeMode
    setTheme: (theme: ThemeMode) => void
    resolvedTheme: ResolvedTheme
}

export type Post = {
    id: number
    title: string
    postImage: string
}