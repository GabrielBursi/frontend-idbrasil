export type ModalConfirmProps = {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	name?: string;
}
