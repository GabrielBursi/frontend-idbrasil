import { User } from "@/types";

export type ModalEditUserProps = {
	isOpen: boolean;
    isLoading?: boolean;
	user: User | undefined;
}
