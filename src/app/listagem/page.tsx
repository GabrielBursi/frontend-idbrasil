import { usersMock } from '@/components/UsersList/mock'
import { Listagem } from '@/templates'

export default function ListagemPage() {

	

	return (
		<Listagem users={usersMock} isLoading={false}/>
	)
}
