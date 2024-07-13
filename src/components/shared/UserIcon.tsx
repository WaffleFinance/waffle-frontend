import { useEnsAvatar } from 'wagmi'
import { normalize } from 'viem/ens'

import Image from 'next/image'
import profileLogo from '../../../public/logos/profile.svg'

const UserIcon: React.FC = () => {
  const { data } = useEnsAvatar({
    name: normalize('wevm.eth'),
  })
  console.log('ENSAVATAR', data)
  //TODO finish avatar logic
  return <Image src={profileLogo} alt="profile logo" />
}
export default UserIcon
