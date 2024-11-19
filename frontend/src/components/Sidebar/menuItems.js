import { FaShoppingCart, FaPlane, FaBuilding, FaChartBar } from 'react-icons/fa';
import { IoMdGlobe, IoMdDocument, IoMdPerson, IoMdMail } from 'react-icons/io';
import { BiLineChart, BiSpreadsheet, BiMap, BiCloudUpload } from 'react-icons/bi';
import { MdDarkMode, MdLightMode, MdGradient, MdStar } from 'react-icons/md';
import { AiOutlineLayout, AiOutlineFile, AiOutlinePuzzle, AiOutlineSkin } from 'react-icons/ai';
import { BsBriefcase, BsShop, BsPalette, BsGraphUp } from 'react-icons/bs';
import { RiFileTextLine, RiUserLine, RiPaintFill } from 'react-icons/ri';
import { HiLockClosed } from 'react-icons/hi';
import { GiCash } from 'react-icons/gi';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ButtonIcon from '@mui/icons-material/SmartButton';
import CardIcon from '@mui/icons-material/CreditCard';
import ChipIcon from '@mui/icons-material/Memory';
import AvatarIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import NavigationIcon from '@mui/icons-material/Navigation';
import UtilityIcon from '@mui/icons-material/Build';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const menuItems = [
  {
    title: 'GETTING STARTED',
    items: [
      { text: 'Installation', path: '/installation', icon: <DownloadIcon /> },
      { text: 'Documentation', path: '/documentation', icon: <MenuBookIcon /> }
    ]
  },
  {
    title: 'PREMIUM',
    items: [
      { text: 'Templates', path: '/premium/templates', icon: <AiOutlineLayout size={24} /> },
      { text: 'Pages', path: '/premium/pages', icon: <AiOutlineFile size={24} /> },
      { text: 'Components', path: '/premium/components', icon: <AiOutlinePuzzle size={24} /> },
      { text: 'Themes', path: '/premium/themes', icon: <AiOutlineSkin size={24} /> }
    ]
  },
  {
    title: 'BASIC COMPONENTS',
    items: [
      { text: 'Buttons', path: '/buttons', icon: <ButtonIcon /> },
      { text: 'Cards', path: '/cards', icon: <CardIcon /> },
      { text: 'Chips', path: '/chips', icon: <ChipIcon /> },
      { text: 'Avatars', path: '/avatars', icon: <AvatarIcon /> },
      { text: 'Badges', path: '/badges', icon: <BadgeIcon /> }
    ]
  },
  {
    title: 'NAVIGATION',
    items: [
      { text: 'Navigation', path: '/navigation', icon: <NavigationIcon /> }
    ]
  },
  {
    title: 'UTILITY',
    items: [
      { text: 'Utility', path: '/utility', icon: <UtilityIcon /> }
    ]
  },
  {
    title: 'FEEDBACK',
    items: [
      { text: 'Feedback', path: '/feedback', icon: <FeedbackIcon /> }
    ]
  }
]; 