import { ReactNode } from 'react'

type InfoItemProps = {
  label: string
  value: string | undefined | ReactNode
}
const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-sm font-medium text-gray-300">{label}</p>
      <div className="text-xl font-medium text-white">{value ?? '-'}</div>
    </div>
  )
}
export default InfoItem
