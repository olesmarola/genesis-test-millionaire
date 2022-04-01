import { FC } from 'react';
import Image from 'next/image';

import images from '../../styles/images.module.scss';

const ArmImage: FC = () => (
  <div className={images.armImage}>
    <Image
      src="/image_hand_624x367@2x.png"
      width={624}
      height={367}
      alt="👍🏻"
      objectFit="contain"
    />
  </div>
);

export default ArmImage;
