// src/app/detalhes/[id]/page.tsx
import DetalhesClient from './DetalhesClient'

interface Props {
  params: { id: string }
}

export default function Detalhes({ params }: Props) {
  const { id } = params
  return <DetalhesClient id={id} />
}
