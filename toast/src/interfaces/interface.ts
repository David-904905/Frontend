import type { SetStateAction } from "react"

export interface ToastPayload
{
    status: string
    message: string
    duration: number
}


export interface ToastStyling
{
    backgroundColor?: string
    borderColor?: string
    statusColor?: string
    closeColor?: string
}

export interface Children
{
    children: React.ReactNode
}

export interface ToastContextPayload
{
    showToast: boolean
    setShowToast: React.Dispatch<SetStateAction<boolean>>
}