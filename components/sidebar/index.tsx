import SidebarRow from './SidebarRow';

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UsersIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
    return (
        <div className="hidden sm:block p-2 pt-4 w-1/6 lg:-1/4  space-y-4 md:space-y-0">
            <div className="flex md:p-1.5 items-center md:hover:bg-gray-200 rounded-md cursor-pointer">
              <img
                src="/avatars/rahul.gif"
                className="h-8 w-8 rounded-full"
                alt=""/>
              <p className="hidden md:inline ml-2">Rahul Mondal</p>
            </div>

            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See More"/>
          </div>
  );
}

export default Sidebar;
