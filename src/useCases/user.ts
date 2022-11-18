import { User } from 'src/schemas/user'
import { api } from 'src/services/api'

import { useEffect, useState } from 'react'

interface useUserProps {
    token?: string
    id?: number
}

const useUser = (initialProps: useUserProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState<string | null>(null)

    const [loading, setLoading] = useState(true)

    const create = async () => {
        try {
            const result = await api.post('/user/', user, {
                headers: {
                    Authorization: `Bearer ${initialProps.token}`
                }
            })

            if (result && result.status === 200) {
                return { ok: true, data: result.data }
            } else {
                setError('Não foi possível criar o usuário')
            }
        } catch (e) {
            setError('Não foi possível criar o usuário')
        }
    }

    const update = async () => {
        try {
            const result = await api.post('/user/', user, {
                headers: {
                    Authorization: `Bearer ${initialProps.token}`
                }
            })

            if (result && result.status === 200) {
                return { ok: true, data: result.data }
            } else {
                setError('Não foi possível criar o usuário')
            }
        } catch (e) {
            setError('Não foi possível criar o usuário')
        }
    }

    const get = async (id: number) => {
        try {
            const result = await api.get(`/user/${id}`)

            if (result && result.status === 200) {
                return { ok: true, data: result.data }
            } else {
                return { ok: false, message: 'Unexpected error' }
            }
        } catch (e) {
            return { ok: false, message: 'Unexpected error' }
        }
    }

    const save = async (data: User) => {
        if (!initialProps.token) return setError('Sem autorização :(')

        if (user) {
            setUser(data)
            update()
        } else {
            setUser(data)
            create()
        }
    }

    useEffect(() => {
        if (loading && user === null && error === null) {
            if (initialProps.id) {
                get(initialProps.id)
            }

            setLoading(false)
        }
    }, [error, initialProps.id, loading, user])

    return { data: user, error, loading, save }
}

export { useUser }
