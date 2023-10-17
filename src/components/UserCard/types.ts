import { User } from "@/types"

export type UserCardProps = {
    user: Omit<User, 'ativo'>
}
