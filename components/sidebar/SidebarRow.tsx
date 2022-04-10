
const SidebarRow = ({Icon, title}) => {
  return (
  	<div className="flex md:p-1.5 items-center hover:bg-gray-200 rounded-md cursor-pointer">
      <Icon className="h-5 md:h-6 text-blue-500"/>
      <p className="hidden lg:inline ml-2">{title}</p>
  	</div>
  )
}

export default SidebarRow;
