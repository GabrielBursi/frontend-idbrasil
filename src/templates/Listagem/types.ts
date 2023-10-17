import { User } from "@/types"

export type ListagemProps = {
    users: User[];
	isLoading: boolean;
	error: string | undefined;
}
