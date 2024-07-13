type InfoItemProps = {
  label: string
  value: string | undefined
}
const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-sm font-medium text-gray-300">{label}</p>
      <p className="text-white text-xl font-medium">{value ?? '-'}</p>
    </div>
  )
}
export default InfoItem
