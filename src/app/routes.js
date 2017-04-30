import { routes as dashboard } from './dashboard/'
import { routes as auth } from './auth/'
import { routes as campeonatos } from './campeonatos/'
import { routes as users } from './users/'

export default [ ...dashboard, ...auth, ...campeonatos, ...users ]
