import { useEnsAvatar } from 'wagmi'
import { normalize } from 'viem/ens'

import Image from 'next/image'
import profileLogo from '../../../public/logos/profile.svg'

type UserIconProps = {}
const UserIcon: React.FC<UserIconProps> = () => {
  const result = useEnsAvatar({
    name: normalize('wevm.eth'),
  })
  //TODO finish avatar logic
  return <Image src={profileLogo} alt="profile logo" />
}
export default UserIcon
