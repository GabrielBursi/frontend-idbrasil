import { User } from "@/types";

export type ModalEditUserProps = {
	isOpen: boolean;
	onClose: () => void;
    isLoading?: boolean;
	user: User | undefined;
	setNewDataUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}
