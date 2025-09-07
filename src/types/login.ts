import { Dispatch, SetStateAction } from "react"

export interface LoginProps {
    openModalLogin: boolean
    setOpenModalLogin: Dispatch<SetStateAction<boolean>>
}